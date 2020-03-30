import React, { Component } from 'react';
import { View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

import { parseString } from 'xml2js'
import { Content } from 'native-base';

class XmlData extends Component {
    
    state = {
        data: ''
    }

    componentDidMount() {
        this._isMounted = true;
        var url = "http://rss.cnn.com/rss/edition.rss"
        const parseString = require('react-native-xml2js').parseString;
        fetch(url)
            .then(response => response.text())
            .then((response) => {
                parseString(response, (err, result) => {
                    // console.log(JSON.stringify(result))
                    console.log(JSON.stringify(result.rss.channel[0].item[0].media:group))
                    this.setState(
                        {
                            data: result.rss.channel[0].item[0].media.group
                        }
                    )

                }

                );

            }).catch((err) => {
                console.log('fetch', err)
            })
    }
    componentWillUnMount() {
        this._isMounted = false;
    }
    renderListItem = ({ url }) => (
        <View>             
        <TouchableOpacity >
    <Image style={{ fontWeight: 'bold', color: 'blue', fontSize: 16,textDecorationLine: 'underline' }}>{{media:content.url}}></Image>
        </TouchableOpacity>
    </View>
    )
    render() {
        let { text } = this.props;
        var obj={};
        return (
            <SafeAreaView>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderListItem}
                    keyExtractor={(media:content, index) =>media:content.url }
                />
            </SafeAreaView>

        )
    }

}

export default XmlData;

