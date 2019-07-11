import React from 'react';
import {View} from 'react-native';
import Header from '../Commons/Header';
import ProcessingLists from './ProcessingLists'

const ProcessingOrders=()=>(
    <View>
    <Header HeaderText={'Orders'} nameIcon='md-menu'/>
      <ProcessingLists />

    </View>
      
      );
    

      
   

export default ProcessingOrders;