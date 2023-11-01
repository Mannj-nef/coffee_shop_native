import { StyleSheet } from 'react-native'
import { COLORS, FONTSIZE, SPACING } from '../../themes'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SPACING.space_30,
  },

  title: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_24,
    fontWeight: '700',
  },
})

export default styles
