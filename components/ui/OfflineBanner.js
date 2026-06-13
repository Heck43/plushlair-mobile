// баннер когда нет интернетика~~ грустненько~~
import { View, Text } from 'react-native'
import { styles } from '../../styles/styles'

export function OfflineBanner() {
  return (
    <View style={styles.offlineBanner}>
      <Text style={styles.offlineTitle}>Нет интернета</Text>
      <Text style={styles.offlineText}>
        Показываем каталог из кэша. Попробуй снова, когда сеть вернётся.
      </Text>
    </View>
  )
}
