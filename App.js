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
    Modal,
    Dimensions,
    View,
    TextInput,
    BackHandler,
    TouchableHighlight,
    ImageBackground,
    AsyncStorage,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { Navigation } from 'react-native-navigation';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import moment from "jalali-moment";
import SegmentControl from "react-native-segment-controller";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
let width= Dimensions.get('window').width;
let height= Dimensions.get('window').height;
export default class App extends Component {
    constructor(props) {

        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

        this.state = {
            language:'fa',
            modal_visible:false,
            index:0
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

    handleBackPress = () => {
        if (this.backPressed && this.backPressed > 0) {
            this.props.navigator.popToRoot({ animated: false });
            return false;
        }

        this.backPressed = 1;
        this.props.navigator.showSnackbar({
            text: 'برای خروج مجددا دکمه بازگشت را لمس کنید',
            duration: 'long',
        });
        return true;
    }

    componentWillMount() {
        Navigation.dismissAllModals({
            animationType: 'none' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
        });
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
            }else {
                AsyncStorage.setItem('language',JSON.stringify('fa'))
            }
        })
    }



    language(){
        let fa={notify:'اطلاع رسانی',education:'آموزش ها',clinicalInfo:'اطلاعات بیمار',reminders:'یادآورنده ها',language_choose:'زبان خود را انتخاب کنید',done:'خب'};
        let en={notify:'Notices',education:'Educations',clinicalInfo:'Patient information',reminders:'Reminders',language_choose:'choose your language',done:'done'};
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
        let i = 1;
      myLoop();

      function myLoop () {           //  create a loop function
          setTimeout(function () {    //  call a 3s setTimeout when the loop is called
              console.log('zoode...'+i,'ssswwwqqqaaa')
              i++;                     //  increment the counter
              if (i < 10) {            //  if the counter < 10, call the loop function
                  myLoop();             //  ..  again which will trigger another
              }                        //  ..  setTimeout()
          }, 3000)
      }
      let width= Dimensions.get('window').width;
      let height= Dimensions.get('window').height;
    console.log('bmbbb,,mb,b',this.language());
    console.log('bmbbb,,mb,b',RNCalendarEvents.authorizationStatus()
    );
      let selectedFormat = "jYYYY/jMM/jDD";
      // let moment = require('moment-jalaali');
      let rrr=moment().format(selectedFormat);

      return (

      <View style={{flexDirection: 'column',justifyContent:'center',alignItems:'center',flex: 1,backgroundColor: '#65a9df'}}>
          <ImageBackground source={require('./qaz.png')} style={{
              alignItems: 'center',
              width:width,
              height:height,
              blurRadius: 0.2,
              justifyContent:'center',
          }}>


          <View>

              <Animatable.View
                  animation="pulse"
                  duration={2000}
                  iterationCount={'infinite'} direction="alternate">

              <TouchableHighlight
                  underlayColor="rgba(0,0,0,0)"

                  onPress={()=>{
                  this.props.navigator.push({
                      screen: 'com.koalasolution.Hospital',
                      title: this.language()['notify'],
                      navigatorStyle: {navBarBackgroundColor:'#de8cc0',navBarTitleFontFamily:'B koodak',titleColor:'white'},
                      // override the navigator style for the pushed screen (optional)

                  });
              console.log('slslkslk','dkdkldk')}
              }>
                  <ImageBackground source={require('./new_white.png')} style={{
                      alignItems: 'center',
                      width:0.3*width,
                      height:0.3*width,
                      justifyContent:'center',
                      flexDirection:'row'
                  }}>

                      <Text style={styles.titles}>{this.language()['notify']}</Text>
                      <Icon2 name="notification" size={23} style={{marginTop: 19}}color='#4d13d1'>
                      </Icon2>
                  </ImageBackground>

              </TouchableHighlight>
              </Animatable.View>
          </View>
          <View style={{flexDirection:'row'}}>
              <Animatable.View
                  animation="pulse"
                  duration={1500}

                  iterationCount={'infinite'} direction="alternate">

              <TouchableHighlight
                  underlayColor="rgba(0,0,0,0)"

                  onPress={()=>{
                      this.props.navigator.push({
                          screen: 'com.koalasolution.Patient_info',
                          title: this.language()['clinicalInfo'],
                          navigatorStyle: {navBarBackgroundColor:'#f62459'}, // override the navigator style for the pushed screen (optional)

                      });
                  }}>
                  <ImageBackground source={require('./new_white.png')} style={{
                      alignItems: 'center',
                      width:0.3*width,
                      height:0.3*width,
                      justifyContent:'center',
                      flexDirection:'row'

                  }}>
                      <Text style={styles.titles}>{this.language()['clinicalInfo']}</Text>
                      <Icon name="clipboard-check-outline" size={23} style={{marginTop: 19}}color="#4d13d1">
                      </Icon>
                  </ImageBackground>

              </TouchableHighlight>
              </Animatable.View>

              <ImageBackground source={require('./sun__.png')} style={{
                  alignItems: 'center',
                  width:0.3*width,
                  height:0.3*width,
                  margin:7
              }}>
                  <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',width:0.3*width,height:0.3*width}}>
                  <ImageBackground source={require('./jish.png')} style={{
                      alignItems: 'center',
                      width:0.2*width,
                      height:0.2*width,
                      margin:7
                  }}/>
                  </View>
              </ImageBackground>

              <Animatable.View
                  animation="pulse"
                  duration={1100}

                  iterationCount={'infinite'} direction="alternate">

              <TouchableHighlight
                  underlayColor="rgba(0,0,0,0)"

                  onPress={()=>{
                      this.props.navigator.push({
                          screen: 'com.koalasolution.Reminder',
                          title: this.language()['reminders'],
                          navigatorStyle: {navBarBackgroundColor:'#2c82c9'}, // override the navigator style for the pushed screen (optional)

                      });
                      }
                  }>
                  <ImageBackground source={require('./new_white.png')} style={{
                      alignItems: 'center',
                      width:0.3*width,
                      height:0.3*width,
                      justifyContent:'center',
                      flexDirection:'row'
                  }}>
                      <Text style={styles.titles}>{this.language()['reminders']}</Text>
                      <Icon name="alarm" size={23} style={{marginTop: 19}}color="#4d13d1">
                      </Icon>
                  </ImageBackground>

              </TouchableHighlight>
              </Animatable.View>
          </View>
          <View>
              <Animatable.View
                  animation="pulse"
                  iterationCount={'infinite'} direction="alternate">

              <TouchableHighlight
                  underlayColor="rgba(0,0,0,0)"

                  onPress={()=>{
                      this.props.navigator.push({
                          screen: 'com.koalasolution.Education',
                          title: this.language()['education'],
                          navigatorStyle: {navBarBackgroundColor:'#b2733a'},

                      });
                      console.log('slslkslk','dkdkldk')}
                  }>
                  <ImageBackground source={require('./new_white.png')} style={{
                      alignItems: 'center',
                      width:0.3*width,
                      height:0.3*width,
                      justifyContent:'center',
                      flexDirection:'row'
                  }}>
                      <Text style={styles.titles}>{this.language()['education']}</Text>
                      <Icon name="teach" size={23} style={{marginTop: 19}}color="#4d13d1">
                      </Icon>
                  </ImageBackground>

              </TouchableHighlight>
              </Animatable.View>

          </View>
              <View style={{height:0.07*height}}/>
              {/*<TouchableHighlight*/}
                  {/*underlayColor="rgba(0,0,0,0)"*/}
                  {/*style={{borderRadius:7,borderWidth:2,borderColor:'#4d13d1'}}*/}
                  {/*onPress={()=>{*/}
                      {/*this.setState({modal_visible:true})*/}
                  {/*}}>*/}
                  {/*<Text style={styles.titles}>{this.language()['language_choose']}>*/}
                      {/*<Icon3 name="language" size={37} style={{marginLeft: 19}}color="#4d13d1"/>*/}
                  {/*</Text>*/}



              {/*</TouchableHighlight>*/}
          </ImageBackground>
          <Modal
              animationType="none"
              transparent={true}
              visible={this.state.modal_visible}
              onRequestClose={() => {
                  alert('Modal has been closed.');
              }}>
          <View style={{backgroundColor: 'rgba(20, 20, 20, 0.7)',width:width,height:height,flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <View style={{backgroundColor:'white',width:0.7*width,height:0.5*width,borderRadius:7,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
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

                  <TouchableHighlight style={{borderColor:'#4d13d1',borderRadius:7,borderWidth: 2,width:0.5*width,flexDirection:'row',alignItems:'center',justifyContent:'center'}}
              onPress={()=>this.setState({modal_visible:false})}>
                  <Text style={styles.setting}>{this.language()['done']}</Text>
              </TouchableHighlight>
              </View>
          </View>
          </Modal>
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
    fontFamily:'B Koodak',color: '#4d13d1',width:0.22*width,textAlign:'center',marginTop: 23
    },
    setting:{
        fontFamily:'B Koodak',color: '#4d13d1',width:0.5*width,textAlign:'center',margin:7
    }
});
module.export = App;
