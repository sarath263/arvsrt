
import React, { Component } from 'react';
import {StyleSheet,Text,Image,TouchableOpacity,View,Platform,ScrollView} from 'react-native';
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
        <View style={[styles.menuContainer]}>
            <View style={styles.menuTop}>
              <View style={styles.menuHead}>
                <Text style={[styles.htext,{marginLeft:5}]}>We are happy to serve you!</Text>
                <Text style={[styles.htext]}>Menu</Text>
                <View style={{flexDirection:"row"}}>
                  <Image
                    style={[styles.fImage,styles.mImage]}
                    source={require('./pics/Cart.png')}>
                  </Image>
                  <View style={styles.badge}>
                    <Text style={{color:"#f57c00",fontSize:8,backgroundColor:"transparent",padding:3.2}}>2</Text>
                  </View>
                  <Image
                    style={[styles.fImage,{height:19,marginHorizontal:15}]}
                    source={require('./pics/Search.png')}>
                  </Image>
                </View>
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
            <ScrollView style={{marginHorizontal:20,marginTop:20,flexDirection:"column",width:325}}>
              <View style={{flex:2,flexDirection:"row",justifyContent:"center",backgroundColor:"#fff"}}>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
              </View>
              <View style={{flex:2,flexDirection:"row",justifyContent:"center",backgroundColor:"#fff"}}>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
              </View>
              <View style={{flex:2,flexDirection:"row",justifyContent:"center",backgroundColor:"#fff"}}>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
              </View>
              <View style={{flex:2,flexDirection:"row",justifyContent:"center",backgroundColor:"#fff"}}>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
              </View>
              <View style={{flex:2,flexDirection:"row",justifyContent:"center",backgroundColor:"#fff"}}>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
              </View>
              <View style={{flex:2,flexDirection:"row",justifyContent:"center",backgroundColor:"#fff"}}>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
                <View style={{flex:2,borderWidth:1,borderColor:"#ccc",paddingBottom:3}}>
                    <Image
                      style={{resizeMode:"stretch",height:38,width:111.5}}
                      source={require('./pics/im1.png')}>
                    </Image>
                    <Text style={[styles.htext,{color:"#555",fontSize:7,marginLeft:4,marginTop:4}]}>Cafe 5H by The Kitchen</Text>
                    <Text style={[styles.htext,{color:"#777",fontSize:5,marginLeft:4,marginTop:1}]}>Lowrence Road . Casual Dining</Text>
                    <View style={{alignSelf:"stretch",marginHorizontal:4,marginTop:1,justifyContent:'space-between',flexDirection:"row"}}>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>Open Now</Text>
                      <Text style={[styles.htext,{color:"#f57c00",fontSize:5}]}>3.8</Text>
                    </View>
                </View>
              </View>
            </ScrollView>
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
