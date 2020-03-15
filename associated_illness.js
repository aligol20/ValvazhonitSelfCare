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
    TouchableHighlight,
    AsyncStorage,
    ScrollView
} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
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
export default class Associated_illness extends Component {

    constructor(props) {

        super(props);
        this.props.navigator.setStyle({
            navBarTextColor: 'white',
            navBarBlur:true,
            topBarBorderColor:'red',

            navBarTextFontFamily:'B Koodak',
            statusBarTextColorScheme:'light',
            statusBarColor:'#b2733a'
        });
        this.state = {
            language:'fa'
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
                icon: require('./teach.png'), // if you want an image button
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

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
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

        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'turn_back') { // this is the same id field from the static navigatorButtons definition
                this.props.navigator.push({
                    screen: 'com.koalasolution.Main_Points',
                    title: this.language()['mainPoints'],
                    navigatorStyle: {navBarBackgroundColor:'#b2733a'}, // override the navigator style for the pushed screen (optional)

                });
            }

        }
    }

    componentWillMount() {
        console.log('hiiiii','ddldldldldllddkfklfe')

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
    language(){
        let fa={depression:'افسردگی',sexual_problems:'مشکلات جنسی'};
        let en={depression:'Depression',sexual_problems:'Sexual problems'};
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
                <View

                    style={styles.buttonOut}
                   >
                    <View style={styles.buttonIn}>
                        <Text style={styles.titles}>{this.language()['depression']}</Text>

                    </View>

                </View>
                <View

                    style={styles.buttonOut1}
                   >
                    <View style={styles.buttonIn}>
                        <Text style={styles.titles}>{this.language()['sexual_problems']}</Text>
                    </View>
                </View>

                <View style={{height:0.1*height}}/>
                <Image source={require('./depression.png')} style={{
                    alignItems: 'center',
                    width:0.8*width,
                    height:0.8*width,
                    justifyContent:'center',
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
        backgroundColor: '#feffff',
    },
    buttonIn:{borderRadius:7,flexDirection: 'row',justifyContent:'center',alignItems:'center'},
    buttonOut:{width:0.8*width,borderRadius:7,marginTop: 7,flexDirection: 'row',borderWidth: 2,borderColor: '#ffa554',backgroundColor: '#feffff',justifyContent: 'center',alignItems: 'center'},
    buttonOut1:{width:0.8*width,borderRadius:7,marginTop: 7,flexDirection: 'row',borderWidth: 2,borderColor: '#eb9040',backgroundColor: '#feffff',justifyContent: 'center',alignItems: 'center'},
    buttonOut2:{width:0.8*width,borderRadius:7,marginTop: 7,flexDirection: 'row',borderWidth: 2,borderColor: '#c67121',backgroundColor: '#feffff',justifyContent: 'center',alignItems: 'center'},

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
        fontFamily:'B Koodak',color: '#ffa554',textAlign:'center',marginTop: 13,marginBottom: 13,width:0.6*width
    }
});
module.export = Associated_illness;
