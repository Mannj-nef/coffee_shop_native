import { StyleSheet } from 'react-native'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../../../themes'

const PADDING_ICON = SPACING.space_8

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: SPACING.space_15,
    margin: SPACING.space_30,
    paddingVertical: SPACING.space_4,
    paddingHorizontal: SPACING.space_20,

    borderRadius: BORDERRADIUS.radius_20,

    backgroundColor: COLORS.primaryDarkGreyHex,
    color: COLORS.primaryWhiteHex,
  },

  iconSearch: {
    padding: PADDING_ICON,
  },

  iconReset: {
    marginLeft: 'auto',
    padding: PADDING_ICON,
  },

  textInputContainer: {
    flex: 1,

    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,

    color: COLORS.primaryWhiteHex,
  },
})

export default styles
