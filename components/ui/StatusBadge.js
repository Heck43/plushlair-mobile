// статус заказа цветной~~
import { View, Text } from 'react-native'
import { styles } from '../../styles/styles'
import { statusToneStyles } from '../../styles/tokens'

export function StatusBadge({ status }) {
  return (
    <View style={[styles.statusBadge, statusToneStyles[status] ?? styles.statusNeutral]}>
      <Text style={styles.statusText}>{status}</Text>
    </View>
  )
}
