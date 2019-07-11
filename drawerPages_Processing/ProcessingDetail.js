import React, { Component } from 'react';
import { View, Text, Image,Linking ,TouchableOpacity,ScrollView,AsyncStorage,Alert} from 'react-native';
import Card from '../Commons/Card';
import CardSection from '../Commons/CardSection'
import axios from 'axios';



import md5 from "react-native-md5";

import  Icon  from 'react-native-ionicons';
import {withNavigation} from 'react-navigation';
import SmallSpinner from '../Commons/SmallSpinner';

class ProcessingDetail  extends Component {
state={
  order:this.props.order,
  livreurID:this.props.livreurID,
  orderID:this.props.orderID,
  Status:{},
  Loading:false

}

AcceptOrder()
{
this.setState({Loading:true})

  const {deliveryWishedTime,status,restoName,clientLastName,clientFirstName,restoImagePath} = this.state.order;
  const {orderID}=this.state.orderID
  const formData= new FormData()
  formData.append('livreurID', this.state.livreurID);
  formData.append('orderID', this.state.orderID);
  formData.append('signature', md5.hex_md5(this.state.livreurID+this.state.orderID+'&aAs6w@GVbW52!qo$lm'));
  axios.post('https://www.monresto.net/ws/v3/Delivery/acceptOrder.php',formData)
    .then(response=>{
      {   if ((response.data.Status=="1"))
      
       {this.setState({Loading:false})
       this.props.navigation.navigate('Home',
       {orderID:orderID,
        restoName:restoName,
        deliveryWishedTime:deliveryWishedTime,
        status:status,
        clientLastName:clientLastName,
        clientFirstName:clientFirstName,
        restoImagePath:restoImagePath


      
      }
        
    )}
     
      else{
       this.setState({ error:true})
      }
 
        
       // alert(this.state.Status)
      }
      
    
     } );
 
      
 
  


}
  render(){
   
    const {orderID, deliveryWishedTime,status,restoName,clientLastName,clientFirstName,restoImagePath} = this.state.order;
if(this.state.Loading)
{
  return(
    <SmallSpinner/>
  );
}
  return (
    <ScrollView>
        <Card>
<CardSection>
         
         <View style={{flexDirection: 'row', marginLeft: 5,marginRight: 5}}>
         <Text style={{color: '#dcdcdc'}}>
       ID:  
       
       </Text>
       
     <View style={{flex: 1,flexDirection: 'column',justifyContent: 'space-between'}}>

      
       <Text>
       {orderID}
       </Text>
     </View>
     <Icon  name="md-time" size={22} color="green" />
       <Text>Today - {deliveryWishedTime}</Text>
     
   </View>
    </CardSection>

    <CardSection>
          
    <View style={{flexDirection: 'row', marginLeft: 5,marginRight: 5}}>
     <View style={{flex: 1,flexDirection: 'column',justifyContent: 'space-between'}}>

       
       <Text>The restaurant : {restoName}</Text>
     </View>
     
    
     <Text style={styles.rectangle}>{status}</Text> 

   </View>
    </CardSection>

     <CardSection>
<TouchableOpacity  onPress={this.AcceptOrder.bind(this)} style={styles.ButtonStyle}>

 <Text style={styles.TextStyle}>Accept</Text>
 </TouchableOpacity>

   </CardSection>

</Card>
    
    </ScrollView>


    

 );
}}
  


const styles = {
    rectangle: {
        width: 50 * 2,
        height: 50,
       backgroundColor: 'orange'
    },
    thumbnail_Container_Style_right:{
        justifyContent:'right',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
            },
    header_Content_Style: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
  
    thumbnail_Container_Style: {
        
        justifyContent: 'flex-end',
        alignItems: 'center',
        
       
        marginLeft: 10,
        marginRight: 10
    },
    
    Header_Text_Container_Style: {
        textAlign: 'right',
        fontSize: 18
    },
   
    CardSection_Image_Style:{
        height:300,
        flex:1,
        width:null
    },
    ButtonStyle: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 10,
        
        marginRight: 10
    },
    TextStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 11,
        paddingBottom: 11
    },
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
  },
}
export default withNavigation(ProcessingDetail);