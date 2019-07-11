import React,{Component} from 'react';
import {View} from 'react-native';
import Header from '../Commons/Header';
import {withNavigation} from 'react-navigation';
import HomeScreen from './HomeScreen';



 class ProcessingHome extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
        
     orderID : this.props.navigation.getParam('orderID'),
       restoName : this.props.navigation.getParam('restoName'),
       deliveryWishedTime : this.props.navigation.getParam('deliveryWishedTime'),
       clientLastName : this.props.navigation.getParam('clientLastName'),
      clientFirstName : this.props.navigation.getParam('clientFirstName'),
      restoImagePath : this.props.navigation.getParam('restoImagePath'),
      status : this.props.navigation.getParam('status')

    };
}

    render(){

        return(

<View>
    <Header HeaderText={' Restaurant Details'}  RightIcon='md-notifications' status={this.state.status}/>
      <HomeScreen orderID={this.state.orderID} restoName={this.state.restoName} deliveryWishedTime={this.state.deliveryWishedTime} clientLastName={this.state.clientLastName} clientFirstName={this.state.clientFirstName} restoImagePath={this.state.restoImagePath} />

    </View>
        );
    }
}

ProcessingHome.navigationOptions = {
    
    //title:'aaa',
    header: null,
  };
    
    export default withNavigation(ProcessingHome);
      
     
    

   