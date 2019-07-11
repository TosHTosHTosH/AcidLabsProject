import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View, TouchableOpacity, TextInput, Button, AsyncStorage, Keyboard, Image, Alert,
} from 'react-native';
import LoginForm from './LoginForm'
import Spinner from '../Acidlabs/Commons/Spinner'
import md5 from "react-native-md5";
import OTP from 'otp-client'

class login extends Component {

	constructor(props) {

		super(props)

		this.state = {
			userUsername: '',
			userPassword: '',
			LoggedIn: null,
			livreurID: '',
			token:'123456789',
			timeStamp: ''

		}


	}

	async componentWillMount() {
		const livreurID = await AsyncStorage.getItem('livreurID')

		

		if (livreurID) {
			this.setState({

				livreurID: livreurID,
			
				LoggedIn: true

			});

		} else {
			this.setState({ livreurID: '', LoggedIn: false });
		}
	}

	login  ()  {

		const formData = new FormData()
		const {userUsername,userPassword,token}=this.state


		formData.append('login', userUsername);
		formData.append('password', userPassword);
		formData.append('signature', md5.hex_md5(userUsername + userPassword + token + "&aAs6w@GVbW52!qo$lm"));
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
				if (responseJson.Status == "1") {

                    //alert(this.state.token)
					//alert('status is  : ' + responseJson.Status);
					//alert('this is happening in login  compoennt')
					this.setState({ error: '',LoggedIn:true })
					this.props.navigation.navigate("ProcessingOrders");
				} else {
					this.setState({ error: 'Authentication failed' })


				}

			})
			.catch((error) => {
				alert(error);
			});
	}



	renderContent() {

		switch (this.state.LoggedIn) {
			case true:

				this.login()

			case false:
				return <LoginForm />;
			default:
				return <Spinner/>;
		}
	}




	render() {
		return (
			<View>

				{this.renderContent()}
			</View>
		);
	}

}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},

});

export default login;