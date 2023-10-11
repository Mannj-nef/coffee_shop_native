import {Text, View, StyleSheet} from 'react-native'

interface FavoriteProps {}

const Favorite = (props: FavoriteProps) => {
  return (
    <View style={styles.container}>
      <Text>Favorite</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default Favorite
