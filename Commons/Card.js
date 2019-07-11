import React from 'react';
import {View,TouchableOpacity}  from 'react-native';


const Card =(props)=>{
    return (
        <View style={styles.containerStyle}>
            <TouchableOpacity>
            {props.children}
            </TouchableOpacity>
     
        </View>
    );
};
const styles ={
    containerStyle:{
        marginLeft: 20,marginRight: 20,
    borderRadius:15,
    //borderColor:'#fff',
    //borderWidth:2,
    shadowColor:'#dcdc',
    color:'#dcdc',
    backgroundColor:'#fff',
    elevation:3,

    marginTop:15,
    marginBottom:15
    }
}
export default Card;
