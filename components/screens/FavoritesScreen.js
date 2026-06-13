// экран избранного~~ здесь живут любимые плюшики~~
import { Animated, Text } from 'react-native'
import { useEntranceStyle } from '../../utils/animations'
import { styles } from '../../styles/styles'
import { PhoneHeader } from '../ui/PhoneHeader'
import { GlassPanel } from '../ui/GlassPanel'
import { EmptyState } from '../ui/EmptyState'
import { FavoriteRow } from '../cards/FavoriteRow'

export function FavoritesScreen({
  favoriteProducts,
  onBackToCatalog,
  onOpenProduct,
  onToggleFavorite,
  onAddToCart,
  search,
  onChangeSearch,
  onSearchSubmit,
}) {
  const entranceStyle = useEntranceStyle(0, 10, 0.995)

  return (
    <Animated.View style={[entranceStyle, styles.page]}>
      <PhoneHeader search={search} onChangeSearch={onChangeSearch} onSearchSubmit={onSearchSubmit} />

      <GlassPanel style={styles.favoritesPanel}>
        <Text style={styles.panelHeading}>Избранное</Text>
        <Text style={styles.panelSubheading}>Сохранённые плюши</Text>

        {favoriteProducts.length === 0 ? (
          <EmptyState
            title="Пока тут никого нет"
            subtitle="Добавь первую игрушку."
            actionLabel="Перейти в каталог"
            onAction={onBackToCatalog}
          />
        ) : (
          favoriteProducts.map((product, index) => (
            <FavoriteRow
              key={product.id}
              product={product}
              onOpen={() => onOpenProduct(product.id)}
              onToggleFavorite={() => onToggleFavorite(product.id)}
              onAddToCart={() => onAddToCart(product.id)}
              animationDelay={index * 60}
            />
          ))
        )}
      </GlassPanel>
    </Animated.View>
  )
}
