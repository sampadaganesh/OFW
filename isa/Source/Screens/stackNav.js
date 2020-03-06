import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { StackNavigator } from 'react-navigation'; 

export class HomeScreen extends Component {

    render() {
        return (
            <View style={{
            flex: 1,
            flexDirection: 'column',
            }}> 
            <View style={{
                flex: 1,
                backgroundColor: '#4885ed',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    This is Home Screen
                </Text>
                <TouchableHighlight style={{ 
                                            margin: 20, 
                                            width: 200, 
                                            height: 45,
                                            backgroundColor: 'darkviolet',
                                            padding: 10,
                                            alignItems: 'center',
                                         }}
                    onPress={() => {this.props.navigation.navigate('DetailView');                                             
                    }}>
                    <Text style={{color: 'white', fontSize: 18}}>DetailView</Text>
                </TouchableHighlight>
            </View>
        </View>);
    }
}

export class DetailScreen extends Component {

    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}> 
            <View style={{
                flex: 1,
                backgroundColor: '#4734ac',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    This is Detail Screen
                </Text>
                <TouchableHighlight style={{ 
                                            margin: 20, 
                                            width: 200, 
                                            height: 45,
                                            backgroundColor: 'darkviolet',
                                            padding: 10,
                                            alignItems: 'center',
                                         }}
                    onPress={() => {
                        this.props.navigation.goBack();                                          
                    }}>
                    <Text style={{color: 'white', fontSize: 18}}>Navigate Back</Text>
                </TouchableHighlight>
            </View>
        </View>);
    }

}

export default StackNavigator (
    {
        Home:HomeScreen,
        DetailView:DetailScreen
    },{
        initialRouteName:'Home'
    }
)