import { StyleSheet } from 'react-native'
import { BORDERRADIUS, SPACING } from '../../themes'

const styles = StyleSheet.create({
  container: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDERRADIUS.radius_8,
  },
})

export default styles
