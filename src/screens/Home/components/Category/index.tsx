import { useState, useEffect } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'
import { CATEGORYS } from '../../../../mocks/categoryData'
import { COLORS } from '../../../../themes'
import useCoffee from '../../../../stores/coffee'

interface CategoryProps {}

const Categorys = ({}: CategoryProps) => {
  const categorys = CATEGORYS // get category to store
  const setCoffee = useCoffee((state) => state.fiterCoffeeByCategory)
  const resetCoffee = useCoffee((state) => state.resetCoffee)

  const [chooseCategory, setChooseCategory] = useState(categorys[0].name)

  const handeShowCoffee = (category: string) => {
    setChooseCategory(category)

    if (category === 'All') {
      resetCoffee()
    } else {
      setCoffee(category)
    }
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
      {!!categorys.length ? (
        categorys.map((category) => (
          <View key={category.name} style={styles.categoryViewContain}>
            <TouchableOpacity onPress={() => handeShowCoffee(category.name)} style={styles.categoryViewItem}>
              <Text
                style={[
                  styles.categoryText,
                  chooseCategory === category.name ? { color: COLORS.primaryOrangeHex } : {},
                ]}>
                {category.name}
              </Text>

              {chooseCategory === category.name ? <View style={styles.activeCategory}></View> : <></>}
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <></>
      )}
    </ScrollView>
  )
}

export default Categorys
