/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, Dimensions, AsyncStorage} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';
import LottieView from "lottie-react-native";
import { Navigation } from 'react-native-navigation';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
type Props = {};
export default class Reminder_Saved extends Component {
    constructor(props) {

        super(props);

        this.state = {
            language:'fa',
            modal_visible:false,
            index:0
        };

    }
    componentWillMount() {
        AsyncStorage.getItem('language',(err,store)=>{
            if(store){
                this.setState({language:JSON.parse(store)})
                switch(JSON.parse(store)) {
                    case 'fa':
                        this.setState({index : 0});
                        break;
                    case 'en':
                        this.setState({index:1});
                        break;
                    default:
                        this.setState({index : 0});

                }
            }
        })
    }
    render() {
        console.log('dlkdlfklf',RNCalendarEvents.authorizationStatus());

        return (
            <View style={styles.container}>
                <View style={styles.container2}>
                    <LottieView
                        source={require('./saving_quotes')}
                        style={{
                            alignItems: 'center',
                            width:0.3*width,
                            height:0.3*width,
                            justifyContent:'center',

                        }}

                        autoPlay
                        loop={false}
                    />
                    <Text style={{margin: 7,fontFamily:'B Koodak',color: 'black',fontSize: 17}}>{'یادآورنده با موفقیت ثبت گردید'}</Text>

                    <View style={{height:0.05*width}}/>
                    <TouchableHighlight
                        underlayColor="#2c82c9"

                        onPress={()=>{
                            Navigation.dismissAllModals({
                                animationType: 'none' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
                            });
                            setTimeout(() => {

                                this.props.navigator.push({
                                    screen: 'com.koalasolution.Reminder',
                                    navigatorStyle: {navBarHidden: true, // make the nav bar hidden
                                    }                            // override the navigator style for the pushed screen (optional)

                                });
                            }, 500);

                            // Navigation.dismissAllModals({
                            //     animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
                            // });


                        }
                        }
                        style={{backgroundColor:'#2c82c9',width:'50%',borderRadius: 7,justifyContent:'center',alignItems:'center',marginBottom: 7}}>
                        <Text style={{margin: 7,fontFamily:'B Koodak',color: 'white',fontSize: 17}}>{'خوبه'}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(20, 20, 20, 0.7)'
    },
    container2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        width:0.5*width,
        height:0.5*width,
        borderRadius:13
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
module.export = Reminder_Saved;
