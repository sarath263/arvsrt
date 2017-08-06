
import React, { Component } from 'react';
import {StyleSheet,Text,Image,TouchableOpacity,View,Platform} from 'react-native';
import { styles } from './common/styles';
import ImageSlider from 'react-native-image-slider';

export default class Menu extends Component {
  static navigationOptions = {
    title: 'Menu', header: null
  };
  constructor(props) {
      super(props);

      this.state = {
          position: 1,
          interval: null
      };
  }

  componentWillMount() {
      this.setState({interval: setInterval(() => {
          this.setState({position: this.state.position === 3 ? 0 : this.state.position + 1});
      }, 2000)});
  }

  componentWillUnmount() {
      clearInterval(this.state.interval);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1,marginTop:(Platform.OS === 'ios') ? 20 : 0}}>
        <View style={styles.menuContainer}>
            <View style={styles.menuTop}>
              <View style={styles.menuHead}>
              </View>
              <View style={{height:165}}>
              <ImageSlider images={[
                  require('./pics/im1.png'),
                  require('./pics/im2.png'),
                  require('./pics/im3.png'),
                  require('./pics/im4.png')
              ]} style={{backgroundColor:"transparent"}}
              position={this.state.position}
              onPositionChanged={position => this.setState({position})} />
              </View>
            </View>
            <View>
            </View>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.logo}>
              <Image
                style={styles.fImage}
                source={require('./pics/Logo.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.fItem} onPress={() => navigate('Home')}>
              <Image
                style={styles.fImage}
                source={require('./pics/HomeG.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.fItem,styles.selected]}>
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
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });