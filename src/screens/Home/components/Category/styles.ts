import { StyleSheet } from 'react-native'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../../../themes'

const styels = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.space_20,
  },

  categoryViewContain: {
    paddingHorizontal: SPACING.space_15,
  },

  categoryViewItem: {
    alignItems: 'center',
  },

  categoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    fontWeight: '700',

    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },

  activeCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
})

export default styels
