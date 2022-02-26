import { View, Text } from 'react-native'
import React , { useContext } from 'react'
import { BottomTabNavigator, createBottomTabNavigator } from '@react-navigation/bottom-tabs' ; 
import HomeNavigator from './HomeNavigator';
import Icon from "react-native-vector-icons/FontAwesome";
import CartNavigator from './CartNavigator';
const Tab = createBottomTabNavigator() ; 
import CartIcon from '../partials/CartIcon'
import eKartNavigator from './eKartNavigator';
import UserNavigator from './UserNavigator';
const Main = () => {
  return (
    <Tab.Navigator 
    initialRouteName="Home"
    tabBarOptions={{
      keyboardHidesTabBar: true,
      showLabel: false,
      activeTintColor: "#e91e63",
    }}
    >
      <Tab.Screen
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
          headerShown:false
        }}
      />
              <Tab.Screen 
            name='Admin'
            component={eKartNavigator}
            options={{
              tabBarIcon:({color}) =>(
                <Icon 
                  name="mobile"
                  style={{ position : "relative" }}
                  color={color}
                  size={30}
                />
              ),
              headerShown:false
            }}
        />
        <Tab.Screen 
            name='Cart'
            component={CartNavigator}
            options={{
              tabBarIcon:({color}) =>(
                <View>
                  <Icon 
                    name="shopping-cart"
                    color={color}
                    size={30}
                  />
                  <CartIcon />
                </View>
              ),
                headerShown:false
            }}
        />

        <Tab.Screen 
            name='User'
            component={UserNavigator}
            options={{
              tabBarIcon:({color}) =>(
                <Icon 
                  name="user"
                  style={{ position : "relative" }}
                  color={color}
                  size={30}
                />
              )
            }}
        />
    </Tab.Navigator>
  )
}

export default Main