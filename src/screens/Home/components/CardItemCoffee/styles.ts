import { StyleSheet, Dimensions } from 'react-native'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../../../themes'

const CARD_WIDTH = Dimensions.get('window').width * 0.32

const styles = StyleSheet.create({
  container: {
    padding: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_20,
  },

  coffeeImage: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },

  title: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
  },

  desc: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_10,
  },

  //
  bottom: {
    marginTop: SPACING.space_10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  priceWrapp: {
    flexDirection: 'row',
    gap: SPACING.space_4,
  },

  price: {
    fontWeight: '700',
    color: COLORS.primaryWhiteHex,
  },
})

export default styles
