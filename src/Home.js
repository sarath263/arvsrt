
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
            <Text style={styles.welcome}>
              Food
            </Text>
            <Text style={styles.welcome}>
              Panda
            </Text>
            <Text style={styles.instructions}>
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
    alignItems: 'center',
    backgroundColor:'rgba(0,0,0,0)'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    color: '#fff',
    margin: 5,
    backgroundColor:'rgba(0,0,0,0)'
  },
  instructions: {
    textAlign: 'left',
    color: '#fff',
    marginBottom: 5,
    backgroundColor:'rgba(0,0,0,0)'
  },
});

// AppRegistry.registerComponent('arvsrt', () => arvsrt);