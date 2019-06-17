import React, { Component } from 'react';
import { View, StyleSheet,ScrollView, TouchableOpacity, Text } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['user.name', 'subject'];

data= [{
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
  description: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.'

}
  , {
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

}]

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '' 
    }
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  render() {
    const filteredEmails = data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
        <View>
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
        <ScrollView>
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
                <View>
                  <Text>{email.user.name}</Text>
                  <Text style={styles.emailSubject}>{email.subject}</Text>
                  <Text>{email.description}</Text>

                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>

        </View>
    );
  }
} 

// const styles = StyleSheet.create({
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
  }
});