import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './style'
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../../../themes'
import LinearGradient from 'react-native-linear-gradient'
import BGIcon from '../../../../components/BGIcon'
import { TCarts } from '../../../../types/coffee'
import useCart from '../../../../hooks/useCart'
import MultipleSize from './MultipleSize'
import { Button } from '../../../../components/Button'

interface CartItemProps {
  cart: TCarts
}

const CartItem = ({ cart }: CartItemProps) => {
  const { handleDecreaseCard, handleIncreaseCard } = useCart()

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={styles.container}>
      <View style={styles.containerMain}>
        <Image source={{ uri: cart.imagelink_square }} style={styles.cartItemImage} />

        <View
          style={{
            gap: SPACING.space_8,
            flex: 1,
          }}>
          <Text
            style={[
              styles.propertyText,
              {
                fontSize: FONTSIZE.size_18,
                fontWeight: '600',
              },
            ]}>
            {cart.name}
          </Text>

          {/* roasted */}
          <Text style={[styles.propertyText]}>{cart.special_ingredient}</Text>

          {cart.sizes.length <= 1 ? (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  gap: SPACING.space_20,
                  alignItems: 'center',
                }}>
                {/* size */}
                <>
                  <View
                    style={{
                      backgroundColor: COLORS.primaryBlackHex,
                      padding: SPACING.space_10,
                      flex: 1,
                      borderRadius: BORDERRADIUS.radius_10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={[styles.propertyText]}>{cart.sizes[0].size}</Text>
                  </View>
                </>
                <View style={{ flexDirection: 'row', gap: SPACING.space_4 }}>
                  <Text style={{ color: COLORS.primaryOrangeHex }}>{cart.prices[0].currency}</Text>
                  <Text style={[styles.propertyText]}>{cart.total_price}</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity onPress={() => handleDecreaseCard(cart.id)}>
                  <BGIcon
                    color={COLORS.primaryWhiteHex}
                    name={'minus'}
                    bgColor={COLORS.primaryOrangeHex}
                    size={FONTSIZE.size_16}
                  />
                </TouchableOpacity>

                <View
                  style={{
                    backgroundColor: COLORS.primaryBlackHex,
                    minWidth: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: BORDERRADIUS.radius_10,
                    borderWidth: 1,
                    borderColor: COLORS.primaryWhiteHex,
                  }}>
                  <Text style={[styles.propertyText]}>{cart.amount}</Text>
                </View>

                <TouchableOpacity onPress={() => handleIncreaseCard(cart.id)}>
                  <BGIcon
                    color={COLORS.primaryWhiteHex}
                    name={'plus'}
                    bgColor={COLORS.primaryOrangeHex}
                    size={FONTSIZE.size_16}
                  />
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <View
                style={{
                  backgroundColor: COLORS.primaryBlackRGBA,
                  padding: SPACING.space_10,
                  maxWidth: 150,
                  borderRadius: BORDERRADIUS.radius_10,
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_16, paddingHorizontal: 5 }]}>
                  {cart.roasted}
                </Text>
              </View>
            </>
          )}
        </View>
      </View>

      {cart.sizes.length > 1 && cart.sizes.map((cartItem) => <MultipleSize key={cartItem.size} cart={cartItem} />)}
    </LinearGradient>
  )
}

export default CartItem
