
import React from 'react';
import { ScrollView, AsyncStorage, Alert, Text,View  } from 'react-native';
import axios from 'axios';
import ProcessingDetailLinks from './ProcessingDetailLinks';
import OpenRestaurant from './OpenRestaurant';
import OpenClient from './OpenClient'
import md5 from "react-native-md5";
import Spinner from '../Commons/Spinner'


export default class ProcessingListsLinks extends React.Component {
  state = {
Details:{},
    DISHES: [],
    loading: false,
    error: false,
    orderID:''

  };
  
  async componentDidMount() {

    const myStateNumGet1 = await AsyncStorage.getItem('orderID')
      alert(myStateNumGet1+'THIS IS PROCESSESING LSITS LINKS')
     if (myStateNumGet1) {
       this.setState({ orderID: myStateNumGet1 });
     } else {
       this.setState({ orderID: '' });
     }


    const formData = new FormData()
    formData.append('orderID', this.state.orderID);
    formData.append('signature', md5.hex_md5(this.state.orderID+ '&aAs6w@GVbW52!qo$lm'));
    axios.post('https://www.monresto.net/ws/v3/Delivery/orderDetails.php', formData)
      .then(response => {
      
        if (response.data.Status == "1") 
        { this.setState({ DISHES: response.data.Order.Dishes , Details:response.data.Order, loading: true }) 
        alert((this.state.DISHES))
      }

        else {
          alert(JSON.stringify(response.data))
      
          this.setState({ error: true })
          
        }

      });

  }

  renderOrders() {
    
    return this.state.DISHES.map((item, key) => 
        <ProcessingDetailLinks key={key} item={item}  />
    );
  }

  
  renderOrders2() {
    
       return <OpenRestaurant  Details={this.state.Details} />
  }
   
  renderOrders3() {
    
    return <OpenClient  Details={this.state.Details} />
}

  render() {
    if (this.state.loading) {

      return (
<ScrollView>
  
<ScrollView>{this.renderOrders()}</ScrollView>

<View style={{flexDirection:'row'}}>

{this.renderOrders2()}
{this.renderOrders3()}

</View>

</ScrollView>

   

      );

    } else if (!this.state.loading) {
      return (<Spinner/>)
    } if (this.state.error) {
      return (<Text>Error</Text>)
    }
  }
}