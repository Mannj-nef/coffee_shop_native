import {Text, View, StyleSheet} from 'react-native'

interface DetailProps {}

const Detail = (props: DetailProps) => {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default Detail
