import { create } from 'zustand'

import CoffeeDatas from '../mocks/coffeData'
import { typeCoffe } from '../types/coffee'
import BeansData from '../mocks/beansData'

interface IInitState {
  detail: typeCoffe | undefined
  carts: typeCoffe[] | undefined
}

interface IAction {
  setDetail: ({ id, type }: { id: string; type: string }) => void
  setCarts: (item: typeCoffe) => void
  resetCoffee: () => void
}

const useShareStore = create<IInitState & IAction>((set) => ({
  detail: undefined,
  carts: CoffeeDatas,

  setCarts: (item) =>
    set((state) => {
      const currentState = state.carts

      if (state.carts?.some((c) => c.id === item.id)) {
      }

      currentState?.push(item)

      return {
        carts: currentState,
      }
    }),

  setDetail: ({ id, type }) =>
    set(() => {
      const data = type === 'Coffee' ? CoffeeDatas : type === 'Bean' ? BeansData : []

      const itemDetail = data.filter((item) => item.id === id)

      return {
        detail: itemDetail[0],
      }
    }),

  resetCoffee: () => {},
}))

export default useShareStore
