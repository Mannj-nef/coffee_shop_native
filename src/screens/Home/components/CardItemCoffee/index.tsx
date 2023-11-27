import { Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import styles from './styles'
import BGIcon from '../../../../components/BGIcon'
import { COLORS, FONTSIZE } from '../../../../themes'
import LinearGradient from 'react-native-linear-gradient'
import { TCarts, typeCoffe } from '../../../../types/coffee'
import useCart from '../../../../hooks/useCart'

interface CardItemCoffeeProps {
  coffee: typeCoffe
}

const CardItemCoffee = ({ coffee }: CardItemCoffeeProps) => {
  const { handleAddCard } = useCart()

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={styles.container}>
      <ImageBackground source={{ uri: coffee.imagelink_square }} style={styles.coffeeImage} resizeMode="cover" />

      <View>
        <Text style={styles.title}>{coffee.name}</Text>
        <Text style={styles.desc}>{coffee.special_ingredient}</Text>

        <View style={styles.bottom}>
          <View style={styles.priceWrapp}>
            <Text style={[styles.price, { color: COLORS.primaryOrangeHex }]}>{coffee.prices[0].currency}</Text>
            <Text style={styles.price}>{coffee.prices[0].price}</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              handleAddCard({ item: coffee as TCarts })
            }}>
            <BGIcon
              color={COLORS.primaryWhiteHex}
              name={'plus'}
              bgColor={COLORS.primaryOrangeHex}
              size={FONTSIZE.size_16}
            />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}

export default CardItemCoffee
