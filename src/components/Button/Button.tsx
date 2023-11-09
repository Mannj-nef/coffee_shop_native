import * as React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../../themes'

interface ButtonProps {
  title: string
  onPress?: () => void
}

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={[styles.propertyText, { fontSize: FONTSIZE.size_18, fontWeight: '700' }]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  btnContainer: {
    minWidth: 240,
    borderRadius: BORDERRADIUS.radius_15,
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
  },

  propertyText: { color: COLORS.primaryWhiteHex },
})
