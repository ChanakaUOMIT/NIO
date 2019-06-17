
import React, {Component} from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,ImageBackground
} from 'react-native';
import { Container,  Content, Card, CardItem,Icon, Right, } from 'native-base';
import { Button, ThemeProvider,Header } from 'react-native-elements';

     
     
    
     
     
     import CustomHeader from '../../components/Header/Header';
      
     class home extends Component{
     
      constructor(props){
         super(props);

         
     } 
     loadingHandler=()=>{
       this.props.navigation.navigate(loading)
     }
     DisHandler=()=>{
      this.props.navigation.navigate('Disnav')
  }
          render(){
             return(
               <View>
                 <View> 
                     <CustomHeader 
                         title="Welcome to NIO"
                         openDrawer={() => this.props.navigation.openDrawer()}
                         iconName="angle-right"
                     />
                     
                     
                     
                  </View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
               
           </View>
                  
             )
          }
     }
      
     export default home;
     
     
     const styles = StyleSheet.create({
         container: {
             flex: 1,
             backgroundColor: '#fff',
             alignItems: 'center',
             justifyContent: 'center',
             },
             containerstyle:{
                backgroundColor: '#deb6ca',
                borderColor: '#222',
                borderWidth: 1,
                borderRadius:30
             },
             containerstyle1:{
              backgroundColor: '#ffa811',
              borderColor: '#222',
              borderWidth: 1,
              borderRadius:30,
              
           }
     });
  
  


