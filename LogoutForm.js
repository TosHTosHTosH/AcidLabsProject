import React, { Component } from 'react';
import {

    View, Image, AsyncStorage, Text, Button
} from 'react-native';
import SmallSpinner from "../Acidlabs/Commons/SmallSpinner";
import CardsectionLogin from '../Acidlabs/Commons/CardsectionLogin';

import axios from 'axios';
import md5 from "react-native-md5";

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: '123456789',
            livreurID: '',
            LoggedIn: null,
            Loading:false
        };
    }

    onButtonPress() {

        this.setState({ error: '', Loading: true })
        this.logout()
    }




    logout() {

        const formData = new FormData()
        const { livreurID, token } = this.state;
        formData.append('livreurID', livreurID);
        formData.append('token', token);
        formData.append('signature', md5.hex_md5(livreurID + token + "&aAs6w@GVbW52!qo$lm"));

        axios.post('https://www.monresto.net/ws/v3/Delivery/logout.php', formData)
            .then(response => {
                if (response.data.Status == "1") {
                   
                    AsyncStorage.removeItem('livreurID')
                    this.setState({ Loading: false })
                    alert(this.state.livreurID+'there is none ')

                } else {
                    alert(response.data.Status)
                }

            });

    }






    renderButton() {
        if (this.state.Loading) {
            return <SmallSpinner size="small" />;
        }
        {
            return (
                <View style={{ width: 60 * 2, height: 60, marginLeft: 150 }}>
                    <Button

                        onPress={this.onButtonPress.bind(this)}
                        title='lOGOUT' />
                </View>

            );
        }
    }

    render() {
        return (

            <View>
                <CardsectionLogin>
                    <Image source={require('./moto.png')} />
                </CardsectionLogin>



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
export default LoginForm;