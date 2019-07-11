
import React from 'react';
import { ScrollView,AsyncStorage,Alert,Text } from 'react-native';
import axios from 'axios';
import ProcessingDetail from './ProcessingDetail';

import md5 from "react-native-md5";
import SmallSpinner from '../Commons/SmallSpinner';
import OneSignal from 'react-native-onesignal'; 
import Spinner from '../Commons/Spinner';
export default class ProcessingLists extends React.Component {

  constructor(props){
super(props)

  this.state = { 
      orders: [] ,
      orders2 :'',
      loading:false,
    error:false,
   livreurID:''
    };
  }
  
  async persistData(orderID){
	await	AsyncStorage.setItem('orderID',orderID)
  }
  

  async componentDidMount() {
    const myStateNumGet = await AsyncStorage.getItem('livreurID')
    //alert(myStateNumGet)
   if (myStateNumGet) {
     this.setState({ livreurID: myStateNumGet });
   } else {
     this.setState({ error: true });
   }
    const formData= new FormData()
    formData.append('livreurID',this.state.livreurID);
    formData.append('signature', md5.hex_md5(this.state.livreurID+'&aAs6w@GVbW52!qo$lm'));
    axios.post('https://www.monresto.net/ws/v3/Delivery/orders.php',formData)
      .then(response => {  

        //alert(JSON.stringify(response.data))
        if ((response.data.Status=="1") &&(response.data.Orders.length>0))
       {    
        this.setState({ orders: response.data.Orders,loading:false})
     //alert((this.state.orders2))
       // this.persistData(this.state.orders2) 
     
      }
      
    
      else if ((response.data.Status=="1") &&(response.data.Orders.length<0)){
        alert('there is no Orders')
       
      }
      else {
        this.setState({ error:true})
      }
      });
        
  }

  renderOrders() {
    return this.state.orders.map((order,key) =>
      <ProcessingDetail key={key} order={order} livreurID={this.state.livreurID} orderID={this.state.orders2}/>
      
    );
  }
  render() {
  if (this.state.loading) {

    return (

      <ScrollView> 
      {this.renderOrders()}
      </ScrollView>
       
     
    );

  }
  else if (!this.state.loading) {
    return(<Spinner/>)
  } if (this.state.error){
return (<Text>Error</Text>)
  }
  }
}