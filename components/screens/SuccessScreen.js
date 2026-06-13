// экран успешного оформления заказа~~ ура ура~~
import { Animated, View, Text, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useEntranceStyle } from '../../utils/animations'
import { styles } from '../../styles/styles'
import { PhoneHeader } from '../ui/PhoneHeader'
import { GlassPanel } from '../ui/GlassPanel'

export function SuccessScreen({
  onContinueShopping,
  onOpenProfile,
  search,
  onChangeSearch,
  onSearchSubmit,
}) {
  const entranceStyle = useEntranceStyle(0, 10, 0.995)

  return (
    <Animated.View style={[entranceStyle, styles.page]}>
      <PhoneHeader search={search} onChangeSearch={onChangeSearch} onSearchSubmit={onSearchSubmit} />

      <GlassPanel style={styles.successExactCard}>
        {/* иконка галочки~~ */}
        <View style={styles.successExactIcon}>
          <Feather color="#af87ff" name="check" size={52} />
        </View>
        <Text style={styles.successExactTitle}>Заказ Оформлен!</Text>

        <Pressable style={styles.exactPrimaryButton} onPress={onOpenProfile}>
          <Text style={styles.exactPrimaryButtonText}>К заказам</Text>
        </Pressable>
        <Pressable style={styles.exactDarkButton} onPress={onContinueShopping}>
          <Text style={styles.exactDarkButtonText}>На главную</Text>
        </Pressable>
      </GlassPanel>
    </Animated.View>
  )
}
