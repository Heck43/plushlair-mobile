// строчка товара в корзине~~ с кнопками количества~~
import { Animated, View, Text, Image, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useEntranceStyle } from '../../utils/animations'
import { formatMoney } from '../../utils/helpers'
import { styles } from '../../styles/styles'

export function CartRow({ entry, onChangeQty, onRemove, onOpenProduct, animationDelay = 0 }) {
  const entranceStyle = useEntranceStyle(animationDelay, 12, 0.985)

  return (
    <Animated.View style={[entranceStyle, styles.cartItemCard]}>
      <Pressable style={styles.cartThumbWrap} onPress={() => onOpenProduct(entry.id)}>
        <Image source={entry.product.cover} style={styles.cartThumbImage} resizeMode="cover" />
      </Pressable>

      <View style={styles.cartItemBody}>
        <Text style={styles.cartItemTitle}>{entry.product.name}</Text>
        <Text style={styles.cartItemSubtitle}>{entry.product.subtitle}</Text>
        <Text style={styles.cartItemPrice}>{formatMoney(entry.unitPrice * entry.qty)}</Text>
      </View>

      <View style={styles.cartItemSide}>
        <Pressable style={styles.cartRemoveButton} onPress={() => onRemove(entry.id)}>
          <Feather color="#ffffff" name="x" size={16} />
        </Pressable>
        <View style={styles.cartStepper}>
          <Pressable style={styles.cartStepperButton} onPress={() => onChangeQty(entry.id, -1)}>
            <Feather color="#ffffff" name="minus" size={16} />
          </Pressable>
          <Text style={styles.cartStepperValue}>{entry.qty}</Text>
          <Pressable style={styles.cartStepperButton} onPress={() => onChangeQty(entry.id, 1)}>
            <Feather color="#ffffff" name="plus" size={16} />
          </Pressable>
        </View>
      </View>
    </Animated.View>
  )
}
