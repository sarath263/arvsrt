
import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,ImageBackground,Image,TouchableOpacity,Platform
} from 'react-native';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome', header: null
  };
  render() {
    return (
      <ImageBackground
         style={{flex: 1,marginTop:(Platform.OS === 'ios') ? 20 : 0}}
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
          <View style={styles.footer}>
            <TouchableOpacity style={styles.logo}>
              <Image
                style={styles.fImage}
                source={require('./pics/Logo.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.fItem,styles.selected]}>
              <Image
                style={styles.fImage}
                source={require('./pics/HomeN.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.fItem}>
              <Image
                style={styles.fImage}
                source={require('./pics/MenuN.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.fItem}>
              <Image
                style={styles.fImage}
                source={require('./pics/OrderN.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.fItem}>
              <Image
                style={styles.fImage}
                source={require('./pics/NotifyN.png')}
              />
            </TouchableOpacity>
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
    marginLeft:25,
    backgroundColor:'rgba(0,0,0,0)'
  },
  food: {
    fontFamily:'Georgia-Bold',
    fontSize: 26,
    textAlign: 'left',
    color: '#fff',
    lineHeight:26,
    backgroundColor:'rgba(0,0,0,0)'
  },
  panda: {
    fontFamily:'Georgia',
    fontSize: 33,
    textAlign: 'left',
    color: '#fff',
    marginBottom:6,
    lineHeight:33,
    backgroundColor:'rgba(0,0,0,0)'
  },
  twist: {
    fontFamily:'Helvetica-Bold',
    fontSize: 13,
    textAlign: 'left',
    color: '#fff',
    marginBottom:4,
    backgroundColor:'rgba(0,0,0,0)'
  },
  text: {
    fontFamily:'Helvetica',
    fontSize: 10,
    textAlign: 'left',
    color: '#fff',
    marginBottom: 5,
    backgroundColor:'rgba(0,0,0,0)'
  },
  footer:{
    bottom:0,
    height:30,
    backgroundColor:"#fff",
    flexDirection:"row"
  },
  logo:{
    justifyContent: 'center',
    alignItems:"center",
    paddingHorizontal:10
  },
  fItem:{
    flex: 1,
    justifyContent: 'center',
    alignItems:"center",
    paddingHorizontal:10
  },
  fImage:{
    height:25,
    resizeMode:"contain"
  },
  selected:{
    backgroundColor:"#f57c00"
  }
});

// AppRegistry.registerComponent('arvsrt', () => arvsrt);