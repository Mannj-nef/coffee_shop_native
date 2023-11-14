import { StyleSheet } from 'react-native'
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../../../themes'

const styles = StyleSheet.create({
  flatListSize: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  sizeWrappItem: {
    backgroundColor: COLORS.primaryDarkGreyHex,
    padding: SPACING.space_16,
    minWidth: 100,
    alignItems: 'center',
    borderWidth: 1,
    overflow: 'hidden',
    borderRadius: BORDERRADIUS.radius_15,
  },

  propertyText: { color: COLORS.primaryWhiteHex },

  propertyTextSizeItem: {
    fontWeight: '600',
  },

  propertyTextSizeTitle: {
    marginBottom: SPACING.space_12,
    fontSize: FONTSIZE.size_20,
  },

  detailBootom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.space_20,
  },

  detailBootomLeft: {
    alignItems: 'center',
  },

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
