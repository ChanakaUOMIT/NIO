import React, { Component } from 'react';
import {View, ScrollView, StyleSheet,Image} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';

class ListHeader extends Component{
    render(){
        return(
            <Container>
             <ScrollView>
                {/* <Text>List Header</Text> */}
                <Image
                    style={{width: '100%', height: 300}}
                    // source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                    source={require('../contact.jpg')}
                />
                <View style={{ position: 'absolute',bottom:0, alignItems: 'center', justifyContent: 'center', padding:5 }}>
                    <Text style={styles.title}>What is the Task ?</Text>
                    <Text styles={styles.taskDetails}>Create by Jon Doe 09/06/2019, 9.11 am</Text>
                </View>
                
            </ScrollView>
            <Button full danger>
            <Text>Danger</Text>
          </Button>
            </Container>
           
        )
    }
}

export default ListHeader;

const styles = StyleSheet.create({
    title:{
        fontSize:24
    },
    taskDetails:{
        margin:5
    }
})