import React, { Component } from 'react';
import { View, Text, Image,Linking } from 'react-native';
import Card from '../../Commons/Card';
import CardSection from '../../Commons/CardSection'
import Button from '../../Commons/Button';

const CompletedDetails = ({ album }) => {
    const { title, artist, thumbnail_image,url } = album;
    const { header_Content_Style,
        thumbnail_Style,
        thumbnail_Container_Style,
        Header_Text_Container_Style,
        
    } = styles;

    return (

        <Card>

            <CardSection>

                <View style={thumbnail_Container_Style}>
                    <Image style={thumbnail_Style}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={header_Content_Style}>
                    <Text style={Header_Text_Container_Style}>{title}</Text>
                    <Text>{artist}</Text>
                </View>

            </CardSection>

<CardSection>
    <Button  onPressShow={()=>Linking.openURL(url)}>
   Show More information
    </Button>
</CardSection>

        </Card>

    );
};
const styles = {
    header_Content_Style: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnail_Style: {
        height: 50,
        width: 50,
    },
    thumbnail_Container_Style: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15
    },
    Header_Text_Container_Style: {
        fontSize: 18
    },
    CardSection_Image_Style:{
        height:300,
        flex:1,
        width:null
    }
}
export default CompletedDetails;