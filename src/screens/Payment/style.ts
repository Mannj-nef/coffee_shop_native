import { StyleSheet } from 'react-native'
import { COLORS, SPACING } from '../../themes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
    justifyContent: 'space-between',
  },
  propertyText: {
    color: COLORS.primaryWhiteHex,
  },
})

export default styles
