import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SCREENS from './src/navigators/stackScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {SCREENS.map((screen) => (
          <Stack.Screen
            key={screen.id}
            name={screen.name}
            component={screen.component}
            options={{ animation: 'slide_from_bottom' }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
