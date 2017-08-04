
import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,ImageBackground
} from 'react-native';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome', header: null
  };
  render() {
    return (
      <ImageBackground
         style={{flex: 1,marginTop:20}}
         source={require('./pics/landing-page.png')} >
         <View style={styles.container}>
            <Text style={styles.food}>
              Food
            </Text>
            <Text style={styles.panda}>
              Panda
            </Text>
            <Text style={styles.twist}>
            WHAT A TWIST.
            </Text>
            <Text style={styles.text}>
              The Panda, the iconic long, slim slick of bread, has{'\n'} traditionally one of the most potebnt symbols of french{'\n'} culture.
            </Text>
          </View>
       </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft:10,
    backgroundColor:'rgba(0,0,0,0)'
  },
  food: {
    fontSize: 23,
    textAlign: 'left',
    color: '#fff',
    marginLeft: 2,
    backgroundColor:'rgba(0,0,0,0)'
  },
  panda: {
    fontSize: 28,
    textAlign: 'left',
    color: '#fff',
    margin: 2,
    backgroundColor:'rgba(0,0,0,0)'
  },
  twist: {
    fontSize: 13,
    textAlign: 'left',
    color: '#fff',
    margin: 2,
    backgroundColor:'rgba(0,0,0,0)'
  },
  text: {
    fontSize: 8,
    textAlign: 'left',
    color: '#fff',
    marginBottom: 5,
    backgroundColor:'rgba(0,0,0,0)'
  },
});

// AppRegistry.registerComponent('arvsrt', () => arvsrt);