import React from 'react';
import {ActivityIndicator,View} from 'react-native';

const Spinner =({size})=>{
    return (
        <View style={styles.spinnerStyle}>
        <ActivityIndicator size= {size||'large'}/>
        </View>
    );
};
const styles={
    spinnerStyle:{
        flex:1,
       
        alignContent: 'center',
        marginTop:20,
        
    }
};
export default Spinner;