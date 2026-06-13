// нижняя навигация~~ самая важная часть интерфейса~~
import { View, Text, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styles } from '../../styles/styles'

export function BottomNav({ activeKey, favoritesCount, cartCount, onNavigate }) {
  // табики для навигации~~
  const tabs = [
    { key: 'home', label: 'Главная', icon: 'home', count: 0 },
    { key: 'cart', label: 'Корзина', icon: 'square', count: cartCount },
    { key: 'favorites', label: 'Избр.', icon: 'help-circle', count: favoritesCount },
    { key: 'profile', label: 'Профиль', icon: 'user', count: 0 },
    { key: 'catalog', label: 'Каталог', icon: 'menu', count: 0 },
  ]

  return (
    <View style={styles.bottomNavExact}>
      {tabs.map((tab) => {
        const active = tab.key === activeKey

        return (
          <Pressable
            key={tab.key}
            onPress={() => onNavigate(tab.key)}
            style={({ pressed }) => [styles.navItemExact, pressed && styles.cardPressed]}
          >
            <View style={[styles.navIconWrap, active && styles.navIconWrapActive]}>
              <Feather color={active ? '#af87ff' : '#ffffff'} name={tab.icon} size={32} />
            </View>
            <Text style={[styles.navLabelExact, active && styles.navLabelExactActive]}>
              {tab.label}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}
