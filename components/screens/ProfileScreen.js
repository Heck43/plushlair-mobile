// экран профиля~~ личный кабинет~~
import { Animated, View, Text, Image, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useEntranceStyle } from '../../utils/animations'
import { styles } from '../../styles/styles'
import { settingsItems } from '../../data/static'
import { profileAvatar } from '../../data/products'
import { PhoneHeader } from '../ui/PhoneHeader'
import { GlassPanel } from '../ui/GlassPanel'

export function ProfileScreen({
  onOpenCheckout,
  onOpenSettings,
  search,
  onChangeSearch,
  onSearchSubmit,
}) {
  const entranceStyle = useEntranceStyle(0, 10, 0.995)

  return (
    <Animated.View style={[entranceStyle, styles.page]}>
      <PhoneHeader search={search} onChangeSearch={onChangeSearch} onSearchSubmit={onSearchSubmit} />

      {/* аватарка и имя~~ */}
      <GlassPanel style={styles.profileHeroCard}>
        <Image source={profileAvatar} style={styles.profileAvatar} />
        <View style={styles.profileHeroInfo}>
          <Text style={styles.profileHeroTitle}>Профиль</Text>
          <Text style={styles.profileHeroEmail}>guest@plushlair.io</Text>
        </View>
      </GlassPanel>

      {/* заказики~~ */}
      <GlassPanel style={styles.profileEmptyCard}>
        <Text style={styles.panelHeading}>Заказы</Text>
      </GlassPanel>

      {/* избранное~~ */}
      <GlassPanel style={styles.profileEmptyCard}>
        <Text style={styles.panelHeading}>Избранное</Text>
        <Text style={styles.panelSubheading}>Ваши сохранённые плюши</Text>
      </GlassPanel>

      {/* настроечки~~ */}
      <GlassPanel style={styles.profileSettingsCard}>
        <Text style={styles.panelHeading}>Настройки</Text>
        {settingsItems.map((item) => (
          <Pressable
            key={item.id}
            onPress={item.id === 'addresses' || item.id === 'cards' ? onOpenSettings : onOpenCheckout}
            style={styles.profileSettingRow}
          >
            <Text style={styles.profileSettingText}>{item.label}</Text>
            <Feather color="rgba(255,255,255,0.88)" name="chevron-right" size={26} />
          </Pressable>
        ))}
      </GlassPanel>
    </Animated.View>
  )
}
