import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './Home';

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
  },{ 
    headerMode: 'screen' 
  });

AppRegistry.registerComponent('arvsrt', () => SimpleApp);