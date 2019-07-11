import React from 'react';
import {View} from 'react-native';

const CardsectionLogin =(props)=>{
    return (
        <View style={styles.containerStyle}>
      {props.children}
        </View>
    );
};
const styles ={
    containerStyle:{
   //borderWidth:1,
   padding: 5,
   backgroundColor:'#fff',
   //marginLeft: 10,marginRight: 10,
   justifyContent:'center',
  flexDirection:'row',
  // borderColor:'#ddd',
   position:'relative',
   marginTop: 10,
   
    }
}
export default CardsectionLogin;
