import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,ImageBackground,Image,TouchableOpacity,Platform} from 'react-native';
import { styles } from './common/styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome', header: null
  };
  render() {
    const { navigate } = this.props.navigation;
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
            <TouchableOpacity style={styles.fItem} onPress={() => navigate('Menu')}>
              <Image
                style={styles.fImage}
                source={require('./pics/MenuG.png')}
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