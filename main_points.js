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

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
let width= Dimensions.get('window').width;
let height= Dimensions.get('window').height;
export default class Main_Points extends Component {
    callMe(){
        console.log('dlkdlfklf2',RNCalendarEvents.findCalendars());
        let date = new Date();

        // Getting current hour from Date object.
        let hour = date.getTime();
        console.log('1',hour)
        console.log('3',RNCalendarEvents.findCalendars());

        // console.log('2',RNCalendarEvents.saveEvent('hi gooooooz!!', {
        //     calendarId: '10',
        //         startDate:'2018-11-02T09:40:00.0Z',
        //           endDate:'2018-11-02T09:50:00.0Z'
        //         ,description:'its time for starting',
        //     notes: 'Bring sunglasses',
        //     recurrence:'daily',
        //     alarms: [{
        //         date: -3
        //     }]}))
        RNCalendarEvents.saveEvent('Title of event', {
            startDate: '2018-11-02T10:00:00.0Z',
            endDate: '2018-11-09T012:55:00.0Z',
            recurrence:'daily',
            recurrenceRule: [{
                frequency: 'daily',

            }]
        });
        console.log('lskslklkkfk948958',RNCalendarEvents.findEventById('296'))



    }
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
                    screen: 'com.koalasolution.Education',
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
    componentDidMount() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
        }).start();
    }

    language(){
        let fa={signs:'علایم مختلف بیماری ولوواژینیت کاندیدایی',reason:'علل بوجودآورنده بیماری ولوواژینیت کاندیدایی',methods:'انواع روش های تشخیص بیماری',Associated_illness:'بیماری های همراه'};
        let en={signs:'Various symptoms of Candida vulvovaginal candidiasis',reason:'Causes of Candida vulvovaginal disorder',methods:'Types of diagnostic methods',Associated_illness:'Associated illnesses'};
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
                    underlayColor="#ffa554"

                    style={styles.buttonOut}
                    onPress={()=> this.props.navigator.push({
                        screen: 'com.koalasolution.Main_text',
                        title: this.language()['signs'],
                        passProps: ['signs'],
                        navigatorStyle: {navBarBackgroundColor:'#b2733a'}, // override the navigator style for the pushed screen (optional)

                    })}>
                    <View style={styles.buttonIn}>
                        <Text style={styles.titles}>{this.language()['signs']}</Text>

                    </View>

                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="#eb9040"

                    style={styles.buttonOut1}
                    onPress={()=> this.props.navigator.push({
                        screen: 'com.koalasolution.Main_text',
                        passProps: ['reason'],
                        title: this.language()['reason'],
                        navigatorStyle: {navBarBackgroundColor:'#b2733a'}, // override the navigator style for the pushed screen (optional)

                    })}>
                    <View style={styles.buttonIn}>
                        <Text style={styles.titles}>{this.language()['reason']}</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="#d37b2b"

                    style={styles.buttonOut2}
                    onPress={()=> this.props.navigator.push({
                        screen: 'com.koalasolution.Main_text',
                        title: this.language()['methods'],
                        passProps: ['methods'],
                        navigatorStyle: {navBarBackgroundColor:'#b2733a'}, // override the navigator style for the pushed screen (optional)

                    })}>
                    <View style={styles.buttonIn}>
                        <Text style={styles.titles}>{this.language()['methods']}</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="#c67121"

                    style={styles.buttonOut3}
                    onPress={()=> this.props.navigator.push({
                        screen: 'com.koalasolution.Associated_illness',
                        passProps: ['Associated_illness'],
                        title: this.language()['Associated_illness'],
                        navigatorStyle: {navBarBackgroundColor:'#b2733a'}, // override the navigator style for the pushed screen (optional)


                    })}>
                    <View style={styles.buttonIn}>
                        <Text style={styles.titles}>{this.language()['Associated_illness']}</Text>
                    </View>
                </TouchableHighlight>
                <View style={{height:0.05*height}}/>
                {/*<Image source={require('./apple_book.png')} style={{*/}
                    {/*alignItems: 'center',*/}
                    {/*width:0.5*width,*/}
                    {/*height:0.6*width,*/}
                    {/*justifyContent:'center',*/}
                {/*}}>*/}
                {/*</Image>*/}

                <Image source={require('./aan.png')} style={{
                    alignItems: 'center',
                    width:0.6*width,
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
    buttonOut:{width:0.8*width,borderRadius:7,marginTop: 7,flexDirection: 'row',backgroundColor: '#ffa554',justifyContent: 'center',alignItems: 'center'},
    buttonOut1:{width:0.8*width,borderRadius:7,marginTop: 7,flexDirection: 'row',backgroundColor: '#eb9040',justifyContent: 'center',alignItems: 'center'},
    buttonOut2:{width:0.8*width,borderRadius:7,marginTop: 7,flexDirection: 'row',backgroundColor: '#d37b2b',justifyContent: 'center',alignItems: 'center'},
    buttonOut3:{width:0.8*width,borderRadius:7,marginTop: 7,flexDirection: 'row',backgroundColor: '#c67121',justifyContent: 'center',alignItems: 'center'},

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
module.export = Main_Points;
