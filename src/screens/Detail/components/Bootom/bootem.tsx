import * as React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { COLORS } from '../../../../themes'
import useShareStore from '../../../../stores/shared'
import styles from './style'
import { Button } from '../../../../components/Button'

interface BottomProps {}

const Bottom = ({}: BottomProps) => {
  const detail = useShareStore((state) => state.detail)

  return (
    <View style={styles.detailBootom}>
      <View style={styles.detailBootomLeft}>
        <Text style={[styles.propertyText]}>Price</Text>

        <View style={styles.detailBootomLeftPrice}>
          <Text style={[styles.propertyText, styles.detailBootomLeftPropertyText, { color: COLORS.primaryOrangeHex }]}>
            {detail?.prices[0].currency}
          </Text>

          <Text style={[styles.propertyText, styles.detailBootomLeftPropertyText]}>{detail?.prices[0].price}</Text>
        </View>
      </View>

      <Button title="Add to Cart" />
    </View>
  )
}

export default Bottom
