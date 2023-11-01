import { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import useShareStore from '../../../../stores/shared'
import { COLORS } from '../../../../themes'
import styles from './style'

interface SizeComponentProps {}

const SizeComponent = ({}: SizeComponentProps) => {
  const detail = useShareStore((state) => state.detail)
  const setDetail = useShareStore((state) => state.setDetail)

  const [sizeItem, setSizeItem] = useState(detail?.prices[0].size)

  return (
    <>
      <Text style={[styles.propertyText, styles.propertyTextSizeTitle]}>Size</Text>

      <View style={styles.flatListSize}>
        {detail?.prices.map((item) => (
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
    </>
  )
}

export default SizeComponent
