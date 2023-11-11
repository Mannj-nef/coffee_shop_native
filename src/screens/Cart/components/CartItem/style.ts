import { StyleSheet } from 'react-native'
import { BORDERRADIUS, COLORS, SPACING } from '../../../../themes'

const styles = StyleSheet.create({
  container: {
    borderRadius: BORDERRADIUS.radius_20,
    overflow: 'hidden',
    padding: SPACING.space_16,
  },

  containerMain: {
    flexDirection: 'row',
    gap: SPACING.space_20,
    marginBottom: 10,
  },

  cartItemImage: {
    height: 140,
    width: 140,
    borderRadius: BORDERRADIUS.radius_20,
  },

  propertyText: { color: COLORS.primaryWhiteHex },
})
export default styles
