import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet,TouchableOpacity ,Platform ,Linking,Button,Alert,Image} from 'react-native';
import CardSection from '../Commons/CardSection';
import Card from '../Commons/Card'

export default class HomeScreen extends Component{

	constructor(props) {
		
		super(props)
  this.state={
    orderID:this.props.orderID,
    restoName:this.props.restoName,
    deliveryWishedTime:this.props.deliveryWishedTime,
    clientLastName:this.props.clientLastName,
    clientFirstName:this.props.clientFirstName,
    restoImagePath:this.props.restoImagePath,

  }}

	render(){
const orderID=this.state.orderID;
const restoName=this.state.restoName;
const deliveryWishedTime=this.state.deliveryWishedTime;
const clientFirstName=this.state.clientFirstName;
const clientLastName=this.state.clientLastName;
const restoImagePath=this.state.restoImagePath;



		return(
	  <View style={styles.container}>	
	  
    <View style={{justifyItem:'center'}}>
          <Image
       style={styles.rectangle}
         
          source={{uri: restoImagePath}}
        />
       </View>

       <Text style={styles.pageName}> Your order ID is : {orderID}</Text>

       <Text style={styles.pageName}> The restaurant Name  is : {restoName}</Text>
       
      
       
       <Text style={styles.pageName}> You have until    : (({deliveryWishedTime}))  to Deliver This order </Text>
     

     <Card>
       <CardSection>
       <Text style={styles.pageName}>the Client Last Name  : {clientLastName}</Text>

       <Text style={styles.pageName}> Client First Name  : {clientFirstName}</Text>
       
       
       </CardSection>
     </Card>
     <TouchableOpacity onPress={()=>this.props.navigation.navigate('Links')} >
       <Text>
       The Order Information
       </Text>
   </TouchableOpacity>
      </View>
	  
		);
	}
}
const styles = StyleSheet.create({
	container:{
		display:'flex',alignItems:'center',
		justifyContent:'center'
	},

	pageName:{
		margin:10,fontWeight:'bold',
		color:'#000', textAlign:'center'
  },
  rectangle: {
    width: 100 * 2,
    height: 100,
   //backgroundColor: 'orange'
},
	
});