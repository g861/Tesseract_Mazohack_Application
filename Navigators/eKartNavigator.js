import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import eKartContainer from '../Screens/eKart/EkartContainer'
import EKartRequest from '../Screens/eKart/EKartRequest';
import EKartRequestNavigator from './EKartRequestNavigator';
const Stack  = createStackNavigator() ; 

const eKartNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name='EKART'
          component={eKartContainer}
        />
        <Stack.Screen 
          name='E-kart Request'
          component={EKartRequestNavigator}
        />
      </Stack.Navigator>
  )
}

export default eKartNavigator