// шапка приложения с поиском~~ красивая и пушистая~~
import { Animated, View, Text, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useEntranceStyle } from '../../utils/animations'
import { styles } from '../../styles/styles'

export function PhoneHeader({ search, onChangeSearch, onSearchSubmit }) {
  const entranceStyle = useEntranceStyle(0, 8, 1)

  return (
    <Animated.View style={entranceStyle}>
      <View style={styles.phoneHeaderExact}>
        <Text style={styles.brandExact}>Plushlair</Text>
        <View style={styles.searchShellExact}>
          <Feather color="#0f0b15" name="search" size={28} />
          <TextInput
            placeholder=" "
            placeholderTextColor="rgba(22,16,28,0.3)"
            returnKeyType="search"
            style={styles.searchInputExact}
            value={search}
            onChangeText={onChangeSearch}
            onSubmitEditing={onSearchSubmit}
          />
        </View>
      </View>
    </Animated.View>
  )
}
