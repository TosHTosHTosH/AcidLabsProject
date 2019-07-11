import React from 'react';
import {View} from 'react-native';

const Cardmap =(props)=>{
    return (
        <View style={styles.containerStyle}>
      {props.children}
        </View>
    );
};
const styles ={
    containerStyle:{
        marginLeft: 5,marginRight: 5,
    //borderRadius:13,
    borderColor:'#ddd',
    borderBottomWidth:0,
    //shadowColor:'#000',
    
   
    elevation:1,
   
    
    }
}
export default Cardmap;
