import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  },
  menuContainer:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor:'rgba(0,0,0,0)'
  },
  menuTop:{
    top:0
  },
  menuHead:{
    height:50,
    backgroundColor:"#f57c00",
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:"center",
    alignContent:'space-between'
  },
  htext:{fontSize:10,color:"#fff"},
  mImage:{height:19,marginHorizontal:3},
  badge:{borderRadius:15,backgroundColor:"#fff",width:12.5,height:12.5,justifyContent: 'center',alignItems: 'flex-start',marginLeft:-8},
  menuBottom:{}
});