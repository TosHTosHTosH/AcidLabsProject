import React,{Component} from 'react';
import {View,TouchableOpacity,Platform,Linking,Text} from 'react-native';

import Card from '../Commons/Card';
import CardSection from '../Commons/CardSection';



export default class OpenClient extends Component{

  constructor(props) {
    super(props);
    this.state = {
        
       Details:this.props.Details
        

    };
}


    render(){
        
        order=()=>{  
            const latitude = this.state.Details.Client.latitude;
          const longitude = this.state.Details.Client.latitude;
          const label =this.state.Details.Client.adresse;
            const url = Platform.select({
              ios: "maps:" + latitude + "," + longitude + "?q=" + label,
              android: "geo:" + latitude + "," + longitude + "?q=" + label
            });
            
            Linking.canOpenURL(url).then(supported => {
              if (supported) {
                return Linking.openURL(url);
              } else {
                browser_url =
                  "https://www.google.de/maps/@" +
                  latitude +
                  "," +
                  longitude +
                  "?q=" +
                  label;
                return Linking.openURL(browser_url);
              }
              
            });
          }
       

        return(

           

              <Card>
        <CardSection>
        <TouchableOpacity  style={{color:'green'}}onPress={()=>order()}>
      <Text> Go to your Client </Text>
    </TouchableOpacity>
  
        </CardSection>
      </Card>
           
        );
    }
}
   
      
      
    

