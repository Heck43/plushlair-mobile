// арт карточки продукта с пиллами и наклейками~~ самый сложный компонент аааа~~
import { ImageBackground, Image, View, Text } from 'react-native'
import { styles } from '../../styles/styles'
import { scenePillToneStyles } from '../../styles/tokens'
import {
  loonaBg,
  loonaPlush,
  winterBg,
  mimiPlush,
  creamBg,
  wypherPlush,
  oceanBg,
  gononPlush,
  gononBack,
  boykisserPhoto,
  bgBlur,
  profileAvatar,
} from '../../data/products'

// пилл с текстом поверх арта~~
function ScenePill({ label, tone, style }) {
  return (
    <View style={[styles.scenePill, scenePillToneStyles[tone] ?? scenePillToneStyles.dark, style]}>
      <Text style={styles.scenePillText}>{label}</Text>
    </View>
  )
}

// вычисляет параметры арта в зависимости от варианта (card/hero/thumb)~~
function getProductArtworkSpec(product, variant) {
  const metric = (card, hero, thumb) =>
    variant === 'hero' ? hero : variant === 'thumb' ? thumb : card

  const base = {
    frameStyle: {
      height: metric(178, 342, 110),
      borderRadius: metric(24, 28, 20),
    },
  }

  switch (product.id) {
    case 'loona':
      return {
        ...base,
        asset: loonaPlush,
        assetStyle: {
          width: metric(126, 208, 60),
          height: metric(126, 208, 60),
          right: metric(16, 46, 8),
          top: metric(12, 18, 10),
        },
        sticker: loonaPlush,
        stickerStyle: {
          width: metric(58, 92, 26),
          height: metric(58, 92, 26),
          left: metric(8, 18, 4),
          bottom: metric(10, 18, 4),
        },
        topLeft: {
          label: 'Для подарка',
          tone: 'dark',
          style: { top: metric(8, 14, 4), left: metric(8, 14, 4) },
        },
        topRight: {
          label: '-88%',
          tone: 'red',
          style: { top: metric(8, 14, 4), right: metric(8, 14, 4) },
        },
        titleTop: 'ПЛЮШЕВАЯ ИГРУШКА',
        titleTopStyle: {
          fontSize: metric(10, 17, 6),
          right: metric(12, 20, 6),
          bottom: metric(32, 58, 12),
          color: '#d9dbff',
        },
        titleMain: 'LOONA',
        titleMainStyle: {
          fontSize: metric(18, 34, 10),
          right: metric(18, 24, 8),
          bottom: metric(12, 24, 6),
          color: '#ff3f65',
        },
        bottomPills: [
          {
            label: '150 ₽ за отзыв',
            tone: 'ice',
            style: { right: metric(8, 14, 4), bottom: metric(8, 12, 4) },
          },
        ],
      }
    case 'mimi':
      return {
        ...base,
        asset: mimiPlush,
        assetStyle: {
          width: metric(120, 194, 62),
          height: metric(120, 194, 62),
          left: metric(54, 92, 24),
          bottom: metric(8, 10, 6),
        },
        sticker: mimiPlush,
        stickerStyle: {
          width: metric(52, 76, 24),
          height: metric(52, 76, 24),
          right: metric(12, 20, 6),
          bottom: metric(8, 16, 4),
        },
        titleMain: 'Mimi Typh',
        titleMainStyle: {
          fontSize: metric(18, 34, 10),
          left: metric(16, 24, 8),
          top: metric(12, 18, 8),
          color: '#8a6043',
        },
        bottomPills: [
          {
            label: 'Очень мягкая',
            tone: 'brown',
            style: { left: metric(10, 18, 4), bottom: metric(26, 42, 8) },
          },
          {
            label: 'Уютный декор',
            tone: 'brown',
            style: { left: metric(10, 18, 4), bottom: metric(8, 16, 4) },
          },
        ],
      }
    case 'wypher':
      return {
        ...base,
        light: true,
        asset: wypherPlush,
        assetStyle: {
          width: metric(126, 192, 64),
          height: metric(126, 192, 64),
          right: metric(20, 40, 10),
          top: metric(28, 42, 12),
        },
        titleTop: 'Плюшевая игрушка',
        titleTopStyle: {
          fontSize: metric(10, 18, 6),
          top: metric(10, 16, 6),
          left: metric(12, 20, 6),
          color: '#b69173',
        },
        titleMain: 'Wypher',
        titleMainStyle: {
          fontSize: metric(16, 30, 10),
          top: metric(26, 44, 12),
          left: metric(48, 78, 12),
          color: '#c8839b',
        },
        hitBubble: 'ХИТ',
        hitBubbleStyle: { top: metric(14, 22, 6), right: metric(10, 16, 6) },
        bottomPills: [
          {
            label: 'Супер мягкая',
            tone: 'sand',
            style: { left: metric(10, 18, 4), bottom: metric(42, 64, 10) },
          },
          {
            label: 'Размер 25 см',
            tone: 'sand',
            style: { right: metric(10, 18, 4), bottom: metric(42, 64, 10) },
          },
          {
            label: 'С колокольчиком',
            tone: 'sand',
            style: { left: metric(10, 18, 4), bottom: metric(8, 16, 4) },
          },
          {
            label: '-71%',
            tone: 'pink',
            style: { right: metric(10, 18, 4), bottom: metric(8, 16, 4) },
          },
        ],
      }
    case 'gonon':
      return {
        ...base,
        asset: gononPlush,
        assetStyle: {
          width: metric(132, 204, 68),
          height: metric(132, 204, 68),
          left: metric(32, 48, 14),
          top: metric(22, 30, 8),
        },
        sticker: gononBack,
        stickerStyle: {
          width: metric(52, 86, 24),
          height: metric(52, 86, 24),
          right: metric(10, 18, 4),
          bottom: metric(4, 12, 2),
        },
        topRight: {
          label: 'Официальный мерч',
          tone: 'red',
          style: { top: metric(8, 14, 4), right: metric(8, 14, 4) },
        },
        titleTop: 'ПЛЮШЕВАЯ ИГРУШКА',
        titleTopStyle: {
          fontSize: metric(11, 18, 6),
          top: metric(22, 28, 8),
          left: metric(28, 40, 10),
          color: '#ffd94e',
        },
        titleMain: 'GONON',
        titleMainStyle: {
          fontSize: metric(18, 34, 10),
          top: metric(38, 52, 14),
          left: metric(84, 126, 24),
          color: '#ff6e93',
        },
        bottomPills: [
          {
            label: 'Супер мягкая',
            tone: 'dark',
            style: { left: metric(10, 18, 4), bottom: metric(12, 18, 4) },
          },
          {
            label: '-71%',
            tone: 'red',
            style: { right: metric(10, 18, 4), bottom: metric(8, 14, 4) },
          },
        ],
      }
    case 'boykisser':
    default:
      return {
        ...base,
        titleTop: 'ПЛЮШЕВАЯ ИГРУШКА',
        titleTopStyle: {
          fontSize: metric(10, 16, 6),
          left: metric(18, 28, 8),
          bottom: metric(36, 60, 14),
          color: '#fbfbff',
        },
        titleMain: 'BOYKISSER',
        titleMainStyle: {
          fontSize: metric(17, 34, 10),
          left: metric(24, 38, 10),
          bottom: metric(14, 28, 6),
          color: '#ffffff',
        },
        titleSub: 'PLUSH',
        titleSubStyle: {
          fontSize: metric(10, 18, 6),
          left: metric(92, 132, 28),
          bottom: metric(2, 8, 0),
          color: '#fbfbff',
        },
        bottomPills: [
          {
            label: 'Очень мягкая',
            tone: 'dark',
            style: { right: metric(10, 18, 4), top: metric(110, 176, 44) },
          },
          {
            label: '2 шт. в наборе',
            tone: 'red',
            style: { right: metric(10, 18, 4), bottom: metric(8, 14, 4) },
          },
        ],
      }
  }
}

// главный компонент арта продукта~~
export function ProductArtwork({ product, variant = 'card' }) {
  const spec = getProductArtworkSpec(product, variant)

  return (
    <ImageBackground
      imageStyle={styles.artworkImage}
      resizeMode="cover"
      source={product.cover}
      style={[styles.artworkFrame, spec.frameStyle]}
    >
      <View style={[styles.artworkShade, spec.light && styles.artworkShadeLight]} />
      {spec.topLeft ? (
        <ScenePill label={spec.topLeft.label} style={spec.topLeft.style} tone={spec.topLeft.tone} />
      ) : null}
      {spec.topRight ? (
        <ScenePill
          label={spec.topRight.label}
          style={spec.topRight.style}
          tone={spec.topRight.tone}
        />
      ) : null}
      {spec.hitBubble ? (
        <View style={[styles.hitBubble, spec.hitBubbleStyle]}>
          <Text style={styles.hitBubbleText}>{spec.hitBubble}</Text>
        </View>
      ) : null}
      {spec.asset ? (
        <Image
          resizeMode="contain"
          source={spec.asset}
          style={[styles.artworkAsset, spec.assetStyle]}
        />
      ) : null}
      {spec.sticker ? (
        <Image
          resizeMode="contain"
          source={spec.sticker}
          style={[styles.artworkSticker, spec.stickerStyle]}
        />
      ) : null}
      {spec.titleTop ? (
        <Text style={[styles.artworkTitleTop, spec.titleTopStyle]}>{spec.titleTop}</Text>
      ) : null}
      {spec.titleMain ? (
        <Text style={[styles.artworkTitleMain, spec.titleMainStyle]}>{spec.titleMain}</Text>
      ) : null}
      {spec.titleSub ? (
        <Text style={[styles.artworkTitleSub, spec.titleSubStyle]}>{spec.titleSub}</Text>
      ) : null}
      {(spec.bottomPills ?? []).map((pill, index) => (
        <ScenePill
          key={`${product.id}-${pill.label}-${index}`}
          label={pill.label}
          style={pill.style}
          tone={pill.tone}
        />
      ))}
    </ImageBackground>
  )
}
