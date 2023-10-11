import {Text, View, StyleSheet} from 'react-native'

interface CartProps {}

const Cart = (props: CartProps) => {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default Cart
