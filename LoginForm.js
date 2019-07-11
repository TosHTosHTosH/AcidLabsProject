import React, { Component } from 'react';
import {
  
    View, Image, AsyncStorage,Text,Button
} from 'react-native';
import SmallSpinner from "../Acidlabs/Commons/SmallSpinner";
import CardsectionLogin from '../Acidlabs/Commons/CardsectionLogin';

import { TextField } from 'react-native-material-textfield';
import {withNavigation} from 'react-navigation'
import md5 from "react-native-md5";
import OTP from 'otp-client'

class LoginForm extends Component {
    constructor(props){
        super(props)
    this.state = {
        userUsername: '',
        userPassword: '',
        error: '',
      token:'123456789',
        Loading: false
    };
    }

    onButtonPress() {
      if ((this.state.userUsername==='')&&(this.state.userPassword==='')){
        alert('empty user Name or password ')
      }else if(this.state.userUsername===''){
        alert('empty user Name  ')
      } else if(this.state.userPassword===''){
        alert('empty password  ')
      }else {
        this.login()
      
      }
}


persistData(user){
    AsyncStorage.setItem('livreurID',user.livreurID)
    AsyncStorage.setItem('userUsername',user.userUsername)
    AsyncStorage.setItem('userPassword',user.userPassword)
   
}

login(){
    const formData = new FormData()
    const {userUsername,userPassword,token}=this.state
        
    formData.append('login', userUsername);
    formData.append('password', userPassword);
    formData.append('signature', md5.hex_md5(userUsername + userPassword + token +"&aAs6w@GVbW52!qo$lm"));
    formData.append('token',token);

    fetch('https://www.monresto.net/ws/v3/Delivery/login.php', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'multipart/form-data'

        },
        body: formData


    })
        .then((response) => response.json())
        .then((responseJson) => {
            if ( responseJson.Status=="1" ){
                this.setState({ Loading: false ,error:''})
            this.persistData({
                livreurID:responseJson.livreurID,
                userUsername:this.state.userUsername,
                userPassword:this.state.userPassword
            })
            
                // alert('the Status is : '+responseJson.Status);
                 //alert('this si happening in login form compoennt')
                
                this.props.navigation.navigate("ProcessingOrders");
            } else 
            {this.setState({ error:'Wrong information ',Loading:true})
                  

            }
            
        })
        .catch((error)=>{
            alert(error);
        });


       
}






renderButton() {
    if (this.state.Loading) {
        return <SmallSpinner />;
    }
    {
        return (
            <View style={{width:60*2,height:60,marginLeft:150}}>
            <Button 
            
            onPress={this.onButtonPress.bind(this)}
            title='LOGIN'/>
               </View>
     
        );
    }
}

render(){
    return(

<View>
    <CardsectionLogin>
        <Image source={require('./moto.png')} />
    </CardsectionLogin>



    <View style={{ marginLeft: 30, marginRight: 30 }}>
        <TextField
            label='Username'

            value={this.state.userUsername}
            onChangeText={userUsername => this.setState({ userUsername })}
        />

        <TextField
            label='Password'
            //secureTextEntry={true}
            value={this.state.userPassword}
            onChangeText={userPassword => this.setState({ userPassword })}
        />
    </View>
    <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                {this.renderButton()}
                

</View>



    );
}
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}
export default withNavigation(LoginForm);