import { Text, View, ScrollView, ImageBackground } from 'react-native'
import styles from './style'
import HeaderBar from '../../components/HeaderBar'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTSIZE, SPACING } from '../../themes'
import useShareStore from '../../stores/shared'
import { CART_EMPTY } from '../../mocks/images'
import Icon from '../../components/Icons'
import CartItem from './components/CartItem'

interface CartProps {}

const Cart = ({}: CartProps) => {
  const carts = useShareStore((state) => state.carts)

  return (
    <View style={styles.container}>
      <HeaderBar ScreenTitle="Cart" />

      <ScrollView>
        {/* {!cart && (
          <View style={styles.imageEmptyWrapper}>
            <Icon name="cart" color="" size={FONTSIZE.size_30 * 10} />
          </View>
        )} */}

        <View
          style={{
            gap: SPACING.space_24,
          }}>
          {carts?.map((cart) => (
            <CartItem key={cart?.id} cart={cart} />
          ))}

          {/* <CartItem /> */}
        </View>
      </ScrollView>
    </View>
  )
}

export default Cart
