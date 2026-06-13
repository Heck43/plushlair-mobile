// экран страницы продукта~~ детальный просмотр плюшика~~
import { Animated, View, ScrollView } from 'react-native'
import { useEntranceStyle } from '../../utils/animations'
import { styles } from '../../styles/styles'
import { PhoneHeader } from '../ui/PhoneHeader'
import { ProductHeroCard } from '../cards/ProductHeroCard'
import { MiniProductCard } from '../cards/MiniProductCard'

export function ProductScreen({
  contentWidth,
  selectedProduct,
  search,
  onChangeSearch,
  onSearchSubmit,
  onAddToCart,
  onOpenSimilar,
  selectedSimilarProducts,
}) {
  const entranceStyle = useEntranceStyle(0, 10, 0.995)

  return (
    <Animated.View style={[entranceStyle, styles.page]}>
      <PhoneHeader search={search} onChangeSearch={onChangeSearch} onSearchSubmit={onSearchSubmit} />

      {/* большая карточка выбранного плюша~~ */}
      <ProductHeroCard
        key={selectedProduct.id}
        product={selectedProduct}
        width={contentWidth}
        onAddToCart={onAddToCart}
      />

      {/* горизонтальный рейл похожих плюшей~~ */}
      <View style={styles.heroRailSection}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.heroRail}
        >
          {selectedSimilarProducts.map((product, index) => (
            <MiniProductCard
              key={product.id}
              product={product}
              width={Math.min(112, contentWidth * 0.29)}
              onOpen={() => onOpenSimilar(product.id)}
              animationDelay={index * 60}
            />
          ))}
        </ScrollView>
      </View>
    </Animated.View>
  )
}
