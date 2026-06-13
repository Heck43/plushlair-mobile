// пустое состояние~~ немного грустное но милое ;;w;;
import { View, Text, Pressable } from 'react-native'
import { styles } from '../../styles/styles'

export function EmptyState({ title, subtitle, actionLabel, onAction }) {
  return (
    <View style={styles.emptyCard}>
      <Text style={styles.emptyEmoji}>🥺</Text>
      <Text style={styles.emptyTitle}>{title}</Text>
      <Text style={styles.emptyText}>{subtitle}</Text>
      {actionLabel ? (
        <Pressable style={styles.primaryButton} onPress={onAction}>
          <Text style={styles.primaryButtonText}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  )
}
