import React from 'react';
import {View} from 'react-native';


const CardSection =(props)=>{
    return (
        
        <View style={styles.containerStyle}>
          
            {props.children}
        
      
        </View>
    );
};
const styles ={
    containerStyle:{
   //borderBottomWidth:1,
   padding: 5,
   //borderRadius:30,
   //backgroundColor:'#fff',
   marginLeft: 10,marginRight: 10,
   //justifyContent:'flex-start',
  // flexDirection:'row',
   //borderColor:'#fff',
   //position:'relative',
  
   
    }
}
export default CardSection;
