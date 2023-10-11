import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import { SCREEN } from './stackScreen'
import { COLORS } from '../themes'
import { BlurView } from '@react-native-community/blur'
import Icon from '../components/Icons'

interface TapNavigatorProps {}

const Tab = createBottomTabNavigator()
const ICON_SIZE = 30

const TapNavigator = (props: TapNavigatorProps) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.container,
        tabBarBackground: () => <BlurView overlayColor="" blurAmount={15} style={styles.blurViewStyle} />,
      }}>
      <Tab.Screen
        name={SCREEN.home.name}
        component={SCREEN.home.component}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} size={ICON_SIZE} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.cart.name}
        component={SCREEN.cart.component}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="cart" color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} size={ICON_SIZE} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.favorite.name}
        component={SCREEN.favorite.component}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="heart"
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
              size={ICON_SIZE}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.history.name}
        component={SCREEN.history.component}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="bell" color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} size={ICON_SIZE} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    position: 'relative',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },

  blurViewStyle: {},

  IconStyle: {
    color: COLORS.primaryLightGreyHex,
  },
})

export default TapNavigator
