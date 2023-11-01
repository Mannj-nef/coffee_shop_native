import { create } from 'zustand'
import { typeCoffe } from '../types/coffee'
import BeansData from '../mocks/beansData'

interface IBearnCoffee {
  bearn: typeCoffe[]
}

interface IAction {}

const useBearn = create<IBearnCoffee & IAction>((set) => ({
  bearn: BeansData,
}))

export default useBearn
