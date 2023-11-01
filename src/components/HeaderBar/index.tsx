import { Text, View } from 'react-native'
import styles from './styles'
import GradientBGIcon from '../GradientBGIcon'
import { COLORS, FONTSIZE } from '../../themes'
import ProfilePic from '../ProfilePic'

interface HeaderBarProps {
  ScreenTitle?: string
}

const HeaderBar = ({ ScreenTitle }: HeaderBarProps) => {
  return (
    <View style={styles.container}>
      <GradientBGIcon name="menu" size={FONTSIZE.size_16} color={COLORS.primaryLightGreyHex} />

      {ScreenTitle && <Text style={styles.title}>{ScreenTitle}</Text>}

      <ProfilePic />
    </View>
  )
}

export default HeaderBar
