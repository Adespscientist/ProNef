import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';

import 'react-native-gesture-handler';
import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent" 
  }
}

const App = () => {
  const [loaded] = useFonts({
    'Inter-Bold': require("./assets/fonts/Inter-Bold.ttf"),
    'Inter-SemiBold': require("./assets/fonts/Inter-SemiBold.ttf"),
    'Inter-Medium': require("./assets/fonts/Inter-Medium.ttf"),
    'Inter-Regular': require("./assets/fonts/Inter-Regular.ttf"),
    'Inter-Light': require("./assets/fonts/Inter-Light.ttf"),
  });

  console.log("----------------------------------------------------loaded fonts", loaded);

  if (!loaded) {
    console.log("----------------------------------------------------Fonts not loaded yet");
    return null;
  }

  console.log("----------------------------------------------------Fonts loaded successfully");

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
