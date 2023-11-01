import { StyleSheet } from 'react-native'
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../themes'

const borderRadius = BORDERRADIUS.radius_20 * 2
const sizeMainInfoRightIcon = 65
const gapMainInfoRightIcon = SPACING.space_20

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    aspectRatio: 20 / 30,
    position: 'relative',
  },

  coffeeImage: {
    flex: 1,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  },

  btnAction: {
    position: 'absolute',
    width: 'auto',
    right: SPACING.space_30,
    top: SPACING.space_30,
  },

  mainInfo: {
    bottom: 0,
    width: '100%',
    position: 'absolute',
    paddingHorizontal: SPACING.space_28,
    paddingVertical: SPACING.space_20,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    backgroundColor: COLORS.primaryBlackRGBA,
    color: COLORS.primaryWhiteHex,
  },

  mainInfoWrapperTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  mainInfoLeft: {},

  mainInfoRight: {
    flexDirection: 'row',
    gap: gapMainInfoRightIcon,
  },

  mainInfoRightIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryBlackHex,
    height: sizeMainInfoRightIcon,
    width: sizeMainInfoRightIcon,
    gap: 2,
    padding: SPACING.space_2,
    borderRadius: BORDERRADIUS.radius_15,
  },

  mainInfoWrapperBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.space_20,
    alignItems: 'center',
  },

  mainInfoBottomLeft: {
    flexDirection: 'row',
    gap: SPACING.space_4,
  },

  mainInfoBottomRight: {
    backgroundColor: COLORS.primaryBlackHex,
    borderRadius: BORDERRADIUS.radius_15,
    width: sizeMainInfoRightIcon * 2 + gapMainInfoRightIcon,
    paddingVertical: SPACING.space_20,
    alignItems: 'center',
  },

  PropertyText: { color: COLORS.primaryWhiteHex },

  PropertyTextName: {
    fontSize: FONTSIZE.size_28,
    fontWeight: '600',
  },

  PropertyTextRight: {
    fontSize: FONTSIZE.size_12,
  },

  descriptionWrapper: {
    paddingHorizontal: SPACING.space_28,
    paddingVertical: SPACING.space_28,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },

  PropertyTextDescriptionTitle: {
    fontSize: FONTSIZE.size_20,
    marginBottom: SPACING.space_8,
  },

  PropertyTextDescription: {
    lineHeight: FONTSIZE.size_20,
  },
})

export default styles
