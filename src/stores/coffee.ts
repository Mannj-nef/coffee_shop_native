import { create } from 'zustand'

import CoffeeDatas from '../mocks/coffeData'
import { typeCoffe } from '../types/coffee'

interface IInitState {
  coffees: typeCoffe[]
}

interface IAction {
  fiterCoffeeByCategory: (category: string) => void
  filterCoffeeBySearch: (typeCoffee: string) => void
  resetCoffee: () => void
}

const useCoffee = create<IInitState & IAction>((set) => ({
  coffees: CoffeeDatas,

  fiterCoffeeByCategory: (category) =>
    set(() => {
      const newtypeCoffees = CoffeeDatas.filter((item) => item.name === category)

      return { coffees: newtypeCoffees }
    }),

  filterCoffeeBySearch: (typeCoffee) =>
    set(() => {
      const typeCoffeeLowerCase = typeCoffee.toLowerCase()
      const result = CoffeeDatas.filter((item) => item.name.toLowerCase().includes(typeCoffeeLowerCase))

      return { coffees: result }
    }),

  resetCoffee: () => set({ coffees: CoffeeDatas }),
}))

export default useCoffee
