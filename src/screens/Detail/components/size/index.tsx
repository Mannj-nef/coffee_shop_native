import { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import useShareStore from '../../../../stores/shared'
import { COLORS } from '../../../../themes'
import styles from './style'
import { Button } from '../../../../components/Button'
import useCart from '../../../../hooks/useCart'
import { TCarts } from '../../../../types/coffee'
import { useNavigation } from '@react-navigation/native'
import { SCREEN } from '../../../../navigators/stackScreen'

interface SizeComponentProps {}

const SizeComponent = ({}: SizeComponentProps) => {
  const detail = useShareStore((state) => state.detail)
  const navigation = useNavigation()

  const { handleAddCard } = useCart()

  const [sizeItem, setSizeItem] = useState<string>()

  useEffect(() => {
    setSizeItem(detail?.prices[0].size)
  }, [detail])

  if (!detail) return

  return (
    <>
      <Text style={[styles.propertyText, styles.propertyTextSizeTitle]}>Size</Text>

      <View style={styles.flatListSize}>
        {detail.prices.map((item) => (
          <TouchableOpacity
            style={[
              styles.sizeWrappItem,
              {
                borderColor: item.size === sizeItem ? COLORS.primaryOrangeHex : 'transparent',
              },
            ]}
            onPress={() => {
              setSizeItem(item.size)
            }}
            key={item.size}>
            <Text style={[styles.propertyText, styles.propertyTextSizeItem]}>{item.size}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.detailBootom}>
        <View style={styles.detailBootomLeft}>
          <Text style={[styles.propertyText]}>Price</Text>

          <View style={styles.detailBootomLeftPrice}>
            <Text
              style={[styles.propertyText, styles.detailBootomLeftPropertyText, { color: COLORS.primaryOrangeHex }]}>
              {detail.prices[0].currency}
            </Text>

            <Text style={[styles.propertyText, styles.detailBootomLeftPropertyText]}>
              {detail.prices.find((c) => c.size === sizeItem)?.price || detail?.prices[0].price}
            </Text>
          </View>
        </View>

        <Button
          onPress={() => {
            // handleAddCard(detail as TCarts, sizeItem as string)
            handleAddCard({ item: detail as TCarts, size: detail?.prices.find((c) => c.size === sizeItem) })
            navigation.navigate(SCREEN.cart.name as never)
          }}
          title="Add to Cart"
        />
      </View>
    </>
  )
}

export default SizeComponent
