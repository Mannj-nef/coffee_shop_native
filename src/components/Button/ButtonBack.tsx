import * as React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import GradientBGIcon from '../GradientBGIcon'
import { COLORS, FONTSIZE, SPACING } from '../../themes'

interface ButtonBackProps {
  handleBack: () => void
}

const ButtonBack = ({ handleBack }: ButtonBackProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleBack}>
      <GradientBGIcon name="chevron-left" size={FONTSIZE.size_30} color={COLORS.primaryLightGreyHex} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 'auto',
    zIndex: 9,
    left: SPACING.space_30,
    top: SPACING.space_30,
  },
})

export default ButtonBack
