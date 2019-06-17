import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CustomHeader from '../../components/Header/Header';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
// import { createBottomTabNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['user.name', 'subject', 'description'];

finished= [{
    id: 1,
    user: {
      name: 'Juniper',
    },
    subject: 'Hello World!',
    description: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.'
  }, {
    id: 2,
    user: {
      name: 'Robert'
    },
    subject: 'React is <3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .... To take a trivial example, which of us ever undertakes laborious physical exercise  '
  }, {
    id: 3,
    user: {
      name: 'you can search for me using a regex : `java$`'
    },
    subject: "What's Up?",
    description: 'Reference site about Lorem Ipsum, giving  chanaka information on its origins, as well as a random Lipsum generator.'
  
  }
    ]

data=[{
    
        id: 4,
        user: {
          name: 'Georgia'
        },
        subject: 'How are you today?',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .... To take a trivial example, which of us ever undertakes laborious physical exercise  '
      
      }, {
        id: 5,
        user: {
          name: 'Albert'
        },
        subject: 'Hey!',
        description: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.'
      
      }, {
        id: 6,
        user: {
          name: 'Zoey'
        },
        subject: 'React Native!',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .... To take a trivial example, which of us ever undertakes laborious physical exercise  '
      
      }, {
        id: 7,
        user: {
          name: 'Cody'
        },
        subject: 'is super!',
        description: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.'
      
      }, {
        id: 8,
        user: {
          name: 'Chili'
        },
        subject: 'Awesome!',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. .... To take a trivial example, which of us ever undertakes laborious physical exercise  '
      
      }
]

class Task extends Component{
    constructor(props) {
        super(props);
        this.state = {
          searchTerm: ''
        }
      }

      searchUpdated(term) {
        this.setState({ searchTerm: term })
      }
    render(){
    const task = data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))


        return(
            <ScrollView>
                <CustomHeader 
                    title="Task"
                    alignItems = 'center' 
                />
                <View>
                {/* <SearchBar /> */}
                <Header style={{ backgroundColor: '#6D0F49' }}
                    androidStatusBarColor={'#6D0F49'}>
                {/* <Left>
                    <Button transparent>
                    <Icon name='arrow-back' />
                    </Button>
                </Left> */}
                <Body>
                    {/* <Title>Header</Title> */}
                    <SearchInput 
                    onChangeText={(term) => { this.searchUpdated(term) }} 
                    style={styles.searchInput} 
                    placeholder="Type a message to search"
                    />
                </Body>
                <Right> 
                    <Button transparent>
                    <Icon name='pencil' />
                    </Button>
                </Right>
                </Header>
            </View>
            <Text>
                Task
            </Text>

            {task.map(email => {
            return (
            //   <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
            //     <View>
            //       <Text>{email.user.name}</Text>
            //       <Text style={styles.emailSubject}>{email.subject}</Text>
            //       <Text>{email.description}</Text>

            //     </View>
            //   </TouchableOpacity>

            <View style={styles.cardContainer}>
            <View style={styles.card}>
            <View style={styles.headerBlock}>
              <View style={{width:  '25%', height: 75, backgroundColor: 'white',  padding:10,}}>
                  <Text>Image</Text>
              </View>
                <View style={styles.discription} >
                  <Text style={styles.header}>{email.description}</Text>
                </View>
            </View>
        </View>
        </View>
            )
          })}
            </ScrollView> 
        )
    }
}

class FinishedTask extends Component{
    constructor(props) {
        super(props);
        this.state = {
          searchTerm: ''
        }
      }

      searchUpdated(term) {
        this.setState({ searchTerm: term })
      }
    render(){
    const finishedTaskSearch = finished.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

        return(
            <ScrollView>
                <CustomHeader 
                    title="Task"
                    alignItems = 'center' 
                />
                <View>
                {/* <SearchBar /> */}
                <Header style={{ backgroundColor: '#6D0F49' }}
                    androidStatusBarColor={'#6D0F49'}>
                {/* <Left>
                    <Button transparent>
                    <Icon name='arrow-back' />
                    </Button>
                </Left> */}
                <Body>
                    {/* <Title>Header</Title> */}
                    <SearchInput 
                    onChangeText={(term) => { this.searchUpdated(term) }} 
                    style={styles.searchInput} 
                    placeholder="Type a message to search"
                    />
                </Body>
                <Right> 
                    <Button transparent>
                    <Icon name='pencil' />
                    </Button>
                </Right>
                </Header>
            </View>
            <Text> Finished Task</Text>
            {finishedTaskSearch.map(email => {
            return (
            //   <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
            //     <View>
            //       <Text>{email.user.name}</Text>
            //       <Text style={styles.emailSubject}>{email.subject}</Text>
            //       <Text>{email.description}</Text>

            //     </View>
            //   </TouchableOpacity>

            <View style={styles.cardContainer}>
            <View style={styles.card}>
            <View style={styles.headerBlock}>
              <View style={{width:  '25%', height: 75, backgroundColor: 'white',  padding:10,}}>
                  <Text>Image</Text>
              </View>
                <View style={styles.discription} >
                  <Text style={styles.header}>{email.description}</Text>
                </View>
            </View>
        </View>
        </View>
            )
          })}
            </ScrollView> 
        )
    }
}

// export default FinishedTask;

export default createMaterialTopTabNavigator({
    Task: Task,
    FinishedTask: FinishedTask,
   
  });

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start'
    },
    emailItem:{
      borderBottomWidth: 0.5,
      borderColor: 'rgba(0,0,0,0.3)',
      padding: 10
    },
    emailSubject: {
      color: 'rgba(0,0,0,0.5)'
    },
    searchInput:{
      padding: 10,
      borderColor: '#CCC',
      borderWidth: 1
    },

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
        // fontSize:24,
    },

    textContainer:{
        padding:10,
        backgroundColor:'#c7ccd6'
    },

    text:{
        
    },

    TouchableOpacityStyle: { 
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      },
     
      FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
      },
    
  });