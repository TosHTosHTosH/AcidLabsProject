import React,{Component} from 'react';
import {View,TouchableOpacity,Platform,Linking,Text} from 'react-native';
import Header from '../Commons/Header';
import Card from '../Commons/Card';
import CardSection from '../Commons/CardSection';
import ProcessingListsLinks from './ProcessingListsLinks';

export default class ProcessingOrdersLinks extends Component{



    render(){
        
     
       

        return(

            <View>
            <Header HeaderText={'Orders Details'} RightIcon='md-notifications'/>
              <ProcessingListsLinks   />
              
      
            </View>
        );
    }
}
   
      
      
    

ProcessingOrdersLinks.navigationOptions = {
    
    //title:'aaa',
    header: null,
  };