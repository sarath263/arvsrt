import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './Home';
import Menu from './Menu';

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Menu: { screen: Menu },
  },{ 
    headerMode: 'screen' 
  });

AppRegistry.registerComponent('arvsrt', () => SimpleApp);