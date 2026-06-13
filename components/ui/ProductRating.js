// рейтинг звёздочками~~ ★★★★★ мррр~~
import { View, Text } from 'react-native'
import { styles } from '../../styles/styles'
import { numberWithSpaces } from '../../utils/helpers'

export function ProductRating({ product }) {
  return (
    <View style={styles.productRatingRow}>
      <Text style={styles.productRatingStars}>★★★★★</Text>
      <Text style={styles.productRatingText}>
        {product.rating.toFixed(1).replace('.', ',')} • {numberWithSpaces(product.reviews)}
      </Text>
    </View>
  )
}
