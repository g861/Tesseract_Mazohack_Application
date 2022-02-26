import React from 'react';
import { StyleSheet,Dimensions, Text, View, LogBox } from 'react-native';
import Header from './partials/Header';
import { NavigationContainer } from '@react-navigation/native';

//Redux 
import { Provider } from 'react-redux';
import store from './Redux/store';

// Importing the navigation 

import Main from './Navigators/Main';

var {width} = Dimensions.get('window')
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Header />
          <Main />
      </NavigationContainer>
    </Provider>



  );
}
