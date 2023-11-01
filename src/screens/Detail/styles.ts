import { StyleSheet } from 'react-native'
import { COLORS } from '../../themes'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },

  scrollViewFlex: {
    flexGrow: 1,
  },

  propertyText: { color: COLORS.primaryWhiteHex },
})

export default styles
