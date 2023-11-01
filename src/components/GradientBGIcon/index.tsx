import { Text, View } from 'react-native'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS } from '../../themes'
import Icon from '../Icons'

interface GradientBGIconProps {
  name: string
  color: string
  size: number
}

const GradientBGIcon = ({ color, name, size }: GradientBGIconProps) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]} style={styles.LinearGradientBG}>
        <Icon name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  )
}

export default GradientBGIcon
