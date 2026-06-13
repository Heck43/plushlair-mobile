// няняня вот помощнички-функции~~ мрррр смотри как красиво~~
import { paymentOptions } from '../data/static'

// добавляет пробелы между тысячами числа~~
export function numberWithSpaces(value) {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

// форматирует деньги в рублях~~
export function formatMoney(value) {
  return `${numberWithSpaces(Math.round(value))} ₽`
}

// лейбл способа оплаты по ключику~~
export function paymentMethodLabel(key) {
  return paymentOptions.find((option) => option.key === key)?.label ?? 'Карта'
}

// добавляет поисковый запрос в недавние~~
export function pushRecentSearch(value, setRecentSearches) {
  const normalized = value.trim()
  if (!normalized) {
    return
  }

  setRecentSearches((previous) => {
    const filtered = previous.filter(
      (item) => item.toLowerCase() !== normalized.toLowerCase()
    )
    return [normalized, ...filtered].slice(0, 6)
  })
}

// получает список подсказок для поиска~~
export function getSuggestions(searchNeedle, recentSearches, popularSearches) {
  const source = [...recentSearches, ...popularSearches]
  const unique = []

  for (const item of source) {
    if (!unique.some((candidate) => candidate.toLowerCase() === item.toLowerCase())) {
      unique.push(item)
    }
  }

  if (searchNeedle.length === 0) {
    return unique.slice(0, 6)
  }

  return unique
    .filter((item) => item.toLowerCase().includes(searchNeedle))
    .slice(0, 6)
}
