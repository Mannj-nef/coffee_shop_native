import { Text, View, ScrollView } from 'react-native'
import styles from './styles'
import ImageBackgroundInfo from '../../components/ImageBackgroundInfo'
import StatusBarComponent from '../../components/StatusBar'
import HeaderBar from '../../components/HeaderBar'
import useShareStore from '../../stores/shared'
import { COLORS } from '../../themes'

interface FavoriteProps {}

const Favorite = (props: FavoriteProps) => {
  const detail = useShareStore((state) => state.detail)

  return (
    <View style={styles.container}>
      <StatusBarComponent />

      <HeaderBar ScreenTitle="Favorites" />

      {detail && (
        <ScrollView>
          <View style={{ gap: 20 }}>
            <ImageBackgroundInfo screen="favorite" coffee={detail} />
            <ImageBackgroundInfo screen="favorite" coffee={detail} />
          </View>
        </ScrollView>
      )}
    </View>
  )
}

export default Favorite
