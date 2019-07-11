import React,{Component} from 'react';
import { Text, TouchableOpacity ,View} from 'react-native';
import {withNavigation} from 'react-navigation';
import  Icon  from 'react-native-ionicons';

class ButtonMap extends Component{ 

    render(){
       
    return (
        <TouchableOpacity onPress={()=>this.props.navigation.navigate(this.props.page)} style={styles.ButtonStyle}>
<View style={{ flexDirection:'row'}}>
<Icon  style={{marginRight:5,marginTop:7,marginLeft:3}} name={this.props.name} size={25} color="gray" />

<Text style={styles.TextStyle}>
    {this.props.children}
</Text>
</View>
       
        </TouchableOpacity>
    );
}
};

   

const styles = {
    ButtonStyle: {
        width: 40*2,  
        height:40,
        alignItems: 'stretch',
        backgroundColor: '#fffaf0',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#228b22',
        marginLeft: 7,
        
        marginRight: 7
    },
    TextStyle: {
        alignSelf: 'center',
        color: '#808080',
        fontSize: 11,
        fontWeight: '600',
        paddingTop: 11,
        paddingBottom: 11
    }
}
export default withNavigation(ButtonMap);