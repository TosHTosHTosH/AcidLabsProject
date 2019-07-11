import React,{Component} from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation';

class ButtonNavigation extends Component{ 

    render(){
       
    return (
        <TouchableOpacity onPress={()=>this.props.navigation.navigate(this.props.page )}  style={styles.ButtonStyle}>
            <Text style={styles.TextStyle}>
                {this.props.children}
            </Text>
         
        </TouchableOpacity>
            
    );
}
};

   

const styles = {
    ButtonStyle: {
        width: 200,  
        flex: 1,
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
export default withNavigation(ButtonNavigation);
