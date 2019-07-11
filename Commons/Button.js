import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPressShow, children }) => {
    return (
        <TouchableOpacity onPress={onPressShow} style={styles.ButtonStyle}>
            <Text style={styles.TextStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};
const styles = {
    ButtonStyle: {
        width: 200,  
    
        alignItems: 'stretch',
        backgroundColor: '#3cb371',
        borderRadius: 5,
        borderWidth: 1,
        //borderColor: '#007aff',
        marginLeft: 57,
        
        marginRight: 10
    },
    TextStyle: {
        alignSelf: 'center',
        color: '#f5fffa',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 11,
        paddingBottom: 11
    }
}



export default Button;