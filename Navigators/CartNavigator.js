import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../Screens/Cart/Cart';
import Checkout from '../Screens/Cart/checkout/Checkout';
import CheckoutNavigator from './CheckoutNavigator';

const Stack = createStackNavigator() ; 

const CartNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Cart'
            component={Cart}
            options={{headerShown:false}}
        />
        <Stack.Screen 
            name='Checkout'
            component={CheckoutNavigator}
        />
    </Stack.Navigator>
  )
}

export default CartNavigator