import { SCREEN } from './stackScreen'

export type typeStackList = {
  [k in keyof typeof SCREEN]: undefined
}
