// стеклянная панелька~~ такая красивая ааааа~~
import { View } from 'react-native'
import { styles } from '../../styles/styles'

export function GlassPanel({ style, children }) {
  return <View style={[styles.glassPanel, style]}>{children}</View>
}
