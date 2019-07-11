import React from 'react';
import {View} from 'react-native';

const Cardsectionmap =(props)=>{
    return (
        <View style={styles.containerStyle}>
      {props.children}
        </View>
    );
};
const styles ={
    containerStyle:{
  // borderBottomWidth:1,
   padding: 5,
   backgroundColor:'#fff',
  // marginLeft: 10,marginRight: 10,
   //justifyContent:'flex-start',
   flexDirection:'row',
   //borderColor:'#ddd',
   position:'relative',
   marginTop: 10,
   
    }
}
export default Cardsectionmap;
