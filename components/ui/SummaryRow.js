// строчка итогов~~ лейбл и значение~~
import { View, Text } from 'react-native'
import { styles } from '../../styles/styles'

export function SummaryRow({ label, value, accent = false, strong = false }) {
  return (
    <View style={styles.summaryRow}>
      <Text style={[styles.summaryLabel, strong && styles.summaryLabelStrong]}>{label}</Text>
      <Text
        style={[
          styles.summaryValue,
          accent && styles.summaryValueAccent,
          strong && styles.summaryValueStrong,
        ]}
      >
        {value}
      </Text>
    </View>
  )
}
