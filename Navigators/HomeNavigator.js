import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProductContainer from '../Screens/Products/ProductContainer'
import { StackRouter } from 'react-navigation';
import SingleProduct from '../Screens/Products/SingleProduct';

const Stack  = createStackNavigator() ; 

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Home'
            component={ProductContainer}
            options={{headerShown:false}}
        />
          <Stack.Screen 
            name='Product Details'
            component={SingleProduct}
            options={{headerShown:false}}
        />
    </Stack.Navigator>
  )
}

export default HomeNavigator