export type price = { size: string; price: string; currency: '$' }

export type typeCoffe = {
  id: string
  name: string
  description: string
  roasted: string
  imagelink_square: string
  imagelink_portrait: string
  ingredients: string
  special_ingredient: string
  prices: price[]
  average_rating: number
  ratings_count: string
  favourite: boolean
  type: string
  index: number
}

export type TCarts = typeCoffe & {
  amount: number
  total_price: number
  sizes: price[]
}

export enum EActionAmountCart {
  DECREASE_CARD,
  INCREASE_CARD,
}
