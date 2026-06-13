// бэйджик маленький и симпатичный~~ мррр~~
import { View, Text } from 'react-native'
import { styles } from '../../styles/styles'
import { badgeToneStyles } from '../../styles/tokens'

export function Badge({ label, tone = 'sky', compact = false }) {
  return (
    <View style={[styles.badge, badgeToneStyles[tone], compact && styles.badgeCompact]}>
      <Text style={styles.badgeText}>{label}</Text>
    </View>
  )
}
