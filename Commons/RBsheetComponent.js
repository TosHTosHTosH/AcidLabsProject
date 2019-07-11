import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  AsyncStorage
} from 'react-native'
import axios from 'axios';
import md5 from "react-native-md5";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      
      disable:false,
      disable1:true,
      disable2:true,
      disable3:true,
      livreurID:'',
      orderID:'',
      status:this.props.status
    }
  }

  async componentWillMount() {
    const myStateNumGet = await AsyncStorage.getItem('livreurID')
    
    // alert(myStateNumGet)
    if (myStateNumGet) {
      this.setState({ livreurID: myStateNumGet });
    } else {
      this.setState({ livreurID: false });
    }
  }
  async componentDidMount() {
  
   const myStateNumGet1 = await AsyncStorage.getItem('orderID')
    // alert(myStateNumGet1)
    if (myStateNumGet1) {
      this.setState({ orderID: myStateNumGet1 });
    } else {
      this.setState({ orderID: false });
    }
  }
  onPress = () => {
    const status=this.state.status;
    const formData= new FormData()
    formData.append('livreurID', this.state.livreurID);
    formData.append('orderID', this.state.orderID);
    formData.append('longitude','10.165394' );
    formData.append('latitude', '36.846851');
    formData.append('signature', md5.hex_md5(this.state.livreurID+this.state.orderID+'10.165394'+'36.846851'+'&aAs6w@GVbW52!qo$lm'));
    axios.post('https://www.monresto.net/ws/v3/Delivery/arrivedResto.php',formData)
      .then(response=> {  

        //alert(JSON.stringify(response.data))
        if (response.data.Status=="1")
        
       {    
        this.setState({disable : true,disable1 : false})
        alert(JSON.stringify(status))
      }
      else{
        this.setState({ error:true})
      }
      
      });
    

  }

  onPress1 = () => {
    const formData= new FormData()
    formData.append('livreurID', this.state.livreurID);
    formData.append('orderID', this.state.orderID);
    formData.append('longitude','10.165394' );
    formData.append('latitude', '36.846851');
    formData.append('signature', md5.hex_md5(this.state.livreurID+this.state.orderID+'10.165394'+'36.846851'+'&aAs6w@GVbW52!qo$lm'));
    axios.post('https://www.monresto.net/ws/v3/Delivery/pickupResto.php',formData)
      .then(response=> {  

        //alert(JSON.stringify(response.data))
        if (response.data.Status=="1")
        
       {    
        this.setState({disable1 : true,disable2 : false})
        alert(response.data.Status+'    is your status so this went well ')
      }
      else{
        this.setState({ error:true})
      }
      
      });
    

    

  }


  onPress2 = () => {
    const formData= new FormData()
    formData.append('livreurID', this.state.livreurID);
    formData.append('orderID', this.state.orderID);
    formData.append('longitude','10.165394' );
    formData.append('latitude', '36.846851');
    formData.append('signature', md5.hex_md5(this.state.livreurID+this.state.orderID+'10.165394'+'36.846851'+'&aAs6w@GVbW52!qo$lm'));
    axios.post('https://www.monresto.net/ws/v3/Delivery/arrivedClient.php',formData)
      .then(response=> {  

        //alert(JSON.stringify(response.data))
        if (response.data.Status=="1")
        
       {    
        this.setState({disable2 : true,disable3 : false})
        alert(response.data.Status+'    is your status so this went well ')
      }
      else{
        this.setState({ error:true})
      }
      
      });
    

   

  }


  onPress3 = () => {
    const formData= new FormData()
    formData.append('livreurID', this.state.livreurID);
    formData.append('orderID', this.state.orderID);
    formData.append('longitude','10.165394' );
    formData.append('latitude', '36.846851');
    formData.append('signature', md5.hex_md5(this.state.livreurID+this.state.orderID+'10.165394'+'36.846851'+'&aAs6w@GVbW52!qo$lm'));
    axios.post('https://www.monresto.net/ws/v3/Delivery/arrivedClient.php',formData)
      .then(response=> {  

        //alert(JSON.stringify(response.data))
        if (response.data.Status=="1")
        
       {    
        this.setState({disable3 : true})
      
        alert(response.data.Status+'    is your status so this went well you finished your order with success')
      }
      else{
        this.setState({ error:true})
      }
      
      });
    

  }

 render() {
   return (
     <View>
       <View style={styles.container}>
       <TouchableOpacity style={this.state.disable?styles.button:styles.button2} onPress={this.onPress} disabled={this.state.disable}>
         <Text> arriveé resto</Text>
       </TouchableOpacity>
       


       
    
      </View>
          <View style={styles.container}>
          <TouchableOpacity style={this.state.disable1?styles.button:styles.button2} onPress={this.onPress1} disabled={this.state.disable1}>
            <Text> pick up resto </Text>
          </TouchableOpacity>
          
   
   
          
       
         </View>
             <View style={styles.container}>
             <TouchableOpacity style={this.state.disable2?styles.button:styles.button2} onPress={this.onPress2} disabled={this.state.disable2}>
               <Text> arrived client </Text>
             </TouchableOpacity>
             
      
      
             
          
            </View>
                <View style={styles.container}>
                <TouchableOpacity style={this.state.disable3?styles.button:styles.button2} onPress={this.onPress3} disabled={this.state.disable3}>
                  <Text> pick up client </Text>
                </TouchableOpacity>
                
         
         
                
             
               </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#8fd3ed',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})
export default App;