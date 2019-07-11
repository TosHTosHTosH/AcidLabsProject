import React from 'react';
import {View} from 'react-native';
import Header from '../../Commons/Header';
import ClaimDetails from './ClaimDetails'

const ClaimOrders=()=>(
    <View>
    <Header HeaderText={'Claim'} nameIcon='md-arrow-back'/>
      <ClaimDetails/>
    </View>
      
      );
    

      
   

export default ClaimOrders;