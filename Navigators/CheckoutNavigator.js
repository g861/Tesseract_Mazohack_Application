import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Checkout from '../Screens/Cart/checkout/Checkout';
import Payment from '../Screens/Cart/checkout/Payment';
import Confirm from '../Screens/Cart/checkout/Confirm';

const Tab = createMaterialTopTabNavigator() ; 

const CheckoutNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Shipping" component={Checkout} />
            <Tab.Screen name="Payment" component={Payment} />
            <Tab.Screen name="Confirm" component={Confirm} />
        </Tab.Navigator>
    );
}

export default CheckoutNavigator