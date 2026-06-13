// маленькая карточка для горизонтального рейла~~ миниатюрная~~
import { Animated, Pressable } from 'react-native'
import { useEntranceStyle } from '../../utils/animations'
import { styles } from '../../styles/styles'
import { ProductArtwork } from '../ui/ProductArtwork'

export function MiniProductCard({ product, width, onOpen, animationDelay = 0 }) {
  const entranceStyle = useEntranceStyle(animationDelay, 10, 0.99)

  return (
    <Animated.View style={[entranceStyle, { width }]}>
      <Pressable
        style={({ pressed }) => [styles.miniPosterCard, pressed && styles.cardPressed]}
        onPress={onOpen}
      >
        <ProductArtwork product={product} variant="thumb" />
      </Pressable>
    </Animated.View>
  )
}
