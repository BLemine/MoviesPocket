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
import Login from "./src/screens/login";
import SignUp from "./src/screens/signUp";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import SplashScreen from "react-native-splash-screen";
import { store } from "./src/store";
import { Provider, connect } from "react-redux";

const LoginStore = connect(state => ({ state: state }))(Login);
const SignUpStore = connect(state => ({ state: state }))(SignUp);
const HomeStore = connect(state => ({ state: state }))(Home);
const MovieStore = connect(state => ({ state: state }))(Movie);
const Stack = createStackNavigator();

export default function App() {

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" options={{
            headerShown: false
          }} component={LoginStore} />
          <Stack.Screen name="SignUp" options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
            headerShown: false
          }} component={SignUpStore} />
          <Stack.Screen name="Home" options={{
            headerShown: false
          }} component={HomeStore} />
          <Stack.Screen name="MovieDetails" options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forModalPresentationIOS,
            headerShown: false
          }} component={MovieStore} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

