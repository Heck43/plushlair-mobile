// главный файл приложения~~ теперь маленький и аккуратный мррр~~
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  View,
  useWindowDimensions,
} from 'react-native'

// данные~~
import { products, popularSearches } from './data/products'
import { addresses, ordersSeed, paymentOptions } from './data/static'

// утилитки~~
import { getSuggestions, pushRecentSearch, paymentMethodLabel, formatMoney } from './utils/helpers'

// стилики~~
import { styles } from './styles/styles'

// картиночка фона~~
import { bgBlur } from './data/products'

// ui компоненты~~
import { OfflineBanner } from './components/ui/OfflineBanner'
import { BottomNav } from './components/ui/BottomNav'
import { ScreenScroll } from './components/ui/ScreenScroll'

// экраны~~
import { CatalogScreen } from './components/screens/CatalogScreen'
import { ProductScreen } from './components/screens/ProductScreen'
import { FavoritesScreen } from './components/screens/FavoritesScreen'
import { CartScreen } from './components/screens/CartScreen'
import { CheckoutScreen } from './components/screens/CheckoutScreen'
import { ProfileScreen } from './components/screens/ProfileScreen'
import { SuccessScreen } from './components/screens/SuccessScreen'

export default function App() {
  const { width } = useWindowDimensions()
  const isWide = width >= 520
  const frameWidth = isWide ? 390 : width
  const contentWidth = Math.max(320, frameWidth - 32)
  const cardWidth = Math.floor((contentWidth - 12) / 2)

  // состояние навигации~~
  const [tab, setTab] = useState('catalog')
  const [selectedProductId, setSelectedProductId] = useState(products[0].id)

  // состояние поиска~~
  const [search, setSearch] = useState('')
  const [recentSearches, setRecentSearches] = useState([
    'loona plush',
    'mimi typh',
    'neon plush',
  ])
  const [styleFilter, setStyleFilter] = useState('all')
  const [sortBy, setSortBy] = useState('popular')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  // избранное и корзина~~
  const [favorites, setFavorites] = useState(['loona', 'mimi', 'gonon'])
  const [cart, setCart] = useState([
    { id: 'loona', qty: 1 },
    { id: 'gonon', qty: 1 },
    { id: 'wypher', qty: 1 },
  ])

  // оформление заказа~~
  const [selectedAddressId, setSelectedAddressId] = useState(addresses[0].id)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [paymentError, setPaymentError] = useState('')
  const [orders, setOrders] = useState(ordersSeed)
  const [lastOrderNumber, setLastOrderNumber] = useState('PL-2401')

  // офлайн-режим~~
  const [isOffline, setIsOffline] = useState(false)

  // слушаем состояние сети~~
  useEffect(() => {
    if (Platform.OS !== 'web' || typeof window === 'undefined') {
      return undefined
    }

    const syncOnlineState = () => {
      setIsOffline(!window.navigator.onLine)
    }

    syncOnlineState()
    window.addEventListener('online', syncOnlineState)
    window.addEventListener('offline', syncOnlineState)

    return () => {
      window.removeEventListener('online', syncOnlineState)
      window.removeEventListener('offline', syncOnlineState)
    }
  }, [])

  // вычисляемые значения~~
  const selectedProduct =
    products.find((product) => product.id === selectedProductId) ?? products[0]

  const searchNeedle = search.trim().toLowerCase()
  const minPriceValue = Number.parseInt(minPrice.replace(/[^\d]/g, ''), 10)
  const maxPriceValue = Number.parseInt(maxPrice.replace(/[^\d]/g, ''), 10)

  // фильтрация и сортировка каталога~~
  const visibleProducts = products
    .filter((product) => {
      const haystack = [
        product.name,
        product.subtitle,
        product.search,
        product.style,
        product.series,
        product.short,
        product.desc,
      ]
        .join(' ')
        .toLowerCase()

      const matchesSearch = searchNeedle.length === 0 || haystack.includes(searchNeedle)
      const matchesStyle = styleFilter === 'all' || product.style === styleFilter
      const matchesStock = !inStockOnly || product.inStock
      const matchesPriceMin =
        Number.isNaN(minPriceValue) || searchNeedle.length === 0 || product.price >= minPriceValue
      const matchesPriceMax =
        Number.isNaN(maxPriceValue) || searchNeedle.length === 0 || product.price <= maxPriceValue

      return matchesSearch && matchesStyle && matchesStock && matchesPriceMin && matchesPriceMax
    })
    .sort((left, right) => {
      switch (sortBy) {
        case 'cheap':
          return left.price - right.price
        case 'expensive':
          return right.price - left.price
        case 'rating':
          return right.rating - left.rating
        case 'new':
          return Number(right.isNew) - Number(left.isNew) || right.popularity - left.popularity
        case 'popular':
        default:
          return right.popularity - left.popularity
      }
    })

  // данные корзины с продуктами~~
  const cartEntries = cart
    .map((item) => {
      const product = products.find((candidate) => candidate.id === item.id)
      return product ? { ...item, product, unitPrice: product.cartPrice ?? product.price } : null
    })
    .filter(Boolean)

  const favoriteProducts = products.filter((product) => favorites.includes(product.id))
  const cartTotal = cartEntries.reduce((sum, entry) => sum + entry.unitPrice * entry.qty, 0)

  const activeNav =
    tab === 'catalog' || tab === 'product'
      ? 'home'
      : tab === 'checkout' || tab === 'success'
        ? 'cart'
        : tab

  const suggestions = getSuggestions(searchNeedle, recentSearches, popularSearches)
  const selectedAddress = addresses.find((address) => address.id === selectedAddressId) ?? addresses[0]
  const selectedSimilarProducts = products.filter((product) => product.id !== selectedProduct.id)

  // обработчики действий~~
  const openProduct = (productId) => {
    setSelectedProductId(productId)
    setTab('product')
    pushRecentSearch(productId, setRecentSearches)
  }

  const toggleFavorite = (productId) => {
    setFavorites((previous) =>
      previous.includes(productId)
        ? previous.filter((item) => item !== productId)
        : [...previous, productId],
    )
  }

  const addToCart = (productId) => {
    setCart((previous) => {
      const existingItem = previous.find((item) => item.id === productId)
      if (existingItem) {
        return previous.map((item) =>
          item.id === productId ? { ...item, qty: item.qty + 1 } : item,
        )
      }
      return [...previous, { id: productId, qty: 1 }]
    })
  }

  const changeQty = (productId, delta) => {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === productId ? { ...item, qty: Math.max(0, item.qty + delta) } : item,
        )
        .filter((item) => item.qty > 0),
    )
  }

  const removeFromCart = (productId) => {
    setCart((previous) => previous.filter((item) => item.id !== productId))
  }

  const pickSuggestion = (value) => {
    setSearch(value)
    pushRecentSearch(value, setRecentSearches)
  }

  const clearFilters = () => {
    setSearch('')
    setStyleFilter('all')
    setSortBy('popular')
    setMinPrice('')
    setMaxPrice('')
    setInStockOnly(false)
  }

  const confirmOrder = () => {
    if (cartEntries.length === 0) {
      setPaymentError('Корзина пустая. Добавь хотя бы одного плюшика.')
      return
    }

    const orderNumber = `PL-${Math.floor(1000 + Math.random() * 9000)}`

    setOrders((previous) => [
      {
        id: orderNumber,
        status: 'в пути',
        total: cartTotal,
        payment: paymentMethodLabel(paymentMethod),
        addressId: selectedAddress.id,
        date: 'только что',
      },
      ...previous,
    ])
    setLastOrderNumber(orderNumber)
    setPaymentError('')
    setCart([])
    setTab('success')
  }

  const jumpToCheckout = () => {
    setPaymentError('')
    setTab('checkout')
  }

  const continueShopping = () => {
    setPaymentError('')
    setTab('catalog')
  }

  return (
    <ImageBackground source={bgBlur} style={styles.background} resizeMode="cover">
      <View style={styles.backgroundShade} />
      <View style={styles.orbLarge} />
      <View style={styles.orbSmall} />
      <StatusBar style="light" />

      <SafeAreaView style={[styles.safeArea, isWide && styles.safeAreaWide]}>
        <View
          style={[
            styles.appFrame,
            isWide && styles.appFrameWide,
            { width: frameWidth },
          ]}
        >
          {isOffline ? <OfflineBanner /> : null}

          <View style={styles.screenStage}>
            {/* экран каталога~~ */}
            {tab === 'catalog' ? (
              <ScreenScroll>
                <CatalogScreen
                  contentWidth={contentWidth}
                  favorites={favorites}
                  search={search}
                  visibleProducts={visibleProducts}
                  cardWidth={cardWidth}
                  onChangeSearch={setSearch}
                  onSearchSubmit={() => pushRecentSearch(search, setRecentSearches)}
                  onClearFilters={clearFilters}
                  onOpenProduct={openProduct}
                  onAddToCart={addToCart}
                />
              </ScreenScroll>
            ) : null}

            {/* экран продукта~~ */}
            {tab === 'product' ? (
              <ScreenScroll>
                <ProductScreen
                  contentWidth={contentWidth}
                  selectedProduct={selectedProduct}
                  search={search}
                  onChangeSearch={setSearch}
                  onSearchSubmit={() => pushRecentSearch(search, setRecentSearches)}
                  onAddToCart={() => addToCart(selectedProduct.id)}
                  onOpenSimilar={openProduct}
                  selectedSimilarProducts={selectedSimilarProducts}
                />
              </ScreenScroll>
            ) : null}

            {/* экран избранного~~ */}
            {tab === 'favorites' ? (
              <ScreenScroll>
                <FavoritesScreen
                  favoriteProducts={favoriteProducts}
                  onBackToCatalog={() => setTab('catalog')}
                  onOpenProduct={openProduct}
                  onToggleFavorite={toggleFavorite}
                  onAddToCart={addToCart}
                  search={search}
                  onChangeSearch={setSearch}
                  onSearchSubmit={() => pushRecentSearch(search, setRecentSearches)}
                />
              </ScreenScroll>
            ) : null}

            {/* экран корзины~~ */}
            {tab === 'cart' ? (
              <ScreenScroll>
                <CartScreen
                  cartEntries={cartEntries}
                  cartTotal={cartTotal}
                  onChangeQty={changeQty}
                  onRemove={removeFromCart}
                  onOpenProduct={openProduct}
                  onGoToCheckout={jumpToCheckout}
                  onGoToCatalog={continueShopping}
                  search={search}
                  onChangeSearch={setSearch}
                  onSearchSubmit={() => pushRecentSearch(search, setRecentSearches)}
                />
              </ScreenScroll>
            ) : null}

            {/* экран оформления~~ */}
            {tab === 'checkout' ? (
              <ScreenScroll>
                <CheckoutScreen
                  selectedAddress={selectedAddress}
                  addresses={addresses}
                  paymentMethod={paymentMethod}
                  paymentError={paymentError}
                  cartItemsTotal={cartTotal}
                  cartTotal={cartTotal}
                  onChangeAddress={setSelectedAddressId}
                  onChangePaymentMethod={(value) => {
                    setPaymentMethod(value)
                    setPaymentError('')
                  }}
                  onConfirmOrder={confirmOrder}
                  search={search}
                  onChangeSearch={setSearch}
                  onSearchSubmit={() => pushRecentSearch(search, setRecentSearches)}
                />
              </ScreenScroll>
            ) : null}

            {/* экран профиля~~ */}
            {tab === 'profile' ? (
              <ScreenScroll>
                <ProfileScreen
                  onOpenCheckout={jumpToCheckout}
                  onOpenCatalog={continueShopping}
                  onOpenFavorites={() => setTab('favorites')}
                  onOpenSettings={() => setTab('checkout')}
                  search={search}
                  onChangeSearch={setSearch}
                  onSearchSubmit={() => pushRecentSearch(search, setRecentSearches)}
                />
              </ScreenScroll>
            ) : null}

            {/* экран успеха~~ */}
            {tab === 'success' ? (
              <ScreenScroll contentStyle={styles.successContent}>
                <SuccessScreen
                  onContinueShopping={continueShopping}
                  onOpenProfile={() => setTab('profile')}
                  search={search}
                  onChangeSearch={setSearch}
                  onSearchSubmit={() => pushRecentSearch(search, setRecentSearches)}
                />
              </ScreenScroll>
            ) : null}
          </View>

          <BottomNav
            activeKey={activeNav}
            favoritesCount={favoriteProducts.length}
            cartCount={cartEntries.reduce((sum, item) => sum + item.qty, 0)}
            onNavigate={(nextTab) => {
              setPaymentError('')
              setTab(nextTab === 'home' ? 'catalog' : nextTab)
            }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}
