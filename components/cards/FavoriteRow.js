// строчка избранного плюшика~~ с сердечком и кнопкой~~
import { Animated, View, Text, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useEntranceStyle } from '../../utils/animations'
import { formatMoney } from '../../utils/helpers'
import { styles } from '../../styles/styles'
import { ProductArtwork } from '../ui/ProductArtwork'

export function FavoriteRow({ product, onOpen, onToggleFavorite, onAddToCart, animationDelay = 0 }) {
  const entranceStyle = useEntranceStyle(animationDelay, 12, 0.985)

  return (
    <Animated.View style={[entranceStyle, styles.favoriteRow]}>
      <Pressable
        style={({ pressed }) => [styles.favoriteRowTap, pressed && styles.cardPressed]}
        onPress={onOpen}
      >
        <View style={styles.favoriteRowPoster}>
          <ProductArtwork product={product} variant="thumb" />
        </View>
        <View style={styles.favoriteRowBody}>
          <Text style={styles.favoriteRowTitle}>{product.name}</Text>
          <Text style={styles.favoriteRowSubtitle}>{product.subtitle}</Text>
          <Text style={styles.favoriteRowPrice}>{formatMoney(product.price)}</Text>
        </View>
      </Pressable>
      <View style={styles.favoriteRowActions}>
        <Pressable style={styles.favoriteGhostButton} onPress={onToggleFavorite}>
          <Feather color="#ffffff" name="heart" size={18} />
        </Pressable>
        <Pressable style={styles.favoriteAddButton} onPress={onAddToCart}>
          <Text style={styles.favoriteAddButtonText}>В корзину</Text>
        </Pressable>
      </View>
    </Animated.View>
  )
}
