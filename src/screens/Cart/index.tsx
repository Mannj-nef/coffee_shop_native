import { View, ScrollView, TouchableOpacity, Text } from 'react-native'
import styles from './style'
import HeaderBar from '../../components/HeaderBar'
import { COLORS, FONTSIZE, SPACING } from '../../themes'
import useShareStore from '../../stores/shared'
import Icon from '../../components/Icons'
import CartItem from './components/CartItem'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import { SCREEN } from '../../navigators/stackScreen'
import { Button } from '../../components/Button'
interface CartProps {}

const Cart = ({}: CartProps) => {
  const carts = useShareStore((state) => state.carts)

  const navigation = useNavigation<any>()

  const tabBarHeight = useBottomTabBarHeight()

  return (
    <View style={styles.container}>
      <HeaderBar ScreenTitle="Cart" />

      <View
        style={{
          flex: 1,
          marginBottom: tabBarHeight + 20,
          justifyContent: 'space-between',
        }}>
        <ScrollView style={{ paddingVertical: 20 }}>
          <View style={{}}>
            {!carts?.length && (
              <View style={styles.imageEmptyWrapper}>
                <View
                  style={[
                    {
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    },
                  ]}>
                  <Icon name="cart" color="" size={FONTSIZE.size_30 * 5} />
                </View>
              </View>
            )}

            <View
              style={{
                gap: SPACING.space_24,
              }}>
              {carts?.map((cart) => (
                <TouchableOpacity
                  key={cart?.id}
                  onPress={() => {
                    console.log(cart)

                    navigation.navigate(SCREEN.detail.name, {
                      id: cart.id,
                      type: cart.type,
                    })
                  }}>
                  <CartItem cart={cart} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>

        {carts?.length ? (
          <View
            style={{
              paddingTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={[styles.propertyText]}>Total Price</Text>

              <View style={{ flexDirection: 'row', gap: SPACING.space_8 }}>
                <Text
                  style={[
                    styles.propertyText,
                    {
                      color: COLORS.primaryOrangeHex,
                      marginTop: SPACING.space_2,
                      fontSize: FONTSIZE.size_24,
                      fontWeight: '600',
                    },
                  ]}>
                  {'$'}
                </Text>

                <Text
                  style={[
                    styles.propertyText,
                    { marginTop: SPACING.space_2, fontSize: FONTSIZE.size_24, fontWeight: '600' },
                  ]}>
                  {10}
                </Text>
              </View>
            </View>

            <Button
              onPress={() => {
                navigation.navigate(SCREEN.payment)
              }}
              title="Pay"
            />
          </View>
        ) : (
          <></>
        )}
      </View>
    </View>
  )
}

export default Cart
