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
    Dimensions,
    Animated,
    TextInput,
    AsyncStorage,
    KeyboardAvoidingView, ScrollView,Alert,
    FlatList, ImageBackground
} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';
import SegmentControl from 'react-native-segment-controller';
import Picker from 'react-native-picker';
import  moment from 'jalali-moment';
import Icon from 'react-native-vector-icons/EvilIcons';
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
export default class Doctor_reminder extends Component {
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
            navBarTextFontFamily:'B Koodak',
            statusBarColor:'#007e8e'
        });
        this.state = {
            language:'fa',
            progress: new Animated.Value(0),
            index:1,
            index_ago:0,
            labelStart:'از تاریخ',
            labelEnd:'تا تاریخ',
            label_count:'انتخاب',
            label_period:'انتخاب',
            newReminder:true,
            minutes_before:1,
            events:[],
            permission:false,
            drug_name:'',
            badges:0,
            calendarId: ''

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
                            this.setState({index:0});
                            break;
                        default:
                            this.setState({index : 0});

                    }

                    this.setState({labelStart:this.language()['from_date'],
                        labelEnd:this.language()['to_date'],
                        label_count:this.language()['choose'],
                        label_period:this.language()['choose'],})
                }else {
                    AsyncStorage.setItem('language',JSON.stringify('fa'))
                }
            })
        }
// this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'turn_back') { // this is the same id field from the static navigatorButtons definition
                this.props.navigator.push({
                    screen: 'com.koalasolution.Reminder',
                    title: this.language()['reminders'],
                    navigatorStyle: {navBarBackgroundColor:'#2c82c9'}, // override the navigator style for the pushed screen (optional)

                });
            }

        }
    }
    componentWillMount(){

        AsyncStorage.getItem('language',(err,store)=>{
            if(store){
                this.setState({language:JSON.parse(store)})
                switch(JSON.parse(store)) {
                    case 'fa':
                        this.setState({index : 0});
                        break;
                    case 'en':
                        this.setState({index:0});
                        break;
                    default:
                        this.setState({index : 0});

                }
                this.setState({labelStart:this.language()['from_date'],
                    labelEnd:this.language()['to_date'],
                    label_count:this.language()['choose'],
                    label_period:this.language()['choose'],})
            }
        })
        // this.setState({events:[]});
        let moz = [];

        RNCalendarEvents.authorizeEventStore();
        Promise.resolve(RNCalendarEvents.findCalendars()).then((response) => {

            console.log(response,'jjjjjjjjjj')
            console.log(response,'jjjjjjjllllljjj')
            if(response.length>0){
                this.setState({calendarId:response[0].id})
                console.log(response[0].id,'laqqqqqqqq')

            }
        });

        // AsyncStorage.clear();
        // this.setState({label_count:this.language()['in_day'][0],
        // label_period:this.language()['period_'][0]})
        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, stores) => {
                stores.map((result, i, store) => {
                    let value = store[i][1];
                    let key = store[i][0];
                    console.log(key,'jfjdsfjd137');
                    let event_list= this.state.events;
                    let count= this.state.badges;

                    // if (key.includes('timeSelected')) {
                    //     this.setState({deliveryTimeM: testes + new Date()});
                    //     console.log(this.state.deliveryTimeM, 'somewhooooo2');
                    //
                    // }

                    if (key.includes('doctor_')) {


                        // this.sendToServer(moz)
                        let info = JSON.parse(value);
                        console.log(info['id'].toString(),'lokkkkkkkkkk');
                        moz.push(info);
                        this.setState({events:moz})




                    }


                })


            });
            // console.log(JSON.stringify(moz), 'zaqwsxcderfvbgt');


        });

        console.log(this.state.events.length,'ssssooooo')
    }
    checkValidity(){
        console.log(this.state.events,'aslwidiwidjiw')

        let period = this.language()['period_'].indexOf(this.state.label_period[0]);
        let in_day = this.language()['in_day'].indexOf(this.state.label_count[0]);
        let date = this.calculate();
        let name = this.state.drug_name;
        let selectedFormat = "jYYYY/jMM/jDD";
        let rrr=moment().format(selectedFormat);
        let d0 = new Date(rrr);
        let d1 = new Date(date['thisDay']);
        let d2 = new Date(date['nextDay']);
        // let moment = require('moment-jalaali');
        console.log(d2>d1)
        console.log(d1>d0)
        console.log(d2>d0)
        console.log(period,in_day,date,name,'isValidate?')
        if(period>-1 && in_day>-1 && date['thisDay'] && date['nextDay'] && name.length > 0 && d2>d1 && d2>d0){
            console.log('yes it is')
            this.setState({permission:true})
        }else {
            this.setState({permission:false})

        }
        console.log(this.state.permission,'ldfklfd')

    }
    selectFrom(){
        let months= [
            {
                1: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
            },
            {
                2: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
            },
            {
                3: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
            },
            {
                4: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
            },
            {
                5: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
            },
            {
                6: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
            },
            {
                7: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            },
            {
                8: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            },
            {
                9: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            },
            {
                10: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            },
            {
                11: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            },
            {
                12: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
            }
        ];
        let data = [
            {1397:months},
            {1398:months},
            {1399:months},
            {1400:months},
            {1401:months},
            {1402:months},
            {1403:months},
            {1404:months},
            {1405:months},
            {1406:months},
            {1407:months},
            {1408:months},
            {1409:months},
            {1410:months},
            {1411:months},
            {1412:months},
            {1413:months},
            {1414:months},

        ];
        // for(var i=0;i<100;i++){
        //     data.push(i);
        // }
        console.log(data,'nanaanwmklmkm');


        Picker.init({
            pickerTextEllipsisLen:11,
            wheelFlex:[1,1,1],
            pickerFontSize:17,
            pickerConfirmBtnText:this.language()['done'],
            pickerCancelBtnText:this.language()['cancel'],
            pickerTitleText:this.language()['from_date'],
            pickerData: data,
            selectedValue: [59],
            isLoop:true,
            onPickerConfirm: data => {
                console.log(data,'gogogoog1');
                this.setState({CuStYear:data[0]});
                this.setState({CuStMonth:data[1]});
                this.setState({CuStDay:data[2]});
                this.setState({labelStart:data[0]+'/' +data[1]+'/'+ data[2] })
                this.checkValidity()

            },
            onPickerCancel: data => {
                console.log(data);
            },
            onPickerSelect: data => {
                console.log(data);
            }
        });
        Picker.show();
    }
    selectTo(){
        let months= [
            {
                1: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
            },
            {
                2: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
            },
            {
                3: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
            },
            {
                4: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
            },
            {
                5: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
            },
            {
                6: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
            },
            {
                7: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            },
            {
                8: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            },
            {
                9: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            },
            {
                10: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            },
            {
                11: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            },
            {
                12: [1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
            }
        ];
        let data = [
            {1397:months},
            {1398:months},
            {1399:months},
            {1400:months},
            {1401:months},
            {1402:months},
            {1403:months},
            {1404:months},
            {1405:months},
            {1406:months},
            {1407:months},
            {1408:months},
            {1409:months},
            {1410:months},
            {1411:months},
            {1412:months},
            {1413:months},
            {1414:months},

        ];
        // for(var i=0;i<100;i++){
        //     data.push(i);
        // }
        console.log(data,'nanaanwmklmkm');


        Picker.init({
            pickerTextEllipsisLen:11,
            pickerConfirmBtnText:this.language()['done'],
            pickerCancelBtnText:this.language()['cancel'],
            pickerTitleText:this.language()['to_date'],
            wheelFlex:[1,1,1],
            pickerFontSize:17,
            pickerData: data,
            isLoop:true,

            onPickerConfirm: data => {
                console.log(data,'gogogoog');
                this.setState({CuEnYear:data[0]});
                this.setState({CuEnMonth:data[1]});
                this.setState({CuEnDay:data[2]});
                this.setState({labelEnd:data[0]+'/' +data[1]+'/'+ data[2] })
                this.checkValidity()

            },
            onPickerCancel: data => {
                console.log(data);
            },
            onPickerSelect: data => {
                console.log(data);
            }
        });
        Picker.show();
    }
    usageInDay(){



        Picker.init({
            pickerTextEllipsisLen:20,
            pickerConfirmBtnText:this.language()['done'],
            pickerCancelBtnText:this.language()['cancel'],
            pickerTitleText:this.language()['usage_in_day'],
            pickerFontSize:17,
            wheelFlex:[0,1,0],
            pickerData: this.language()['in_day'],
            onPickerConfirm: data => {
                this.setState({label_count:data})
                this.checkValidity()

            },
            onPickerCancel: data => {
                console.log(data);
            },
            onPickerSelect: data => {
                console.log(data);
            }
        });
        Picker.show();
    }
    periodOfUsage(){



        Picker.init({
            pickerTextEllipsisLen:20,
            pickerConfirmBtnText:this.language()['done'],
            pickerCancelBtnText:this.language()['cancel'],
            pickerTitleText:this.language()['period_usage'],
            pickerFontSize:17,
            wheelFlex:[0,1,0],
            pickerData: this.language()['period_'],
            onPickerConfirm: data => {
                this.setState({label_period:data})
                console.log(data,'dlfkdlfldkf')
                this.checkValidity()

            },
            onPickerCancel: data => {
                console.log(data);
            },
            onPickerSelect: data => {
                console.log(data);
            }
        });
        Picker.show();
    }
    language() {

        let fa = {
            reminders:'لیست یادآورنده ها',
            new_reminder:'یادآورنده جدید',
            drug_name: 'نام پزشک',
            start_date_usage: 'تاریخ شروع درمان',
            end_date_usage: 'تاریخ پایان درمان',
            usage_in_day:'تعداد مراجعه در طی درمان(با نظر پزشک)',
            period_usage:'طول دوره درمان',
            minutes_before:'از چند روز قبل یادآوری شود؟',
            save:'ذخیره',
            min_15:'یک روز قبل',
            min_30:'دو روز قبل',
            nothing:'یادآوری برای نمایش وجود ندارد',
            done:'تایید',
            cancel:'انصراف',
            choose:'انتخاب',
            from_date:'از تاریخ',
            to_date:'تا تاریخ',
            in_day:[
                ' یکبار',' دوبار',' سه بار',' چهار بار',' پنج بار',
            ],
            period_:['پنج روز در میان','ده روز در میان','پانزده روز در میان',' بیست روز درمیان'],
            remove_reminder:'حذف یادآورنده...',
            sure:'آیا مطمین هستید؟',
            yes:'بله',
            no:'خیر',
            alert:'ورودی ها کامل نیستند',
            turn:'نوبت',
            om:'ام'
        };
        let en = {
            reminders:'reminders',
            new_reminder:'new_reminder',
            drug_name: 'Doctor name',
            start_date_usage: 'Date of treatment start',
            end_date_usage: 'Date of the end of treatment',
            usage_in_day:'Number of visits during treatment (with doctor\'s opinion)',
            period_usage:'Period of treatment',
            minutes_before:'Remember from a few days ago',
            save:'Save',
            min_15:'one day before',
            min_30:'two day before',
            nothing:"Empty reminder",
            done:'done',
            from_date:'from date',
            to_date:'to date',
            cancel:'cancel',
            choose:'choose',
            in_day:[
                'Once','Twice','Three times','Four times','Five times'
            ],
            period_:['Five days in between','Ten days in between','Fifteen days in between','Twenty days in between'],
            remove_reminder:'remove reminder...',
            sure:'Are you sure?',
            yes:'yes',
            no:'no',
            alert:'Inputs are not complete',
            turn:'turn',
            om:' '
        };
        let final = {};
        // console.log(this.state.language, ';kfjgfj')
        switch (this.state.language) {
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
    calculate(){

        let fromDate = moment(this.state.CuStYear+'/'+this.state.CuStMonth+'/'+this.state.CuStDay, 'jYYYY/jM/jD').format('YYYY-M-D');
        let toDate = moment(this.state.CuEnYear+'/'+this.state.CuEnMonth+'/'+this.state.CuEnDay, 'jYYYY/jM/jD').format('YYYY-M-D');

        let dd = {thisDay: fromDate, nextDay: toDate};

        return dd


    }
    save_reminder(){
        console.log('hi',this.calculate());
        console.log('hi2',this.state.label_period);
        console.log('hi3',this.state.label_count);
        console.log('hi4',this.state.drug_name);
        console.log('hi5',this.state.minutes_before);
        console.log('hi6',this.language()['period_'].indexOf(this.state.label_period[0]));
        console.log('hi7',this.language()['in_day'].indexOf(this.state.label_count[0]));
        // console.log('dlkdlfklf',RNCalendarEvents.authorizationStatus());
        let oko = parseInt(this.language()['in_day'].indexOf(this.state.label_count[0]))+1;
        console.log(oko,'hi11');

            Promise.resolve(RNCalendarEvents.saveEvent(this.state.drug_name,
                {
                    startDate: this.calculate()['thisDay']+'T05:30:00.000Z',
                    endDate: this.calculate()['thisDay']+'T16:30:00.000Z',
                    calendarId: this.state.calendarId,
                    recurrenceRule: {
                        duration:null,
                        frequency: 'daily',
                        occurrence: parseInt(this.language()['in_day'].indexOf(this.state.label_period[0]))+1,
                        interval: (parseInt(this.language()['period_'].indexOf(this.state.label_period[0]))+1)*5,
                        endDate: this.calculate()['nextDay']+'T05:30:00.000Z',
                    },
                    alarms: [{
                        date: -1*parseInt(this.state.minutes_before)*3600
                    }]
                })).then(JSON.parse).then((response) => {
                let id = 'doctor_'+ response;
                let event_details={id:response,start:this.calculate()['thisDay'],end:this.calculate()['nextDay'],title:this.state.drug_name}
                AsyncStorage.setItem(id,JSON.stringify(event_details));
                console.log(id,'dkdkkdkd');

                this.refreshEvents();
                Navigation.showModal({
                    screen: 'com.koalasolution.Reminder_saved', // unique ID registered with Navigation.registerScreen
                    animationType: 'none', // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
                    overrideBackPress: false,// true / false, (Android only), prevents back button and hardware back button from hiding the dialog on Android, instead the [navigator event](https://wix.github.io/react-native-navigation/#/screen-api?id=setonnavigatoreventcallback) 'backPress' will be sent (optional)
                    navigatorStyle: {
                        navBarHidden: true, // make the nav bar hidden
                    }
                });
            })








    }
    changeDate(date){


        let fromDate = moment(date, 'YYYY-M-D').format('jYYYY/jM/jD');
        console.log(fromDate,'dkfkfk3');

        return fromDate
    }
    deleteEvent(id){
        console.log(id,'kfkffkfk')
        AsyncStorage.removeItem('reminder_'+id);
        RNCalendarEvents.removeEvent(id.toString());
        let moz = [];

        // this.setState({events:[]});
        AsyncStorage.getAllKeys((err, keys) => {

            AsyncStorage.multiGet(keys, (err, stores) => {
                stores.map((result, i, store) => {
                    let value = store[i][1];
                    let key = store[i][0];
                    console.log(key,'jfjdsfjd137');
                    let event_list= this.state.events;
                    let count = this.state.badges;

                    // if (key.includes('timeSelected')) {
                    //     this.setState({deliveryTimeM: testes + new Date()});
                    //     console.log(this.state.deliveryTimeM, 'somewhooooo2');
                    //
                    // }

                    if (key.includes('doctor_')) {


                        // this.sendToServer(moz)
                        let info = JSON.parse(value);
                        console.log(info['id'].toString(),'lokkkkkkkkkk');
                        moz.push(info);
                        this.setState({events:moz,refresh:!this.state.refresh})
                        Navigation.showModal({
                            screen: 'com.koalasolution.Reminder_deleted', // unique ID registered with Navigation.registerScreen
                            animationType: 'none', // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
                            overrideBackPress: false,// true / false, (Android only), prevents back button and hardware back button from hiding the dialog on Android, instead the [navigator event](https://wix.github.io/react-native-navigation/#/screen-api?id=setonnavigatoreventcallback) 'backPress' will be sent (optional)
                            navigatorStyle: {
                                navBarHidden: true, // make the nav bar hidden
                            }
                        });

                    }


                })

            });



        });
        console.log(moz, 'zaqwsxcderfvbgt123');




    }
    refreshEvents(){
        // this.setState({events:[]});
        let moz = [];

        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, stores) => {
                stores.map((result, i, store) => {
                    let value = store[i][1];
                    let key = store[i][0];
                    console.log(key,'jfjdsfjd137');
                    let event_list= this.state.events;
                    let count = this.state.badges;

                    // if (key.includes('timeSelected')) {
                    //     this.setState({deliveryTimeM: testes + new Date()});
                    //     console.log(this.state.deliveryTimeM, 'somewhooooo2');
                    //
                    // }

                    if (key.includes('doctor_')) {


                        // this.sendToServer(moz)
                        let info = JSON.parse(value);
                        console.log(info['id'].toString(),'lokkkkkkkkkk');
                        moz.push(info);
                        this.setState({badges:count})
                        console.log(moz,'aslwidiwidjiw799');
                        this.setState({events:moz,refresh:!this.state.refresh})


                    }


                })

            });

        });
        // console.log(JSON.stringify(moz), 'zaqwsxcderfvbgt');


    }
    render() {

        return (
            <KeyboardAvoidingView style={styles.container}>
                <SegmentControl
                    values={[this.language()['new_reminder'], this.language()['reminders']]}
                    badges={[0,0]}
                    selectedIndex={this.state.index}
                    tabTextStyle={{fontFamily:'B Koodak'}}
                    tabBadgeStyle={{fontFamily:'B Koodak'}}
                    height={30}
                    onTabPress={(index) => {this.setState({index:index}),console.log(this.state.index,'ljfhfhfjks')}}
                    borderRadius={5}
                    tabsContainerStyle={{margin: 7}}
                />
                <ScrollView>
                    <View style={this.state.index === 0  ? styles.container : styles.noView}>
                        <View style={styles.box}>
                            <Text style={styles.titles}>{this.language()['drug_name']}</Text>

                            <TextInput
                                ref={input => {
                                    this.textInput = input
                                }}
                                style={styles.input}
                                onChangeText={(text) => {this.setState({drug_name: text});
                                    this.checkValidity()
                                }}
                            >
                            </TextInput>

                        </View>
                        <View style={styles.tah_taghari}>
                            <TouchableHighlight style={{borderRadius:7,borderWidth:2,margin:3,borderColor:'#1c375c'}}
                                                underlayColor={'white'}
                                                onPress={()=>this.selectFrom()}>
                                <Text style={{margin:10,fontFamily:'B Koodak',color:'#1c375c'}}>{this.state.labelStart}</Text>
                            </TouchableHighlight>
                            <Text style={styles.titles2}>{this.language()['start_date_usage']}</Text>

                        </View>
                        <View style={styles.tah_taghari}>

                            <TouchableHighlight style={{borderRadius:7,borderWidth:2,margin:3,borderColor:'#1c375c'}}
                                                underlayColor={'white'}
                                                onPress={()=>this.selectTo()}>
                                <Text style={{margin:10,fontFamily:'B Koodak',color:'#1c375c'}}>{this.state.labelEnd}</Text>
                            </TouchableHighlight>
                            <Text style={styles.titles2}>{this.language()['end_date_usage']}</Text>

                        </View>
                        <View style={styles.tah_taghari}>
                            <TouchableHighlight style={{borderRadius:7,borderWidth:2,margin:3,borderColor:'#1c375c'}}
                                                underlayColor={'white'}
                                                onPress={()=>this.usageInDay()}>
                                <Text style={{margin:10,fontFamily:'B Koodak',color:'#1c375c'}}>{this.state.label_count}</Text>
                            </TouchableHighlight>
                            <Text style={styles.titles2}>{this.language()['usage_in_day']}</Text>

                        </View>
                        <View style={styles.tah_taghari}>
                            <TouchableHighlight style={{borderRadius:7,borderWidth:2,margin:3,borderColor:'#1c375c'}}
                                                underlayColor={'white'}
                                                onPress={()=>this.periodOfUsage()}>
                                <Text style={{margin:10,fontFamily:'B Koodak',color:'#1c375c'}}>{this.state.label_period}</Text>
                            </TouchableHighlight>
                            <Text style={styles.titles2}>{this.language()['period_usage']}</Text>

                        </View>

                        <View style={styles.box}>
                            <Text style={styles.titles}>{this.language()['minutes_before']}</Text>
                            <View style={{flexDirection:'row',width: 0.9*width,backgroundColor:'white',borderRadius:7,alignItems:'center',marginBottom:5}}>
                                <TextInput
                                    ref={input => {
                                        this.textInput = input
                                    }}
                                    style={styles.input2}
                                    keyboardType='number-pad'
                                    placeholder={''}
                                    onChangeText={(text) => this.setState({minutes_before: text})}
                                >
                                </TextInput>

                                <SegmentControl
                                    values={[this.language()['min_15'],this.language()['min_30']]}
                                    badges={[0,0]}
                                    selectedIndex={this.state.index_ago}
                                    tabTextStyle={this.state.language === 'fa' ? {fontFamily:'B Koodak'}:null}
                                    tabBadgeStyle={{fontFamily:'B Koodak'}}
                                    height={30}
                                    onTabPress={(index) => {
                                        switch (index) {
                                            case 0:
                                                this.setState({index_ago:index,minutes_before:1});
                                                break;
                                            case 1:
                                                this.setState({index_ago:index,minutes_before:2});
                                                break;
                                            default:
                                                this.setState({index_ago:0,minutes_before:0});
                                        }
                                        console.log(this.state.index,'ljfhfhfjks')}}
                                    borderRadius={5}
                                    tabsContainerStyle={{margin: 1,width:0.55*width}}
                                />


                            </View>

                        </View>

                        <TouchableHighlight
                            underlayColor={this.state.permission ? "#2c82c9":'#bdc3c7'}

                            style={this.state.permission ? styles.buttonOut1 : styles.buttonOut1No}
                            onPress={()=>{this.state.permission ?
                                this.save_reminder() :
                                alert(this.language()['alert'])
                            }}>
                            <Text style={{        fontFamily: 'B Koodak', color: 'white', textAlign: 'center', marginTop: 13, marginBottom: 13
                            }}>{this.language()['save']}</Text>
                        </TouchableHighlight>
                        <View style={{height:0.05*height}}/>
                    </View>
                    <View style={this.state.index === 1  ? styles.container : styles.noView}>
                        <FlatList
                            keyExtractor={(item, index) => item + index}
                            data={this.state.events}
                            extraData={this.state.refresh}
                            style={{ width: width }}
                            renderItem={({ item, index }) => (
                                <View style={{width:width,alignItems:'center',flexDirection:'row',justifyContent:'center',margin:3}}>
                                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#c5eff7',borderRadius:7,width:0.95*width}}>
                                        <TouchableHighlight
                                            underlayColor={'red'}

                                            onPress={()=>Alert.alert(
                                                this.language()['remove_reminder'],
                                                this.language()['sure'],
                                                [
                                                    {text: this.language()['yes'], onPress: () => this.deleteEvent(item.id)},
                                                    {text: this.language()['no'], onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

                                                ],
                                                {cancelable: false}
                                            )}
                                            style={{backgroundColor:'red',borderRadius:7,alignItems:'center',justifyContent:'center'}}>
                                            <Icon name="trash" size={23} style={{margin: 19}}color="white"/>

                                        </TouchableHighlight>
                                        <View style={{width:0.7*width,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                            <View style={{width:0.7*width,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                                <Text style={styles.titlesF}>{item.title}</Text>
                                                <Text style={styles.titlesN}>{this.language()['drug_name']}</Text>
                                            </View>
                                            <View style={{width:0.7*width,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                                <Text style={styles.titlesF}>{this.changeDate(item.start)}</Text>
                                                <Text style={styles.titlesN}>{this.language()['start_date_usage']}</Text>
                                            </View>
                                            <View style={{width:0.7*width,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

                                                <Text style={styles.titlesF}>{this.changeDate(item.end)}</Text>
                                                <Text style={styles.titlesN}>{this.language()['end_date_usage']}</Text>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                        <View style={this.state.events.length > 0 ? {width:0,height:0} : {width:width,height:width}}>
                            <Text style={styles.titles}>{this.language()['nothing']}</Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        width:width
    },
    noView:{
        height:0,width:0
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
    box:{flexDirection:'column',width: 0.93*width,backgroundColor:'white',borderRadius:7,alignItems:'center',borderWidth:2,borderColor:'#2c82c9',marginBottom:5},
    input: {
        width: 0.85*width,
        fontFamily: 'B Koodak',
        backgroundColor: 'white',
        textAlign: 'center',
        borderRadius: 7,
        borderBottomWidth:2,
        borderColor: '#ff0064',
        marginBottom: 7,


    },   input2: {
        width: 0.3*width,

        fontFamily: 'B Koodak',
        backgroundColor: 'white',
        textAlign: 'center',
        borderRadius: 7,
        borderBottomWidth:2,
        marginBottom: 7,
        borderColor: '#ff0064',
        marginRight:7,


    },
    buttonOut: {
        borderRadius: 7,
        borderWidth:2,
        borderColor:'#2c82c9',
        justifyContent: 'center',
        alignItems: 'center',
        margin:3
    },
    buttonOut1No: {
        width: 0.8 * width,
        borderRadius: 7,
        borderWidth:2,
        borderColor:'white',
        margin: 7,
        flexDirection: 'row',
        backgroundColor: '#bdc3c7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonOut1: {
        width: 0.8 * width,
        borderRadius: 7,
        borderWidth:2,
        borderColor:'white',
        margin: 7,
        flexDirection: 'row',
        backgroundColor: '#00b16a',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titles: {
        fontFamily: 'B Koodak', color: 'black', textAlign: 'center', margin: 3
    },
    titlesN: {
        fontFamily: 'B Koodak', color: 'black', textAlign: 'right', margin: 3,width:'30%'
    },
    titlesF: {
        fontFamily: 'B Koodak', color: 'black', textAlign: 'center', margin: 3,width:'70%'
    },
    titles3: {
        fontFamily: 'B Koodak', color: '#2c82c9',borderColor:'#2c82c9',padding: 5, textAlign: 'center',borderRadius:7,borderWidth:0
    },
    titles2: {
        fontFamily: 'B Koodak', color: 'black', textAlign: 'right', marginTop: 13, marginBottom: 13,width:0.7*width
    },
    tah_taghari:{marginTop:17,marginBottom:7,flexDirection: 'row',justifyContent: 'center',alignItems:"center",
        borderBottomWidth:2, borderColor: '#1c375c',paddingBottom: 7,width:0.93*width}
});
module.export = Doctor_reminder;
