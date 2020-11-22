/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from "./src/screens/home";
import Movie from "./src/screens/movie";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,CardStyleInterpolators } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{
              headerShown: false
            }} component={Home} />
          <Stack.Screen name="MovieDetails" options={{
            cardStyleInterpolator:
            CardStyleInterpolators.forModalPresentationIOS,
              headerShown: false
            }} component={Movie} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

