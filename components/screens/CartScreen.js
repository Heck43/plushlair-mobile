// экран корзины~~ тут лежат плюшики перед покупкой~~
import { Animated, View, Text, Pressable } from 'react-native'
import { useEntranceStyle } from '../../utils/animations'
import { formatMoney } from '../../utils/helpers'
import { styles } from '../../styles/styles'
import { PhoneHeader } from '../ui/PhoneHeader'
import { GlassPanel } from '../ui/GlassPanel'
import { EmptyState } from '../ui/EmptyState'
import { SummaryRow } from '../ui/SummaryRow'
import { CartRow } from '../cards/CartRow'

export function CartScreen({
  cartEntries,
  cartTotal,
  onChangeQty,
  onRemove,
  onOpenProduct,
  onGoToCheckout,
  onGoToCatalog,
  search,
  onChangeSearch,
  onSearchSubmit,
}) {
  const entranceStyle = useEntranceStyle(0, 10, 0.995)

  return (
    <Animated.View style={[entranceStyle, styles.page]}>
      <PhoneHeader search={search} onChangeSearch={onChangeSearch} onSearchSubmit={onSearchSubmit} />

      {cartEntries.length === 0 ? (
        <EmptyState
          title="Корзина пустая"
          subtitle="Выбери плюши и возвращайся к оформлению."
          actionLabel="В каталог"
          onAction={onGoToCatalog}
        />
      ) : (
        <>
          {/* список товаров в корзине~~ */}
          <GlassPanel style={styles.cartPanel}>
            {cartEntries.map((entry, index) => (
              <CartRow
                key={entry.id}
                entry={entry}
                onChangeQty={onChangeQty}
                onRemove={onRemove}
                onOpenProduct={onOpenProduct}
                animationDelay={index * 60}
              />
            ))}
          </GlassPanel>

          {/* итоговый блок с кнопкой оформления~~ */}
          <GlassPanel style={styles.cartSummaryCard}>
            <View style={styles.cartSummaryTop}>
              <Text style={styles.cartSummaryTitle}>Итого</Text>
              <Text style={styles.cartSummaryValue}>{formatMoney(cartTotal)}</Text>
            </View>
            <SummaryRow label="Доставка" value="0 ₽" />
            <SummaryRow label="Скидка" value="-15%" accent />
            <Pressable style={styles.exactPrimaryButton} onPress={onGoToCheckout}>
              <Text style={styles.exactPrimaryButtonText}>Оформить заказ</Text>
            </Pressable>
          </GlassPanel>
        </>
      )}
    </Animated.View>
  )
}
