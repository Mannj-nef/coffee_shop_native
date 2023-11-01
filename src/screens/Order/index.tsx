import { Text, View } from 'react-native'
import styles from './styles'

interface OrderHistoryProps {}

const OrderHistory = (props: OrderHistoryProps) => {
  return (
    <View style={styles.container}>
      <Text>OrderHistory</Text>
    </View>
  )
}

export default OrderHistory
