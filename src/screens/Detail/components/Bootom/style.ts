import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../../../themes'

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  detailBootom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.space_20,
  },

  detailBootomLeft: {
    alignItems: 'center',
  },

  propertyText: { color: COLORS.primaryWhiteHex },

  detailBootomLeftPrice: {
    flexDirection: 'row',
    gap: SPACING.space_8,
  },
  detailBootomLeftPropertyText: {
    marginTop: SPACING.space_2,
    fontSize: FONTSIZE.size_24,
    fontWeight: '600',
  },
})

export default styles
