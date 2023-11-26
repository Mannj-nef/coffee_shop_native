import { View, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from './style'
import HeaderBar from '../../components/HeaderBar'
import Search from './components/Search'
import Categorys from './components/Category'
import CardItemCoffee from './components/CardItemCoffee'
import { SPACING } from '../../themes'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import useCoffee from '../../stores/coffee'
import useBearn from '../../stores/bearn'
import StatusBarComponent from '../../components/StatusBar'

const Home = ({ navigation }: any) => {
  const coffees = useCoffee((state) => state.coffees)
  const beans = useBearn((state) => state.bearn)

  const tabBarHeight = useBottomTabBarHeight()

  const handleNavigateDetail = ({ id, type }: { id: string; type: string }) => {
    navigation.push('Detail', {
      id,
      type,
    })
  }

  return (
    <View style={styles.container}>
      <StatusBarComponent />
      <View style={{ paddingHorizontal: SPACING.space_30 }}>
        <HeaderBar />
      </View>

      <ScrollView>
        <Text style={styles.ScreenTitle}>Find the best {'\n'}coffee for you</Text>

        <Search />

        <Categorys />

        {/*  */}

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={coffees}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
          renderItem={(itemRender) => (
            <TouchableOpacity
              key={itemRender.item.id}
              onPress={() => {
                handleNavigateDetail({ id: itemRender.item.id, type: itemRender.item.type })
              }}>
              <CardItemCoffee coffee={itemRender.item}></CardItemCoffee>
            </TouchableOpacity>
          )}
        />

        <Text style={styles.coffeeBeansTitle}>Coffee beans</Text>

        <FlatList
          horizontal
          data={beans}
          contentContainerStyle={[styles.flatListContainer, { marginBottom: tabBarHeight + SPACING.space_20 }]}
          keyExtractor={(item) => item.id}
          renderItem={(itemRender) => (
            <TouchableOpacity
              key={itemRender.item.id}
              onPress={() => {
                handleNavigateDetail({ id: itemRender.item.id, type: itemRender.item.type })
              }}>
              <CardItemCoffee coffee={itemRender.item} />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  )
}

export default Home
