import React ,{Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'


export default class SettingsScreen extends Component {
render(){
    return (
        <View>
            
 <Text>Heeloo  maa7aa </Text>

          
        </View>
    );
}
}
const styles = {
    ButtonStyle: {
      width: 200,  
      //flex: 1,
      alignItems: 'stretch',
      backgroundColor: '#3cb371',
      borderRadius: 5,
      borderWidth: 1,
      //borderColor: '#007aff',
      marginLeft: 20,
      marginBottom:50,
      marginRight: 10
  },
  TextStyle: {
      alignSelf: 'center',
      color: '#f5fffa',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 11,
      paddingBottom: 11
  },
}