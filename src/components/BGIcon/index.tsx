import { Text, View } from 'react-native'
import styles from './styles'
import Icon from '../Icons'

interface BGIconProps {
  name: string
  size: number
  color: string
  bgColor: string
}

const BGIcon = ({ bgColor, color, name, size }: BGIconProps) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Icon color={color} name={name} size={size} style={styles} />
    </View>
  )
}

export default BGIcon
