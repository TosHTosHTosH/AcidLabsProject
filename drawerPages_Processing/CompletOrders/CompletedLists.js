
import React from 'react';
import {ScrollView  } from 'react-native';
import axios from 'axios';
import CompletedDetails from './CompletedDetails';


 export default class CompletedLists extends React.Component {
   state={Albums:[]};

   componentWillMount(){
axios.get('https://rallycoding.herokuapp.com/api/music_albums')
.then(response=>this.setState({Albums:response.data}));}

renderAlbums(){
  return this.state.Albums.map(album=>
  <CompletedDetails key={album.title} album={album}/>
  );
}
  render() {
    console.log(this.state);
      return (

        <ScrollView>
        {this.renderAlbums()}
        </ScrollView>
      );}}