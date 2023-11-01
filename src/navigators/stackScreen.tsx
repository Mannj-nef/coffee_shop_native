import Cart from '../screens/Cart'
import Home from '../screens/Home'

import Favorite from '../screens/Favorite'
import OrderHistory from '../screens/Order'
import TapNavigator from './TabNavigator'
import Payment from '../screens/Payment'
import Detail from '../screens/Detail'

export const SCREEN = {
  home: {
    name: 'Home',
    component: Home,
  },
  cart: {
    name: 'Cart',
    component: Cart,
  },
  favorite: {
    name: 'Favorite',
    component: Favorite,
  },
  history: {
    name: 'History',
    component: OrderHistory,
  },
  detail: {
    name: 'Detail',
    component: Detail,
  },
  payment: {
    name: 'Payment',
    component: Payment,
  },
  tab: {
    name: 'tab',
    component: TapNavigator,
  },
}

const SCREENS = [
  {
    id: 1,
    name: SCREEN.tab.name,
    component: SCREEN.tab.component,
  },
  {
    id: 2,
    name: SCREEN.detail.name,
    component: SCREEN.detail.component,
  },
  {
    id: 3,
    name: SCREEN.payment.name,
    component: SCREEN.payment.component,
  },
]

export default SCREENS
