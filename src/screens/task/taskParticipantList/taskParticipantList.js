import React, { Component} from 'react';
import { View, ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native';
import CustomHeader from '../../../components/Header/Header';
import ListHeader from './listHeader';
import { Container, Header, Content, Button, Text } from 'native-base';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';


const data=[
    {
        id:1,
        name:"Kasun Bandara",
        role:'admin'
    },

    {
        id:2,
        name:"Dulanga Heshan"
    },
    {
        id:3,
        name:"Supun"
    }
]


class TaskParticipantList extends Component{
    render(){
        return(
            <ScrollView>
                <CustomHeader 
                    title=""
                    alignItems = 'center' 
                /> 
                {/* <ListHeader /> */}
                <ScrollView>
                <Image
                    style={{width: '100%', height: 300}}source={require('../contact.jpg')}
                />
                <View style={{ position: 'absolute',bottom:0, alignItems: 'center', justifyContent: 'center', padding:5 }}>
                    <Text style={styles.title}>What is the Task ?</Text>
                    <Text styles={styles.taskDetails}>Create by Jon Doe 09/06/2019, 9.11 am</Text>
                </View>
                
            </ScrollView>
            {/* <View style={{backgroundColor:'white', height:12}} /> */}
                <View>
                    <TouchableOpacity style={styles.addTask}>
                        <Text>Add Task Discription</Text>
                    </TouchableOpacity>
                </View>
            {/* <Divider style={{ backgroundColor: 'blue' }} />; */}
            <View style={{backgroundColor:'white', height:12}} />

            <View>
                <Text>Mute Notification</Text>  
                <Text>Task media</Text>
                <Text>11 Participents</Text>

              {data.map(data => {
            return (
            <View style={styles.cardContainer}>
              <View style={styles.card}>
              <View style={styles.participantList}>
                <View style={{width:  '15%', height: 75, backgroundColor: 'powderblue',  padding:10,}}>
                    {/* <Text>Image md-contact</Text> */}
                    <Icon  name="md-contact"                    
                        size={45} color="black"/>
                </View>
                  <View style={{width: '60%', height: 75, backgroundColor: 'powderblue',  padding:10,}} >
                    <Text style={styles.header}>
                         {data.name}
                    </Text>
                  </View>
                  <View style={{ width:'25%', height: 75, backgroundColor: 'powderblue',  padding:10,}}>
                    {data.role === 'admin'? <View style={styles.badge} ><Text style={{color:'white'}}>{data.role}</Text></View>: <Text></Text>}
                </View>
              </View>

          </View>
          </View>
            )
          })}

            </View>


            </ScrollView>
        )
    }
}

export default TaskParticipantList;

const styles = StyleSheet.create({
    title:{
        fontSize:24
    },
    taskDetails:{
        margin:5
    },
    addTask:{
        alignItems:'center',
        backgroundColor:'#e7e3e8',
        height:50,
        padding:15
    },
    participantList:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#e1e6ef',
    },
    badge:{
        backgroundColor:'#6D0F49',
        borderRadius:20,
        alignItems:'center'
    }
})