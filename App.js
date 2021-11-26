import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Login';
import SignUpScreen from './src/screens/SignUp';
import HomeScreen from './src/screens/Home';
import SplashScreen from './src/screens/SplashScreen';
import SingleProductScreen from './src/screens/SingleProduct';
import CartScreen from './src/screens/Cart';
import CheckoutScreen from './src/screens/Checkout';
import ProfileScreen from './src/screens/Profile';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: true}}>
        <Stack.Screen name="main" component={SplashScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="SingleProduct" component={SingleProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
