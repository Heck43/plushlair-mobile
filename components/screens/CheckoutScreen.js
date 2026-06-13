// экран оформления заказа~~ тут выбираем адрес и оплату~~
import { Animated, View, Text, Pressable } from 'react-native'
import { useEntranceStyle } from '../../utils/animations'
import { formatMoney } from '../../utils/helpers'
import { styles } from '../../styles/styles'
import { paymentSwatches } from '../../data/static'
import { PhoneHeader } from '../ui/PhoneHeader'
import { GlassPanel } from '../ui/GlassPanel'
import { SummaryRow } from '../ui/SummaryRow'

export function CheckoutScreen({
  selectedAddress,
  addresses,
  paymentMethod,
  paymentError,
  cartItemsTotal,
  cartTotal,
  onChangeAddress,
  onChangePaymentMethod,
  onConfirmOrder,
  search,
  onChangeSearch,
  onSearchSubmit,
}) {
  const entranceStyle = useEntranceStyle(0, 10, 0.995)

  return (
    <Animated.View style={[entranceStyle, styles.page]}>
      <PhoneHeader search={search} onChangeSearch={onChangeSearch} onSearchSubmit={onSearchSubmit} />

      <Text style={styles.pageHeroTitle}>Оформление заказа</Text>

      {/* адрес доставки~~ */}
      <GlassPanel style={styles.checkoutCard}>
        <Text style={styles.panelHeading}>Адрес доставки</Text>
        <Text style={styles.checkoutAddressText}>{selectedAddress.details}</Text>
        <Pressable
          style={styles.outlineAction}
          onPress={() => {
            const currentIndex = Math.max(
              0,
              addresses.findIndex((address) => address.id === selectedAddress.id),
            )
            const nextAddress = addresses[(currentIndex + 1) % addresses.length]
            onChangeAddress(nextAddress.id)
          }}
        >
          <Text style={styles.outlineActionText}>Изменить</Text>
        </Pressable>
      </GlassPanel>

      {/* способ оплаты с цветными кружочками~~ */}
      <GlassPanel style={styles.checkoutCard}>
        <Text style={styles.panelHeading}>Оплата</Text>
        <View style={styles.paymentGrid}>
          {paymentSwatches.map((option) => (
            <Pressable
              key={option.key}
              style={[
                styles.paymentSwatch,
                paymentMethod === option.key && styles.paymentSwatchActive,
              ]}
              onPress={() => onChangePaymentMethod(option.key)}
            >
              <View style={[styles.paymentSwatchDot, { backgroundColor: option.color }]} />
              <Text style={styles.paymentSwatchLabel}>{option.label}</Text>
            </Pressable>
          ))}
        </View>
      </GlassPanel>

      {/* итоговая сумма~~ */}
      <GlassPanel style={styles.checkoutSummaryCardExact}>
        <Text style={styles.panelHeading}>Итог</Text>
        <View style={styles.checkoutSummaryFill}>
          <SummaryRow label="Товары" value={formatMoney(cartItemsTotal)} />
          <SummaryRow label="Доставка" value="0 ₽" />
          <SummaryRow label="Скидка" value="-15%" accent />
          <SummaryRow label="К оплате" value={formatMoney(cartTotal)} strong />
        </View>
      </GlassPanel>

      {/* ошибка оплаты если есть~~ */}
      {paymentError ? (
        <View style={styles.errorCard}>
          <Text style={styles.errorTitle}>Ошибка оплаты</Text>
          <Text style={styles.errorText}>{paymentError}</Text>
        </View>
      ) : null}

      <Pressable style={styles.exactPrimaryButton} onPress={onConfirmOrder}>
        <Text style={styles.exactPrimaryButtonText}>Подтвердить</Text>
      </Pressable>
    </Animated.View>
  )
}
