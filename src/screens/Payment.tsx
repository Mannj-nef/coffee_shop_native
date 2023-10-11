import {Text, View, StyleSheet} from 'react-native'

interface PaymentProps {}

const Payment = (props: PaymentProps) => {
  return (
    <View style={styles.container}>
      <Text>Payment</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default Payment
