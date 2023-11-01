import * as React from 'react'
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import styles from './style'
import { COFFEE_IMAGE } from '../../../../mocks/images'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../../../themes'
import LinearGradient from 'react-native-linear-gradient'
import BGIcon from '../../../../components/BGIcon'
import { typeCoffe } from '../../../../types/coffee'

interface CartItemProps {
  cart: typeCoffe
}

const CartItem = ({ cart }: CartItemProps) => {
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
            Cappuccino
          </Text>

          <Text style={[styles.propertyText]}>With Steamed Milk</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: SPACING.space_20,
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: COLORS.primaryBlackHex,
                padding: SPACING.space_10,
                flex: 1,
                borderRadius: BORDERRADIUS.radius_10,
                alignItems: 'center',
              }}>
              <Text style={[styles.propertyText]}>M</Text>
            </View>

            <View style={{ flexDirection: 'row', gap: SPACING.space_4 }}>
              <Text style={[styles.propertyText]}>$</Text>
              <Text style={[styles.propertyText]}>6.2</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity>
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
              <Text style={[styles.propertyText]}>1</Text>
            </View>

            <TouchableOpacity>
              <BGIcon
                color={COLORS.primaryWhiteHex}
                name={'plus'}
                bgColor={COLORS.primaryOrangeHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

export default CartItem
