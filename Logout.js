import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View, TouchableOpacity, TextInput, Button, Keyboard, Image,Alert,AsyncStorage
} from 'react-native';
import CardsectionLogin from '../Acidlabs/Commons/CardsectionLogin';


import LogoutForm from '../Acidlabs/LogoutForm'
import Spinner from '../Acidlabs/Commons/Spinner'

export default class Logout extends Component {

	
constructor(props){
	super(props)
	this.state={
		token:'123456789',
		livreurID:'',
		LoggedIn: null
	}
}

async componentDidMount() {
	const myStateNumGet = await AsyncStorage.getItem('livreurID')
	//alert(myStateNumGet)
   if (myStateNumGet) {
	 this.setState({ livreurID: myStateNumGet,LoggedIn:true });
   } else {
	 this.setState({ livreurID:'',LoggedIn: false });
   }}

renderContent() {

	switch (this.state.LoggedIn){
   case true : 
   return <LogoutForm/>;

case false :
return 	<Login/>
default :
return <Spinner size ="large"/>;        
	}
}


	render() {
		return (


	<View>
{  this.renderContent() }

	</View>	
   
  
   );
	}
}




