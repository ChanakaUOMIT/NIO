
import React, {Component} from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,ImageBackground
} from 'react-native';
import { Container,  Content, CardItem, Right,Card } from 'native-base';
import { Button, ThemeProvider,Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

     
     
    
     
     
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
              
              
              <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
              colors={['#f2e021','#e27a5a']} style={styles.linearGradient}>
               <View >
                 <View> 
                     <CustomHeader 
                         title="Welcome to NIO"
                         openDrawer={() => this.props.navigation.openDrawer()}
                        
                     />
                     
                     
                     
                  </View>
                  <View >
                  <View style={styles.discusscontainer } >
                  <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.leftlay}>
          <View style={styles.iconpos}>
        <Icon  name="microphone-alt" size={50}  color="#e27a5a"  />
        <Text style ={styles.Distext} >Disccusion</Text>
        </View>
        </View>
        <View style={styles.rightlay} >
        <View style={styles.iconpos1} 
       >
        <Icon  name="comment" size={25}  color="#1386ef" alignItems='center'  />
        <Icon  name="users" size={25}  color="#e27a5a" alignItems='center'  />
        <Card style= {styles.containerstyle}>
            <CardItem style= {styles.containerstyle1}>
              <TouchableOpacity >
              <Text  >Discussion.. 1</Text>
              </TouchableOpacity>
              <Right>
                <Icon name="angle-right" />
              </Right>
             </CardItem>
              
             </Card>
                 
         </View>
        </View>
        
      </View>
      </View>

              <View style={styles.wrapper}>
      <View style={styles.discusscontainer } >
                  <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.leftlay}>
          <View style={styles.iconpos}>
        <Icon  name="tasks" size={50}  color="#e27a5a"  />
        <Text style ={styles.Distext} >Task</Text>
        </View>
        </View>
        <View style={styles.rightlay1} >
        <View style={styles.iconpos1} 
       >
        <Icon  name="comment" size={25}  color="#1386ef" alignItems='center'  />
        <Icon  name="users" size={25}  color="#e27a5a" alignItems='center'  />
        <Card style= {styles.containerstyle}>
            <CardItem style= {styles.containerstyle1}>
              <TouchableOpacity >
              <Text  >Discussion 2</Text>
              </TouchableOpacity>
              <Right>
                <Icon name="angle-right" />
              </Right>
             </CardItem>
             
             </Card>
             
             
        </View>
        </View>
        <View style={styles.rightlay2} >
        <View style={styles.iconpos0} 
       >
        <Icon  name="calendar-alt" size={40}  color="#1386ef" alignItems='center'  />
        
       
             
             
                 </View>
               </View>
      
             </View>

                     </View>
                  </View>
               </View>
            </View>
           
                  </LinearGradient>
             

             )
          }
     }
      
     export default home;
     
     
     const styles = StyleSheet.create({
      wrapper:{
       marginTop:175,
    
        },
        wrapper1:{
          
       
           },
             containerstyle:{
                backgroundColor: 'white',
                alignItems:'center',
                borderRadius:30,
                marginTop:10
                
             },
             containerstyle2:{
              backgroundColor: 'white',
              alignItems:'center',
              borderRadius:30,
              marginTop:10
              
           },
             containerstyle1:{
              backgroundColor: '#ffa811',
              borderColor: '#222',
              borderWidth: 1,
              borderRadius:30,
              
           },
           linearGradient: {
            flex: 1,
           
          },
          discusscontainer:{
            borderColor: '#2222',
           
            
             borderRadius:28,
            alignItems:'center'
          },
          leftlay:{
            top:30,
            width: '30%',
            height: 150,
            backgroundColor: 'white',
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15, 
            
            overflow: "hidden",
            borderWidth:2,
            borderColor: '#ddd',
            borderTopWidth: 0,
            borderRightWidth:0,
            
            borderColor: '#ddd',
           
            shadowColor: '#222',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.9,
            shadowRadius: 2,
          },
          rightlay:{
            top:30,
            borderBottomRightRadius: 15, 
            borderTopRightRadius: 15,
            overflow: "hidden",
            width: '60%',
            height: 150,
            backgroundColor: 'white',
            
            borderWidth:2,
            borderColor: '#ddd',
            borderTopWidth: 0,
            borderLeftWidth:2,
            shadowColor: '#222',
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9,
            shadowRadius: 15,
          },
          rightlay1:{
            top:30,
            borderBottomRightRadius: 15, 
            borderTopRightRadius: 15,
            overflow: "hidden",
            width: '40%',
            height: 150,
            backgroundColor: 'white',
            
            borderWidth:2,
            borderColor: '#ddd',
            borderTopWidth: 0,
            borderLeftWidth:2,
            shadowColor: '#222',
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9,
            shadowRadius: 15,
          },
          rightlay2:{
            top:30,
            borderRadius: 15, 
            
            overflow: "hidden",
            width: '20%',
            height: 140,
            backgroundColor: 'white',
            marginLeft:2,
            borderWidth:2,
            borderColor: '#ddd',
            marginTop:5,
            shadowColor: '#222',
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9,
            shadowRadius: 15,
          },
          iconpos0:{
          
           
            alignItems:'center'
            
          }  ,
        iconpos:{
          alignItems:'center',
          marginTop:40,
          
          
          
        }  ,
        iconpos1:{
          
          marginTop:10,
          marginLeft:5,
          alignItems:'flex-start'
          
        }  ,
        Distext:{
          fontSize:17,
          marginTop:20,
          textAlign:'center',
          color:'#70111e',
          fontWeight: 'bold',
        }
     });
  
     
     


