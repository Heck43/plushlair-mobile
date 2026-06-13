// ооой тут вся статическая данная хранится~~ адресики, заказики, оплаточки~~

// адрески доставки~~
export const addresses = [
  {
    id: 'default',
    label: 'Адрес доставки',
    details: 'Amsterdam • Nieuwezijds 12\nПодъезд 1 • кв. 7 • 2 этаж',
    isDefault: true,
  },
  {
    id: 'pickup',
    label: 'Пункт выдачи',
    details: 'Amsterdam • Haarlemmerdijk 44',
    isDefault: false,
  },
  {
    id: 'gift',
    label: 'Подарочный адрес',
    details: 'Rotterdam • Westersingel 16',
    isDefault: false,
  },
]

// начальные заказики~~
export const ordersSeed = [
  {
    id: 'PL-1582',
    status: 'в пути',
    total: 3780,
    payment: 'Карта',
    addressId: 'default',
    date: 'Сегодня',
  },
  {
    id: 'PL-1441',
    status: 'доставлен',
    total: 2590,
    payment: 'Apple Pay',
    addressId: 'pickup',
    date: 'Вчера',
  },
  {
    id: 'PL-1389',
    status: 'отмена',
    total: 1490,
    payment: 'Карта',
    addressId: 'gift',
    date: '12 марта',
  },
]

// способы оплаты~~
export const paymentOptions = [
  { key: 'card', label: 'Карта', hint: 'Основная оплата' },
  { key: 'apple', label: 'Apple Pay', hint: 'Быстро и удобно' },
  { key: 'cash', label: 'Наличными', hint: 'При получении' },
]

// цветные кружочки оплаты на чекауте~~
export const paymentSwatches = [
  { key: 'card', label: 'Карта', color: '#ff2315' },
  { key: 'apple', label: '', color: '#22ff19' },
  { key: 'cash', label: '', color: '#ff10a2' },
  { key: 'sbp', label: '', color: '#193cff' },
  { key: 'alt', label: '', color: '#22cfff' },
]

// пунктики настроек в профиле~~
export const settingsItems = [
  { id: 'addresses', label: 'Адреса доставки', description: '' },
  { id: 'cards', label: 'Способы оплаты', description: '' },
  { id: 'support', label: 'Поддержка', description: '' },
  { id: 'notifications', label: 'Уведомления', description: '' },
]
