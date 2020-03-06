import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import { createSwitchNavigator,createAppContainer} from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import HomeScreen from './Source/Screens/HomeScreen';
import WelcomeScreen from './Source/Screens/WelcomeScreen';
import { MenuScreen } from "./Source/Screens/MenuScreen";
import AppNavigator from './Source/AppNavigator';
import MenuAppNavigator from './Source/Screens/MenuAppNavigator';
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#7734EC" barStyle="light-content" />
           <MenuAppNavigator/>
           <AppNavigator/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;


