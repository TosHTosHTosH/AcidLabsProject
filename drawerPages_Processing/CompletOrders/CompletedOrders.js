import React from 'react';
import {View} from 'react-native';
import Header from '../../Commons/Header';
import CompletedLists from './CompletedLists'

const CompletedOrders=()=>(
    <View>
    <Header HeaderText={'Completed Orders'} />
      <CompletedLists/>
    </View>
      
      );
    

      
   

export default CompletedOrders;