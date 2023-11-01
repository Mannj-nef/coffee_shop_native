import { Text, View } from 'react-native'
import styles from './style'

interface PaymentProps {}

const Payment = (props: PaymentProps) => {
  return (
    <View style={styles.container}>
      <Text>Payment</Text>
    </View>
  )
}

export default Payment
