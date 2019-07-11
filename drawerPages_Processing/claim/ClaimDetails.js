import React, { Component } from 'react';
import { View, Text, Image,Linking ,TouchableOpacity,CheckBox,Button} from 'react-native';
import Card from '../../Commons/Card';
import Cardsectionmap from '../../Commons/Cardsectionmap'

export default class ClaimDetails extends Component {
    constructor(props) {
        super(props);
       this.state={
           check:false,
           check1:false,
           check2:false,
           
               food:0,
               Uber:0,
               tek:0,
           
       }
    }
    
   
    checkBoxTest(){
        this.setState({
            check:!this.state.check
           
        })
        if (!this.state.check) 
        this.setState({
            food:1
           
        }); 
            //{alert('Delivery food')}
        else {
            this.setState({
                food:0
               
            }); 
        }
    }

    check1BoxTest(){
        this.setState({
            check1:!this.state.check1
        })
        if (!this.state.check1) 
            
        {
            this.setState({
                Uber:1
               
            });
         }
    else {
        this.setState({
            Uber:0
           
        });
    }
    }
    check2BoxTest(){
        this.setState({
            check2:!this.state.check2
        })
        if (!this.state.check2) 
            
        {this.setState({
            tek:1
           
        }); }
    else {
        this.setState({
            tek:0
           
        });
    }
    }
    render(){
        return (
            <Card>
             
             <View style={{ justifyContent: "center",
                          alignItems: "center",flexDirection:'column',marginTop:20,marginRight:50}}>
            
                          <View style={{marginRight:180}}>
                          <Cardsectionmap>
                          <Text style={{color:'#808080'}}>Claim</Text>
                          </Cardsectionmap>
                          <Cardsectionmap>
                          <View >
               <View style={{flexDirection:'row'}}>
               <CheckBox value={this.state.check} onChange={()=>this.checkBoxTest()}  />
               <Text>Client Not Found</Text>
               </View>
               <View style={{flexDirection:'row'}}>
               <CheckBox value={this.state.check1} onChange={()=>this.check1BoxTest()}/>
               <Text>Wrong Adresses </Text>
               </View>
               <View style={{flexDirection:'row'}}>
               <CheckBox value={this.state.check2} onChange={()=>this.check2BoxTest()}/>
               <Text>Problems with The Prices</Text>
               </View>
               <View style={{flexDirection:'row'}}>
               <CheckBox value={this.state.check} onChange={()=>this.checkBoxTest()}  />
               <Text>Delay</Text>
               </View>
               <View style={{flexDirection:'row'}}>
               <CheckBox value={this.state.check1} onChange={()=>this.check1BoxTest()}/>
               <Text>Vehicule Problems</Text>
               </View>
               
               
               
            </View>
                          </Cardsectionmap>
                          </View>
            
            </View>
            </Card>
            
                   
            
                        
                   
            
                );
    }
};
    

   
