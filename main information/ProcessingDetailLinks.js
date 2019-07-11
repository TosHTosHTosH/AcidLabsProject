import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform, Linking ,Image,ScrollView} from 'react-native';

import Communications from 'react-native-communications';
import CardSection from '../Commons/CardSection';
import Card from '../Commons/Card'




export default class ProcessingDetailLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
        
        };
    }

    render() {
        const {title,ingredient,price,quantity,imagePath} = this.state.item

     


        return (
            <ScrollView>
                <Card>
                    <CardSection>

                        <Text style={{ fontWeight: 'bold', marginTop: 5, marginLeft: 15, marginTop: 15 }}>title Diche : {title} </Text>
                        <Text style={{ fontWeight: 'bold', marginTop: 5, marginLeft: 15, marginTop: 15 }}>ingredient Diche : {ingredient} </Text>
                        <Text style={{ fontWeight: 'bold', marginTop: 5, marginLeft: 15, marginTop: 15 }}>price per Diche  : {price} </Text>
                        <Text style={{ fontWeight: 'bold', marginTop: 5, marginLeft: 15, marginTop: 15 }}>quantity  : {quantity} </Text>
                        <Image style={styles.rectangle} source={{uri:imagePath}}/>
                     

                    </CardSection>
                </Card>
            </ScrollView>
            
                

            );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    rectangle: {
        width: 50 * 2,
        height: 50,
       //backgroundColor: 'orange'
    },
});
