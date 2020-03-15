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
    Image, Modal
} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';
import LottieView from "lottie-react-native";
import SegmentControl from "react-native-segment-controller";
import {Navigation} from "react-native-navigation";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
let width= Dimensions.get('window').width;
let height= Dimensions.get('window').height;
type Props = {};
export default class Choose_language extends Component {
    constructor(props) {

        super(props);

        this.state = {
            language:'fa',
            index:0

        };

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
        let fa={notify:'اطلاع رسانی',education:'آموزش ها',clinicalInfo:'اطلاعات بالینی',reminders:'یادآورنده ها',language_choose:'زبان خود را انتخاب کنید',done:'خب'};
        let en={notify:'Notices',education:'Educations',clinicalInfo:'Clinical information',reminders:'Reminders',language_choose:'choose your language',done:'done'};
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
    change_language(index){

        switch(index) {
            case 0:
                this.setState({language:'fa',index:0});
                AsyncStorage.setItem('language',JSON.stringify('fa'))
                break;
            case 1:
                this.setState({language:'en',index:1});
                AsyncStorage.setItem('language',JSON.stringify('en'))
                break;
            default:
                this.setState({language:'fa',index:0});
                AsyncStorage.setItem('language',JSON.stringify('fa'))
        }
    }
    render() {
        console.log('dlkdlfklf',RNCalendarEvents.authorizationStatus());

        return (
                    <View style={styles.container}>
                        <View style={{backgroundColor:'#F5FCFF',width:0.7*width,height:0.5*width,borderRadius:7,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                            <Text style={styles.setting}>{this.language()['language_choose']}</Text>
                            <View style={{height:0.02*height}}/>

                            <SegmentControl
                                values={['فارسی', 'English']}
                                badges={[0,0]}
                                selectedIndex={this.state.index}
                                tabTextStyle={{fontFamily:'B Koodak',color:'#4d13d1'}}
                                tabBadgeStyle={{fontFamily:'B Koodak'}}
                                height={30}
                                onTabPress={(index) => {this.change_language(index)}}
                                borderRadius={5}
                                tabsContainerStyle={{margin: 7,borderColor:'#4d13d1'}}
                                animationType={'none'}
                                activeTabStyle={{backgroundColor:'#4d13d1'}}
                                tabStyle={{borderColor:'#4d13d1'}}
                            />
                            <View style={{height:0.02*height}}/>

                            <TouchableHighlight
                                underlayColor="white"

                                style={{borderColor:'#4d13d1',borderRadius:7,borderWidth: 2,width:0.5*width,flexDirection:'row',alignItems:'center',justifyContent:'center'}}
                                                onPress={()=>
                                                {
                                                    this.props.navigator.switchToTab({
                                                        tabIndex: 1 // (optional) if missing, this screen's tab will become selected
                                                    });

                                                }

                                                }>
                                <Text style={styles.setting}>{this.language()['done']}</Text>
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
        backgroundColor: '#F5FCFF',
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
        fontFamily:'B Koodak',color: '#4d13d1',width:0.2*width,textAlign:'center',marginTop: 23
    },
    setting:{
        fontFamily:'B Koodak',color: '#4d13d1',width:0.5*width,textAlign:'center',margin:7,fontSize:17
    }
});
module.export = Choose_language;
