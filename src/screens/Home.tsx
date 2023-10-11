import {Text, View, StyleSheet} from 'react-native'

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default Home
