import {Text, View, StyleSheet} from 'react-native'

interface OrderHistoryProps {}

const OrderHistory = (props: OrderHistoryProps) => {
  return (
    <View style={styles.container}>
      <Text>OrderHistory</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default OrderHistory
