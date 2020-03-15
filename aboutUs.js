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
    View,
    TouchableHighlight,
    Linking,
    Dimensions,
    AsyncStorage,
    Image
} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';
import LottieView from "lottie-react-native";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
let width= Dimensions.get('window').width;
let height= Dimensions.get('window').height;
type Props = {};
export default class AboutUs extends Component {
    constructor(props) {

        super(props);

        this.state = {
            language:'fa',

        };


        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }


    onNavigatorEvent(event) {
        console.log(event,'dflkdvjepjdpgjdpjo')
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
        if (event.id === 'bottomTabReselected') {
            console.log('Tab reselected!');
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
        let fa={contact:'با ما در ارتباط باشید:koalasolutiongroup@gmail.com',education:'',clinicalInfo:'',reminders:'',language_choose:'',done:'',researcher:'پژوهشگر',explain:'مریم کاظمی ارشدفناوری اطلاعات و سلامت دانشگاه علوم پزشکی تهران'};
        let en={contact:'Contact Us: Koalasolutiongroup@gmail.com',researcher:'Researcher',explain:'Maryam Kazemi Senior of \nInformation Technology And Health,\n Tehran University of \nMedical Sciences'};
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
            <View style={styles.container}>

                <Image source={require('./dear_koala.png')} style={{
                    alignItems: 'center',
                    width:0.3*width,
                    height:0.3*width,
                    justifyContent:'center',
                    marginBottom:7
                }}>
                </Image>
                <TouchableHighlight
                    style={{backgroundColor: '#00bb9b',borderRadius:7,flexDirection: 'column',alignItems:'center',justifyContent:'center'}}
                    onPress={() => Linking.openURL('mailto:Koalasolutiongroup@gmail.com')}>
                    <Text style={styles.titles3}>{this.language()['contact']}</Text>
                </TouchableHighlight>
                <View style={{height:0.07*height}}/>
                <Text style={styles.titles2}>{this.language()['researcher']}</Text>
                <Text style={styles.titles}>{this.language()['explain']}</Text>
                <View style={{height:0.3*height}}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
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
    titles:{
        fontFamily:'B Koodak',color: '#1c375c',width:0.9*width,textAlign:'center',margin: 5,fontSize: 23,lineHeight:43
    },
    titles3:{
        fontFamily:'B Koodak',color: 'white',width:0.9*width,textAlign:'center',margin: 5,fontSize: 17
    },
    titles2:{
        fontFamily:'B Koodak',color: '#1c375c',width:0.9*width,textAlign:'center',margin: 5,fontSize: 34
    },
});
module.export = AboutUs;
