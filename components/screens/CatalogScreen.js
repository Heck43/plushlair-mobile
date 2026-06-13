// экран каталога плюшиков~~ самый главный экранчик~~
import { Animated, View } from 'react-native'
import { useEntranceStyle } from '../../utils/animations'
import { styles } from '../../styles/styles'
import { PhoneHeader } from '../ui/PhoneHeader'
import { EmptyState } from '../ui/EmptyState'
import { ProductCard } from '../cards/ProductCard'

export function CatalogScreen({
  favorites,
  search,
  visibleProducts,
  cardWidth,
  onChangeSearch,
  onSearchSubmit,
  onClearFilters,
  onOpenProduct,
  onAddToCart,
}) {
  const entranceStyle = useEntranceStyle(0, 10, 0.995)

  return (
    <Animated.View style={[entranceStyle, styles.page]}>
      <PhoneHeader search={search} onChangeSearch={onChangeSearch} onSearchSubmit={onSearchSubmit} />

      <View style={styles.catalogGrid}>
        {visibleProducts.length === 0 ? (
          <EmptyState
            title="Ничего не нашлось"
            subtitle="Попробуй другой запрос."
            actionLabel="Сбросить"
            onAction={onClearFilters}
          />
        ) : (
          visibleProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              width={cardWidth}
              isFavorite={favorites.includes(product.id)}
              onOpen={() => onOpenProduct(product.id)}
              onAddToCart={() => onAddToCart(product.id)}
              animationDelay={index * 70}
            />
          ))
        )}
      </View>
    </Animated.View>
  )
}
