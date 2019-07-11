import React from 'react';
import {  Text, View, Image , Button ,StyleSheet , FlatList,TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import ProcessingOrders from './ProcessingOrders';

import Completed from './Completed';





export default class Main extends React.Component {
  state={
    num:1,
    time:'13:00',
    Type:'Uber',
    Fournisseur:'citySport'
  }
  
 render() {
     return (
      <Swiper style={styles.wrapper} showsButtons={true}>

        <View style={styles.slide1}>
         <ProcessingDirection/>
        </View>

        <View style={styles.slide2}>
          <Completed/>
        </View>

        <View style={styles.slide3}>
        <ProcessingOrders/>
            </View>
    
       
        
      </Swiper>
     );
  
 }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0b0b0c',
  },
  slide2: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0b0b0c',
  },
  slide3: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0b0b0c',
  },
  text: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    marginTop: 20,
    flex: 1,
    
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#ffffff',
    marginRight:40,
    marginLeft:40,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
  },  
  loginScreenButton:{
    marginRight:40,
    marginLeft:40,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1db999',
    borderRadius:10,
    borderWidth: 1,
    
  },
  loginText:{
      color:'#ffffff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  }
})