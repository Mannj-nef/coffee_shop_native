import MuiIcon from 'react-native-vector-icons/MaterialCommunityIcons'

interface IconProps {
  name: string
  size?: number
  color: string
  style?: {}
}

const Icon = ({ name, size, color, style }: IconProps) => {
  return <MuiIcon name={name} color={color} size={size} style={style} />
}

export default Icon
