import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Iconss from "react-native-vector-icons/MaterialCommunityIcons";
import NEW from "react-native-vector-icons/Fontisto";
class WelcomeScreen extends React.Component {
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
        <Button title="login" onPress={()=>this.props.navigation.navigate('Home')}/>
        <Button title="SignUp" onPress={()=>alert('button Pressed')}/>
      </View>
    );
  }
}

export default WelcomeScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});