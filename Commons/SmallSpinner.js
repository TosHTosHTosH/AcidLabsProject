import React from 'react';
import {ActivityIndicator,View} from 'react-native';

const SmallSpinner =({size})=>{
    return (
        <View style={styles.SmallSpinnerStyle}>
        <ActivityIndicator size= {size||'large'}/>
        </View>
    );
};
const styles={
    SmallSpinnerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
};
export default SmallSpinner;