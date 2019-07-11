import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { DrawerActions,withNavigation } from 'react-navigation';
import  Icon  from 'react-native-ionicons';
import RBSheet from "react-native-raw-bottom-sheet";
import RBsheetComponent from '../Commons/RBsheetComponent'
class Header extends Component{

  constructor(props){
    super(props)
    this.state={
      status:this.props.status
    }
  }
    render(){
        return (
            <View style={styles.ViewStyle}>
            <TouchableOpacity  onPress={()=>this.props.navigation.dispatch(DrawerActions.openDrawer())}>
            <Icon  name={this.props.nameIcon} size={50} style={styles.IconStyle}/>
            </TouchableOpacity>
           
                   
                <Text style={styles.TextStyle}>{this.props.HeaderText}</Text>
                <TouchableOpacity  onPress={() => {this.RBSheet.open();}}>
            <Icon  name={this.props.RightIcon}  style={styles.RightIcon}/>
            </TouchableOpacity>
            <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={600}
          duration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
          <RBsheetComponent  status={this.state.status}/>
        </RBSheet>
            </View>
        );
    }
};
  

    

const styles={
    ViewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'flex-start',
        alignItems:'center',
        height:60,
        paddingTop:10,
        shadowColor:'#000',
        shwadowOffset:{width:0,height:2},
        shwadowOpacity:0.2,
        elevation:2,
        position:'relative',
        flexDirection: 'row',
        marginBottom:10
    },
    TextStyle:{
        fontSize:20,
        marginLeft:30
    },
    IconStyle:{
        fontSize:20,
        marginLeft:30,
        fontSize:30
        
    },
    RightIcon:{
        fontSize:20,
        marginLeft:100,
        fontSize:40
        
    },
};
export default withNavigation(Header);
