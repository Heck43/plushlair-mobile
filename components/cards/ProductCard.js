// карточка плюшика в каталоге~~ самая главная карточка~~
import { Animated, View, Text, Pressable } from 'react-native'
import { useEntranceStyle } from '../../utils/animations'
import { formatMoney } from '../../utils/helpers'
import { styles } from '../../styles/styles'
import { ProductArtwork } from '../ui/ProductArtwork'
import { ProductRating } from '../ui/ProductRating'

export function ProductCard({ product, width, onOpen, onAddToCart, animationDelay = 0 }) {
  const entranceStyle = useEntranceStyle(animationDelay, 14, 0.98)

  return (
    <Animated.View style={[entranceStyle, { width }]}>
      <View style={styles.catalogCard}>
        <Pressable
          style={({ pressed }) => [styles.catalogCardTap, pressed && styles.cardPressed]}
          onPress={onOpen}
        >
          <ProductArtwork product={product} variant="card" />
          <View style={styles.catalogCardBody}>
            <Text style={styles.catalogCardTitle}>{product.name}</Text>
            <ProductRating product={product} />
            <Text style={styles.catalogCardPrice}>{formatMoney(product.price)}</Text>
          </View>
        </Pressable>
        <Pressable style={styles.catalogButton} onPress={onAddToCart}>
          <Text style={styles.catalogButtonText}>В корзину</Text>
        </Pressable>
      </View>
    </Animated.View>
  )
}
