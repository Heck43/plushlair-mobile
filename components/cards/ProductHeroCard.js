// большая героическая карточка на странице продукта~~
import { Animated, View, Text, Pressable } from 'react-native'
import { useEntranceStyle } from '../../utils/animations'
import { formatMoney } from '../../utils/helpers'
import { styles } from '../../styles/styles'
import { ProductArtwork } from '../ui/ProductArtwork'
import { ProductRating } from '../ui/ProductRating'

export function ProductHeroCard({ product, width, onAddToCart }) {
  const entranceStyle = useEntranceStyle(0, 12, 0.992)

  return (
    <Animated.View style={[entranceStyle, { width }]}>
      <View style={styles.heroCard}>
        <ProductArtwork product={product} variant="hero" />
        <View style={styles.heroBody}>
          <Text style={styles.heroTitle}>{product.name}</Text>
          <Text style={styles.heroSubtitle}>{product.subtitle}</Text>
          <ProductRating product={product} />
          <Text style={styles.heroPrice}>{formatMoney(product.price)}</Text>
          <Pressable style={styles.exactPrimaryButton} onPress={onAddToCart}>
            <Text style={styles.exactPrimaryButtonText}>В корзину</Text>
          </Pressable>
        </View>
      </View>
    </Animated.View>
  )
}
