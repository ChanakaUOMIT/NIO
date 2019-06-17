
import React, {Component} from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,ImageBackground
} from 'react-native';
import { Container,  Content, Card, CardItem,Icon, Right } from 'native-base';
import { Button, ThemeProvider,Header } from 'react-native-elements';

     
     
    
     
     
     import CustomHeader from '../../components/Header/Header';
      
     class home extends Component{
     
      constructor(props){
         super(props);

         
     } 

     DisHandler=()=>{
      this.props.navigation.navigate('Disnav')
  }
  loadingHandler=()=>{
    this.props.navigation.navigate('DrewerNav')
  }
          render(){
             return(
                <ImageBackground source={require('../../Images/home1.png')}  style={{width: '100%', height: '100%'}}>
                 <View> 
                     <CustomHeader 
                         title="HOME"
                         openDrawer={() => this.props.navigation.openDrawer()}
                         iconName="angle-right"
                     />  
                  </View>
                  
                  <Card style= {styles.containerstyle}>
            <CardItem style= {styles.containerstyle}>
              <TouchableOpacity onPress={this.loadingHandler}  >
              <Text  >Discussion 1</Text>
              </TouchableOpacity>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem style= {styles.containerstyle} >
              
              <Text>Discussion 2</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem style= {styles.containerstyle}>
              
              <Text>Discussion 3</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem style= {styles.containerstyle}>
              
              <Text>Discussion 4</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem >
           </Card>
           
                  </ImageBackground>
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
             borderRadius:30
             },
             containerstyle:{
                backgroundColor: '#deb6ca',
             }
     });
  
  


