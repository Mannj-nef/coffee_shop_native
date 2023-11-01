import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import styles from './styles'
import { COFFEE_IMAGE } from '../../../../mocks/images'
import BGIcon from '../../../../components/BGIcon'
import { COLORS, FONTSIZE } from '../../../../themes'
import LinearGradient from 'react-native-linear-gradient'
import { typeCoffe } from '../../../../types/coffee'

interface CardItemCoffeeProps {
  coffee: typeCoffe
}

const CardItemCoffee = ({ coffee }: CardItemCoffeeProps) => {
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

          <TouchableOpacity onPress={() => {}}>
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
