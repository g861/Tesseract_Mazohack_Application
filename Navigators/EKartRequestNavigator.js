import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import AddRequest from '../Screens/eKart/EkartRequest/AddRequest';
import ConfirmRequest from '../Screens/eKart/EkartRequest/ConfirmRequest';

const Tab  = createMaterialTopTabNavigator() ; 

const EKartRequestNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Add Request' component={AddRequest} />
        <Tab.Screen name='Confirm' component={ConfirmRequest} />
    </Tab.Navigator>
  )
}

export default EKartRequestNavigator