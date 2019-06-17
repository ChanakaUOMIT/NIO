import React, {Component} from 'react';
import {Text,Platform, StyleSheet,View,Image,ScrollView,TextInput,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight,AsyncStorage,} from 'react-native';

class DiscussionCard extends Component{
    constructor(){
        super();
        } 
    
      render() {
        return (  
          <View style={styles.cardContainer}>
              <View style={styles.card}>
              <View style={styles.headerBlock}>
                <View style={{width:  '25%', height: 75, backgroundColor: 'powderblue',  padding:10,}}>
                    <Text>Image</Text>
                </View>
                  <View style={{width: '50%', height: 75, backgroundColor: 'powderblue',  padding:10,}} >
                    <Text style={styles.header}>
                        John Doe
                    </Text>
                    <Text>
                        Today, 12 AM
                    </Text>
                  </View>
                  <View style={{ width:'25%', height: 75, backgroundColor: 'powderblue',  padding:10,}}>
                    <Text>Notification</Text>
                </View>
              </View>

              <View style={styles.textContainer}>
                  <Text style={styles.text}>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                  </Text>
              </View>
          </View>
          </View>
        );
      }
}

export default DiscussionCard; 

const styles = StyleSheet.create({
    cardContainer:{
        margin:10,
    },
    card:{
        borderLeftColor: '#6D0F49',
        borderLeftWidth: 10,
    },
    headerBlock:{
        // flex:1,
        flexDirection:'row',
        backgroundColor:'#e1e6ef',
    },
    header:{
        fontSize:24,
    },

    textContainer:{
        padding:10,
        backgroundColor:'#c7ccd6'
    },

    text:{
        
    }
    
})