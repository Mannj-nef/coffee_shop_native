import { StyleSheet } from 'react-native'
import { COLORS, SPACING } from '../../themes'

const SIZE = SPACING.space_36

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  profileImg: {
    width: SIZE,
    height: SIZE,
  },
})

export default styles
