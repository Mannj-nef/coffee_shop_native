import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './style'
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../../../themes'
import { price } from '../../../../types/coffee'
import BGIcon from '../../../../components/BGIcon'
import useCart from '../../../../hooks/useCart'

const MultipleSize = ({ cart }: { cart: price }) => {
  // const { handleDecreaseCard, handleIncreaseCard } = useCart()

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: SPACING.space_12,
        alignItems: 'center',
        marginBottom: 10,
      }}>
      {/* size */}
      <View
        style={{
          backgroundColor: COLORS.primaryBlackHex,
          padding: SPACING.space_10,
          borderRadius: BORDERRADIUS.radius_10,
          alignItems: 'center',
          width: '30%',
        }}>
        <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_18 }]}>{cart.size}</Text>
      </View>

      <View style={{ flexDirection: 'row', gap: SPACING.space_4, width: 70 }}>
        <Text style={{ color: COLORS.primaryOrangeHex, fontSize: FONTSIZE.size_18 }}>{cart.currency}</Text>
        <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_18 }]}>{cart.price}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          gap: SPACING.space_8,
        }}>
        <TouchableOpacity onPress={() => {}}>
          <BGIcon
            color={COLORS.primaryWhiteHex}
            name={'minus'}
            bgColor={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_18}
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
            borderColor: COLORS.primaryOrangeHex,
          }}>
          <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_18 }]}>{1}</Text>
        </View>

        <TouchableOpacity onPress={() => {}}>
          <BGIcon
            color={COLORS.primaryWhiteHex}
            name={'plus'}
            bgColor={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_16}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MultipleSize
