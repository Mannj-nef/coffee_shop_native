import { create } from 'zustand'

import CoffeeDatas from '../mocks/coffeData'
import { EActionAmountCart, TCarts, price, typeCoffe } from '../types/coffee'
import BeansData from '../mocks/beansData'

interface IInitState {
  detail: TCarts | typeCoffe | undefined
  carts: TCarts[]
}

interface IAction {
  setDetail: ({ id, type }: { id: string; type: string }) => void
  setCarts: ({ cardItem, size }: { cardItem: TCarts; size: price }) => void
  setAmountCart: (id: string, type: EActionAmountCart) => void
}

const useShareStore = create<IInitState & IAction>((set) => ({
  detail: undefined,
  carts: [],

  setCarts: ({ cardItem, size }) =>
    set((state) => {
      if (state.carts?.some((c) => c.id === cardItem.id)) {
        const itemCart = state.carts.find((i) => i.id === cardItem.id) as TCarts

        itemCart.sizes = itemCart.sizes ? [...itemCart.sizes, size] : [size]
        itemCart.amount = itemCart.amount + 1
        itemCart.total_price = Number((itemCart.total_price * itemCart.amount).toFixed(2))

        return {
          carts: [...state.carts],
        }
      }

      return {
        carts: [
          ...state.carts,
          {
            ...cardItem,
            amount: 1,
            sizes: [size],
          },
        ],
      }
    }),

  setDetail: ({ id, type }) =>
    set(() => {
      const data = type === 'Coffee' ? CoffeeDatas : type === 'Bean' ? BeansData : []

      const itemDetail = data.find((item) => item.id === id)

      return {
        detail: itemDetail,
      }
    }),

  setAmountCart: (id, type) =>
    set((state) => {
      switch (type) {
        case EActionAmountCart.DECREASE_CARD: {
          const item = state.carts.find((c) => c.id === id)
          if (!item) return {}

          item.amount = item.amount - 1
          item.total_price = Number((item.total_price - Number(item.prices[0].price)).toFixed(2))

          if (item.amount === 0) {
            return {
              carts: state.carts.filter((c) => c.id !== id),
            }
          }

          return {
            carts: [...state.carts],
          }
        }

        case EActionAmountCart.INCREASE_CARD: {
          const item = state.carts.find((c) => c.id === id)
          if (!item) return {}

          item.amount = item.amount + 1
          item.total_price = Number((item.total_price + Number(item.prices[0].price)).toFixed(2))

          return {
            carts: [...state.carts],
          }
        }
        default:
          return {}
      }
    }),
}))

export default useShareStore
