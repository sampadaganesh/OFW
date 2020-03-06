import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Iconss from "react-native-vector-icons/MaterialCommunityIcons";
import NEW from "react-native-vector-icons/Fontisto";

class MenuScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#615BFF',
    
    },
    headerTitleStyle: {
      color: 'white',
      
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Menu Screen</Text>
      </View>
    );
  }
}
export default MenuScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});