import React, { Component } from 'react';
import Login_redirect from './Source/Login_redirect';
import { View,StyleSheet } from 'react-native';
import Search from './Source/Search';
import MenuScreen from './Source/tabs/MenuScreen'
import ChatScreen from './Source/ChatScreen';
import Chat from './Source/Chat';
import TimeScreen from './Source/TimeScreen';
import Message from "./Source/Message";
import ImageAdd from './ImageAdd';
import XmlData from './Source/XmlData';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <XmlData/>
      </View>
     );
   }
 }
 const styles = StyleSheet.create({
   container: {
     flex: 1,
 
     backgroundColor: '#F5FCFF',
   },
  });