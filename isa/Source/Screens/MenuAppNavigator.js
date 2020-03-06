import React, { Component } from 'react';  
import { View, Text, StyleSheet, Button } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';   
import {  
    createSwitchNavigator,  
    createAppContainer,      
} from 'react-navigation';  
import { createStackNavigator   } from "react-navigation-stack";
import { createDrawerNavigator, } from "react-navigation-drawer";
import MenuScreen from "./MenuScreen";
export default class App extends Component {  
    render() {  
        return <AppContainer/>;  
    }  
}  
  
class AccountScreen extends Component {  
    static navigationOptions = {  
         title: 'Account',
         headerStyle: {
            backgroundColor: '#1273DE',
          
          },
          headerTitleStyle: {
            color: 'white',
            
          }, 
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Account Screen</Text>  
            </View>  
        );  
    }  
}  
  
class LegalScreen extends Component {  
    static navigationOptions = {  
         title: 'Legal',  
         headerStyle: {
            backgroundColor: '#1273DE',
          
          },
          headerTitleStyle: {
            color: 'white',
            
          },
    };  
  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Legal Screen</Text>  
            </View>  
        );  
    }  
} 

class InsuranceScreen extends Component {  
    static navigationOptions = {  
         title: 'Insurance',
         headerStyle: {
            backgroundColor: '#1273DE',
          
          },
          headerTitleStyle: {
            color: 'white',
            
          }, 
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Insurance Screen</Text>  
            </View>  
        );  
    }  
}

class MedicalScreen extends Component {  
    static navigationOptions = {  
         title: 'Medical',
         headerStyle: {
            backgroundColor: '#1273DE',
          
          },
          headerTitleStyle: {
            color: 'white',
            
          }, 
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Medical Screen</Text>  
            </View>  
        );  
    }  
}

class EmergencyScreen extends Component {  
    static navigationOptions = {  
         title: 'Emergency',
         headerStyle: {
            backgroundColor: '#1273DE',
          
          },
          headerTitleStyle: {
            color: 'white',
            
          }, 
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Account Screen</Text>  
            </View>  
        );  
    }  
}

class VisaServicesScreen extends Component {  
    static navigationOptions = {  
         title: 'Visa',
         headerStyle: {
            backgroundColor: '#1273DE',
          
          },
          headerTitleStyle: {
            color: 'white',
            
          }, 
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Account Screen</Text>  
            </View>  
        );  
    }  
}

class HelpScreen extends Component {  
    static navigationOptions = {  
         title: 'Help',
         headerStyle: {
            backgroundColor: '#1273DE',
          
          },
          headerTitleStyle: {
            color: 'white',
            
          }, 
    };  
    render() {  
        return (  
           
            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Account Screen</Text>  
            </View>  
     
        );  
    }  
}

class SubscriptionScreen extends Component {  
    static navigationOptions = {  
         title: 'Subscription',
         headerStyle: {
            backgroundColor: '#1273DE',
          
          },
          headerTitleStyle: {
            color: 'white',
            
          }, 
    };  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Account Screen</Text>  
            </View>  
        );  
    }  
}
const AccountStackNavigator = createStackNavigator(  
    {  
        AccountNavigator: AccountScreen  
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
const LegalStackNavigator = createStackNavigator(  
    {  
        LegalScreenNavigator: LegalScreen
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

const InsuranceStackNavigator = createStackNavigator(  
    {  
        InsuranceScreenNavigator: InsuranceScreen
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


const MedicalStackNavigator = createStackNavigator(  
    {  
        MedicalScreenNavigator: MedicalScreen
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


const EmergencyStackNavigator = createStackNavigator(  
    {  
        EmergencyScreenNavigator: EmergencyScreen
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


const VisaStackNavigator = createStackNavigator(  
    {  
        VisaScreenNavigator: VisaServicesScreen
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


const HelpStackNavigator = createStackNavigator(  
    {  
        HelpScreenNavigator: HelpScreen
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


const SubscriptionStackNavigator = createStackNavigator(  
    {  
        SubscriptionScreenNavigator: SubscriptionScreen
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

const AppDrawerNavigator = createDrawerNavigator({  
    Account: {  
        screen: AccountStackNavigator  
    },  
    Legal: {  
        screen: LegalStackNavigator  
    },  
    Insurance: {  
        screen: InsuranceStackNavigator  
    },  
    Medical: {  
        screen: MedicalStackNavigator  
    },  
    Emergency: {  
        screen: EmergencyStackNavigator  
    },  
    Visa: {  
        screen: VisaStackNavigator  
    },  
    Help: {  
        screen: HelpStackNavigator  
    },  
    Subscription: {  
        screen: SubscriptionStackNavigator  
    },  
});  
  
const AppSwitchNavigator = createSwitchNavigator({  
    Legal: { screen: AppDrawerNavigator }, 
    Account: { screen: AccountStackNavigator },  
    Insurance: { screen: InsuranceStackNavigator }, 
    Medical: { screen: MedicalStackNavigator }, 
    Emergency: { screen: EmergencyStackNavigator }, 
    Visa: { screen: VisaStackNavigator }, 
    Help: { screen: HelpStackNavigator }, 
    Subscription: { screen: SubscriptionStackNavigator }, 
  
});  
  
const AppContainer = createAppContainer(AppSwitchNavigator);  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        alignItems: 'center',  
        justifyContent: 'center'  
    }  
});  