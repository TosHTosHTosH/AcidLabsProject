import React from 'react';
import {View,Text,TextInput} from 'react-native';

const Input=({Label,value,onChangeText,placeholder,secureTextEntry})=> {
    const {InputStyle,LabelStyle,ContainerStyle}=styles;
    return (
<View style={ContainerStyle}>
    <Text style={LabelStyle}>{Label} </Text>
    <TextInput
    secureTextEntry={secureTextEntry}
    placeholder={placeholder}
    autoCorrect={false}
    style={InputStyle}
    onChangeText={onChangeText}
    value={value}
    
    />
</View>
    );
};
const styles={
    InputStyle:{
        color:'#000',
        paddingLeft:5,
        paddingRight:5,
        fontSize:18,
        lineHeight:23,
        flex:2,
        width:100,
        height:35
    },
    LabelStyle:{
        fontSize:18,
        paddingLeft:20,
        flex:1
    },
    ContainerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        align:'center'
    }
}
export default Input;