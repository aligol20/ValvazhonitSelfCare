/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Dimensions,
    Image,
    View,
    Animated,
    Easing,
    TouchableHighlight,
    AsyncStorage, ScrollView
} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from "lottie-react-native";
import { Navigation } from 'react-native-navigation';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
let width= Dimensions.get('window').width;
let height= Dimensions.get('window').height;
export default class Reminder extends Component {

    constructor(props) {

        super(props);
        this.props.navigator.setStyle({
            navBarTextColor: 'white',
            navBarBlur:true,
            topBarBorderColor:'red',

            navBarTextFontFamily:'B Koodak',
            statusBarTextColorScheme:'light',
            statusBarColor:'#007e8e'
        });
        this.state = {
            language:'fa',
            progress: new Animated.Value(0),

        };


        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.props.navigator.setButtons({
            leftButtons: [{ // buttons for the right side of the nav bar (optional)
                title: 'Edit', // if you want a textual button
                icon: require('./toole.png'), // if you want an image button
                id: 'turn_back', // id of the button which will pass to your press event handler. See the section bellow for Android specific button ids
                testID: 'e2e_is_awesome', // if you have e2e tests, use this to find your button
                disabled: true, // optional, used to disable the button (appears faded and doesn't interact)
                disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
                buttonFontSize: 3, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
                buttonFontWeight: '100', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
            }], // see "Adding buttons to the navigator" below for format (optional)
            rightButtons: [{ // buttons for the right side of the nav bar (optional)
                title: 'Edit', // if you want a textual button
                icon: require('./alarm-clock.png'), // if you want an image button
                id: 'compose', // id of the button which will pass to your press event handler. See the section bellow for Android specific button ids
                testID: 'e2e_is_awesome', // if you have e2e tests, use this to find your button
                disabled: true, // optional, used to disable the button (appears faded and doesn't interact)
                disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
                buttonFontSize: 3, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
                buttonFontWeight: '100', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
            }],
            animated: true // does the change have transition animation or does it happen immediately (optional)
        });


    }
    onNavigatorEvent(event) {
        if (event.id === 'willAppear') {
            AsyncStorage.getItem('language',(err,store)=>{
                if(store){
                    console.log(store,'ddldldldldllddkfklfe')

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
                }else {
                    AsyncStorage.setItem('language',JSON.stringify('fa'))
                }
            })
        }
// this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'turn_back') { // this is the same id field from the static navigatorButtons definition
                this.props.navigator.push({
                    screen: 'com.koalasolution.App',
                    navigatorStyle: {navBarHidden:true}, // override the navigator style for the pushed screen (optional)

                });
            }

        }
    }
    componentWillMount() {
        AsyncStorage.getItem('language',(err,store)=>{

            if(store){
                console.log(store,'ddldldldldllddkfklfe')
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
    componentDidMount() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
        }).start();
    }

    language(){
        let fa={medicine_reminder:'یاداورنده مصرف دارو',doctor_reminder:'یادآورنده مراجعه به پزشک',sport_reminder:'یادآورنده فعالیت ورزشی'};
        let en={medicine_reminder:'Drug taking reminder',doctor_reminder:'Visit to doctor reminder',sport_reminder:'Exercise reminder'};
        let final = {};
        console.log(this.state.language,';kfjgfj')
        switch(this.state.language) {
            case 'en':
                final = en;
                break;
            case 'fa':
                final = fa;
                break;
            default:
                final = fa;
        }
        return final;
    }
    render() {
        console.log('dlkdlfklf',RNCalendarEvents.authorizationStatus());

        return (
            <ScrollView style={{flex:1}}>
            <View style={styles.container}>
                <View style={{height: 0.05 * height}}/>

                <TouchableHighlight
                    underlayColor="#00b5cc"

                    style={styles.buttonOut}
                    onPress={()=>
                        this.props.navigator.push({
                        screen: 'com.koalasolution.Medicine_reminder',
                        title: this.language()['medicine_reminder'],
                        navigatorStyle: {navBarBackgroundColor:'#2c82c9'}, // override the navigator style for the pushed screen (optional)

                    })}>
                    <View style={styles.buttonIn}>
                        <Text style={styles.titles}>{this.language()['medicine_reminder']}</Text>

                    </View>

                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="#2c82c9"

                    style={styles.buttonOut1}
                    onPress={()=> this.props.navigator.push({
                        screen: 'com.koalasolution.Doctor_reminder',
                        title: this.language()['doctor_reminder'],
                        navigatorStyle: {navBarBackgroundColor:'#2c82c9'}, // override the navigator style for the pushed screen (optional)

                    })}>
                    <View style={styles.buttonIn}>
                        <Text style={styles.titles}>{this.language()['doctor_reminder']}</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="#3a539b"

                    style={styles.buttonOut2}
                    onPress={()=>this.props.navigator.push({
                        screen: 'com.koalasolution.Sport_reminder',
                        title: this.language()['sport_reminder'],
                        navigatorStyle: {navBarBackgroundColor:'#2c82c9'}, // override the navigator style for the pushed screen (optional)

                    })}>
                    <View style={styles.buttonIn}>
                        <Text style={styles.titles}>{this.language()['sport_reminder']}</Text>
                    </View>
                </TouchableHighlight>
                <View style={{height:0.1*height}}/>

                <Image source={require('./clock.png')} style={{
                    alignItems: 'center',
                    width:0.84*width,
                    height:0.6*width,
                    justifyContent:'center',
                    marginBottom:33
                }}>
                </Image>

            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f6f7',
    },
    buttonIn:{borderRadius:7,flexDirection: 'row',justifyContent:'center',alignItems:'center'},
    buttonOut:{width:0.8*width,borderRadius:7,marginTop: 7,flexDirection: 'row',backgroundColor: '#00b5cc',justifyContent: 'center',alignItems: 'center'},
    buttonOut1:{width:0.8*width,borderRadius:7,marginTop: 7,flexDirection: 'row',backgroundColor: '#2c82c9',justifyContent: 'center',alignItems: 'center'},
    buttonOut2:{width:0.8*width,borderRadius:7,marginTop: 7,flexDirection: 'row',backgroundColor: '#3a539b',justifyContent: 'center',alignItems: 'center'},
    buttonOut3:{width:0.8*width,borderRadius:7,marginTop: 7,flexDirection: 'row',backgroundColor: '#1f3a93',justifyContent: 'center',alignItems: 'center'},

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
    titles:{
        fontFamily:'B Koodak',color: 'white',textAlign:'center',marginTop: 13,marginBottom: 13,width:0.6*width
    }
});
module.export = Reminder;
