// няняня тут все плюшики хранятся~~ мрррр смотри какие миленькие~~
// используем raw GitHub URLs для совместимости со Snack~~
const BASE = 'https://raw.githubusercontent.com/Heck43/plushlair-mobile/main/assets/figma'


export const bgBlur = { uri: `${BASE}/bg-blur.png` }
export const boykisserPhoto = { uri: `${BASE}/boykisser-photo.png` }
export const creamBg = { uri: `${BASE}/cream-bg.png` }
export const gononBack = { uri: `${BASE}/gonon-back.png` }
export const gononPlush = { uri: `${BASE}/gonon-plush.png` }
export const loonaBg = { uri: `${BASE}/loona-bg.png` }
export const loonaPlush = { uri: `${BASE}/loona-plush.png` }
export const mimiPlush = { uri: `${BASE}/mimi-plush.png` }
export const oceanBg = { uri: `${BASE}/ocean-bg.png` }
export const profileAvatar = { uri: `${BASE}/profile-avatar.png` }
export const winterBg = { uri: `${BASE}/winter-bg.png` }
export const wypherPlush = { uri: `${BASE}/wypher-plush.png` }

// главный список плюшиков для каталога~~
export const products = [
  {
    id: 'loona',
    name: 'Loona',
    style: 'hell',
    styleLabel: 'hell',
    subtitle: 'Адский босс стиль • лимитка',
    search: 'loona plush адский босс лимитка',
    price: 1690,
    cartPrice: 1690,
    oldPrice: null,
    rating: 4.8,
    reviews: 2340,
    inStock: true,
    short: 'Плюшевая игрушка Loona для витрины и коллекции.',
    desc: 'Мягкая игрушка с фирменной сценой, яркой палитрой и декоративными наклейками.',
    popularity: 99,
    isNew: true,
    series: 'hell',
    size: '25 см',
    materials: 'премиальный плюш',
    cover: loonaBg,
    gallery: [loonaBg, loonaPlush, loonaBg],
  },
  {
    id: 'mimi',
    name: 'Mimi Typh',
    style: 'cute',
    styleLabel: 'cute',
    subtitle: 'Очень мягкая • для подарка',
    search: 'mimi typh мягкая игрушка',
    price: 1190,
    cartPrice: 1190,
    oldPrice: null,
    rating: 4.9,
    reviews: 15960,
    inStock: true,
    short: 'Тёплая зимняя сцена и спокойный характер.',
    desc: 'Мягкая кукла в зимней стилистике с уютным декоративным оформлением.',
    popularity: 98,
    isNew: true,
    series: 'cute',
    size: '28 см',
    materials: 'soft touch',
    cover: winterBg,
    gallery: [winterBg, mimiPlush, winterBg],
  },
  {
    id: 'wypher',
    name: 'Wypher',
    style: 'cute',
    styleLabel: 'cute',
    subtitle: 'Плюш • колокольчик',
    search: 'wypher plush колокольчик',
    price: 1690,
    cartPrice: 890,
    oldPrice: null,
    rating: 4.8,
    reviews: 9540,
    inStock: true,
    short: 'Светлая карточка с мягкими бежевыми оттенками.',
    desc: 'Коллекционная плюшевая игрушка с декоративным колокольчиком и светлой карточкой.',
    popularity: 97,
    isNew: false,
    series: 'cute',
    size: '25 см',
    materials: 'плюш и наполнитель',
    cover: creamBg,
    gallery: [creamBg, wypherPlush, winterBg],
  },
  {
    id: 'gonon',
    name: 'Gonon',
    style: 'neon',
    styleLabel: 'neon',
    subtitle: 'Neon • коллекционный',
    search: 'gonon neon plush',
    price: 1490,
    cartPrice: 1490,
    oldPrice: null,
    rating: 4.9,
    reviews: 15960,
    inStock: true,
    short: 'Неоновая витрина с ярким underwater-фоном.',
    desc: 'Яркий plush-персонаж для коллекционеров с неоновой подачей.',
    popularity: 96,
    isNew: false,
    series: 'neon',
    size: '24 см',
    materials: 'плотный плюш',
    cover: oceanBg,
    gallery: [oceanBg, gononPlush, gononBack],
  },
  {
    id: 'boykisser',
    name: 'Boykisser',
    style: 'hit',
    styleLabel: 'hit',
    subtitle: 'Мягкая кукла • декор',
    search: 'boykisser plush decor',
    price: 890,
    cartPrice: 890,
    oldPrice: null,
    rating: 4.7,
    reviews: 1120,
    inStock: true,
    short: 'Набор для комнаты и мягкого декора.',
    desc: 'Плюшевый набор на кресле с мягким контрастным кадром.',
    popularity: 95,
    isNew: false,
    series: 'hit',
    size: '2 шт. в наборе',
    materials: 'плюш',
    cover: boykisserPhoto,
    gallery: [boykisserPhoto, bgBlur, profileAvatar],
  },
]

// популярные поисковые запросики~~
export const popularSearches = [
  'loona plush',
  'mimi typh',
  'neon plush',
  'лимитка',
  'boykisser набор',
  'игрушка подарок',
]

// фильтры по стилю~~
export const styleOptions = [
  { key: 'all', label: 'Все' },
  { key: 'neon', label: 'Neon' },
  { key: 'hell', label: 'Hell' },
  { key: 'cute', label: 'Cute' },
  { key: 'hit', label: 'Hit' },
]

// варианты сортировочки~~
export const sortOptions = [
  { key: 'popular', label: 'Популярное' },
  { key: 'cheap', label: 'Дешёвые' },
  { key: 'expensive', label: 'Дорогие' },
  { key: 'rating', label: 'По рейтингу' },
  { key: 'new', label: 'Новые' },
]
