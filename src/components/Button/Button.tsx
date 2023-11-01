import * as React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { BORDERRADIUS, COLORS, SPACING } from '../../themes'

interface ButtonProps {
  title: string
}

const Button = ({ title }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Text style={[styles.propertyText]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  btnContainer: {
    minWidth: 240,
    borderRadius: BORDERRADIUS.radius_25,
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
  },

  propertyText: { color: COLORS.primaryWhiteHex },
})
