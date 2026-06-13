// обёртка для скролла всех экранов~~
import { ScrollView } from 'react-native'
import { styles } from '../../styles/styles'

export function ScreenScroll({ children, contentStyle }) {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={[styles.scrollContent, contentStyle]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  )
}
