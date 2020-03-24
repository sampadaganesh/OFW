import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { parseString } from 'xml2js'
import ReadMore from 'react-native-read-more-text';



class XmlData extends Component {
    state = {
        data: ''
    }

    componentDidMount() {
        this._isMounted = true;
        var url = "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"
        //   fetch(url)

        //     .then((response) =>console.log('pradeep',response()) )

        //     .then((responseText) => {
        //    parseString(responseText, function (err, result) {
        //      console.log(result);
        //      return result;
        //     });
        //   this.setState({
        //     datasource : result
        //     })
        //    })
        // .catch((error) => {
        //   console.log('Error fetching the feed: ', error);
        // });
        const parseString = require('react-native-xml2js').parseString;
        fetch(url)
            .then(response => response.text())
            .then((response) => {
                parseString(response, (err, result) => {
                    console.log(JSON.stringify(result))
                    console.log(JSON.stringify(result.rss.channel[0].item))
                    this.setState(
                        {
                            data: result.rss.channel[0].item
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
    renderListItem = ({ item }) => (
        <View>             
                <TouchableOpacity >
                    <Text style={{ fontWeight: 'bold', color: 'blue', fontSize: 16,textDecorationLine: 'underline' }}>{item.title}</Text>
                </TouchableOpacity>
            <View>
            <Text style={{ color: 'blue', fontSize: 12 }}>{item.pubDate}</Text>
            </View>
            <View>
            <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={this._renderTruncatedFooter}
              renderRevealedFooter={this._renderRevealedFooter}
              onReady={this._handleTextReady}>
              
              <Text style={{ color: 'black', fontSize: 12 }}>{item.description}</Text>

            </ReadMore>
            </View>
            </View>
    )
    render() {
        let { text } = this.props;
        return (
            <SafeAreaView>
                <FlatList
                    data={this.state.data}

                    renderItem={this.renderListItem}
                    keyExtractor={(item, index) => item.title}

                />
            </SafeAreaView>

        )
    }

    _renderTruncatedFooter = (handlePress) => {
        return (
          <Text style={{color: 'blue', marginTop: 5}} onPress={handlePress}>
            Read more
          </Text>
        );
      }
    
      _renderRevealedFooter = (handlePress) => {
        return (
          <Text style={{color: 'red', marginTop: 5}} onPress={handlePress}>
            Show less
          </Text>
        );
      }
    
      _handleTextReady = () => {
        // ...
      }
    }

export default XmlData;

