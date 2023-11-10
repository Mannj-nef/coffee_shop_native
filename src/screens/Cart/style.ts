import { StyleSheet } from 'react-native'
import { BORDERRADIUS, COLORS, SPACING } from '../../themes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
    paddingHorizontal: SPACING.space_30,
  },
  imageEmptyWrapper: {
    height: 300,
  },
  propertyText: {
    color: COLORS.primaryWhiteHex,
  },
})

export default styles
