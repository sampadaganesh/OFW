import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Iconss from "react-native-vector-icons/MaterialCommunityIcons";
import NEW from "react-native-vector-icons/Fontisto";
import HomeScreen from './Screens/HomeScreen';
import ChatScreen from "./Screens/ChatScreen";
import NewsScreen from './Screens/NewsScreen';
import NotificationScreen from './Screens/NotificationScreen'
import MenuScreen from './Screens/MenuScreen';
import { createDrawerNavigator } from "react-navigation-drawer";
const HomeStack = createStackNavigator({
  Home: HomeScreen
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
          />
        )
      };
    }
  }
);
const ChatStack = createStackNavigator({
  Chat: ChatScreen,
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      { headerLayoutPreset: 'center' }
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
          />
        )
      };
    }
  }
);
const NewsStack = createStackNavigator({
  News: NewsScreen,
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      { headerLayoutPreset: 'center' }
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
          />
        )
      };
    }
  }
);
const NotificationStack = createStackNavigator({
  Notify: NotificationScreen,
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      { headerLayoutPreset: 'center' }
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
          />
        )
      };
    }
  }
);



const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icons style={[{ color: tintColor }]} size={25} name={'home'} />
          </View>
        ),
      },
    },
    Chat: {
      screen: ChatStack,
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Iconss style={[{ color: tintColor }]} size={25} name={'message'} />
          </View>
        ),
      },
    },
    News: {
      screen: NewsStack,
      navigationOptions: {
        tabBarLabel: 'News',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <NEW style={[{ color: tintColor }]} size={25} name={'world-o'} />

          </View>
        ),
      },
    },

    Notify: {
      screen: NotificationStack,
      navigationOptions: {
        tabBarLabel: 'Notify',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={30} name={'ios-notifications'} />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#1273DE',
    inactiveColor: '#f0edf6',
    barStyle: { backgroundColor: 'white' },
  },
);

export default createAppContainer(TabNavigator);