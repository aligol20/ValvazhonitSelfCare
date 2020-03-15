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
    ScrollView,
    Dimensions,
    Image,
    View,
    TextInput,
    Switch,
    TouchableHighlight,
    AsyncStorage,
    KeyboardAvoidingView
} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';
import {Navigation} from 'react-native-navigation';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import BaseInfo from './baseInfo';
import SegmentControl from "react-native-segment-controller";

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
export default class ClinicalInfo extends Component {


    constructor(props) {

        super(props);
        this.props.navigator.setStyle({
            navBarTextColor: 'white',
            navBarBlur: true,
            topBarBorderColor: 'red',
            navBarTextFontFamily: 'B Koodak',
            statusBarTextColorScheme: 'light',
            statusBarColor: '#c60c4b',

        });


        this.state = {
            language: 'en',
            active: false,
            sign: '',
            weight: '',
            resume: '',
            medicine: '',
            antibiotic: '',
            pregnant: 0,
            chos: 1,
            active_b: false,
            sign_b: '',
            weight_b: '',
            resume_b: '',
            medicine_b: '',
            antibiotic_b: '',
            pregnant_b: false,
            edit_b: true,
            edit: true,
            husband_b: 0

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
                icon: require('./shopping-list.png'), // if you want an image button
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
            AsyncStorage.getItem('language', (err, store) => {
                if (store) {
                    console.log(store, 'ddldldldldllddkfklfe')

                    this.setState({language: JSON.parse(store)})
                    switch (JSON.parse(store)) {
                        case 'fa':
                            this.setState({index: 0});
                            break;
                        case 'en':
                            this.setState({index: 1});
                            break;
                        default:
                            this.setState({index: 0});

                    }
                } else {
                    AsyncStorage.setItem('language', JSON.stringify('fa'))
                }
            })
        }

        // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'turn_back') { // this is the same id field from the static navigatorButtons definition
                this.props.navigator.push({
                    screen: 'com.koalasolution.Patient_info',
                    navigatorStyle: {navBarBackgroundColor: '#f62459'}, // override the navigator style for the pushed screen (optional)


                });
            }

        }
    }

    componentWillMount() {
        AsyncStorage.getItem('language', (err, store) => {
            if (store) {
                console.log(store, 'o00o0o00o0o00o0o0')

                this.setState({language: JSON.parse(store)})
                switch (JSON.parse(store)) {
                    case 'fa':
                        this.setState({index: 0});
                        break;
                    case 'en':
                        this.setState({index: 1});
                        break;
                    default:
                        this.setState({index: 0});

                }
            }
        })
        AsyncStorage.getItem('medicalInfo', (err, store) => {
            if (store) {

                let raw = JSON.parse(store);
                console.log(raw, 'o0o09899u89y998y9y')
                this.setState({
                    sign: raw['sign'],
                    weight: raw['weight'],
                    resume: raw['resume'],
                    medicine: raw['medicine'],
                    antibiotic: raw['antibiotic'],
                    pregnant: raw['pregnant']
                })
            }
        })
        AsyncStorage.getItem('baseInfo', (err, store) => {
            console.log(store, 'ldfkdfk')
            if (store) {
                let raw = JSON.parse(store);
                console.log(raw, 'o0o09899u89y998y9y4444')
                this.setState({
                    sign_b: raw['sign'],
                    weight_b: raw['weight'],
                    resume_b: raw['resume'],
                    medicine_b: raw['medicine'],
                    antibiotic_b: raw['antibiotic'],
                    husband_b: raw['husband']
                })
            }
        })
    }

    save() {
        let data = {
            sign: this.state.sign,
            weight: this.state.weight,
            resume: this.state.resume,
            medicine: this.state.medicine,
            antibiotic: this.state.antibiotic,
            pregnant: this.state.pregnant
        }
        console.log(data, 'fkjfkgfkg');
        if (data['sign'] !== '' || data['weight'] !== '' || data['resume'] !== '' || data['medicine'] !== '' || data['antibiotic'] !== '') {
            AsyncStorage.setItem('medicalInfo', JSON.stringify(data));

            Navigation.showModal({
                screen: 'com.koalasolution.Verified', // unique ID registered with Navigation.registerScreen
                animationType: 'none', // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
                overrideBackPress: false,// true / false, (Android only), prevents back button and hardware back button from hiding the dialog on Android, instead the [navigator event](https://wix.github.io/react-native-navigation/#/screen-api?id=setonnavigatoreventcallback) 'backPress' will be sent (optional)
                navigatorStyle: {
                    navBarHidden: true, // make the nav bar hidden
                }
            });
        } else {
            alert('همه موارد را پر کنید!')
        }


    }

    language() {

        let fa = {
            pregnant: 'حاملگی',
            sign: 'علائم اولیه بیماری ولوواژینیت کاندیدایی',
            weight: 'وزن(کیلوگرم)',
            resume: 'سابقه ابتلا به بیماری دیگر',
            medicine: 'استفاده از داروهای هورمونی(ضد بارداری)',
            antibiotic: 'استفاده طولانی مدت از آنتی بیوتیک های وسیع الطیف',
            save: 'ذخیره اطلاعات',
            clinical: 'اطلاعات بالینی',
            demo_graphic: 'اطلاعات دموگرافیک',
            Im_pregnant: 'بله',
            not_pregnant: 'خیر'
        };
        let en = {
            pregnant: 'pregnant',
            sign: 'Primary symptoms of Candida vulvovaginal disease',
            weight: 'weight(kg)',
            resume: 'History of other illness',
            medicine: 'Using hormones (contraception)',
            antibiotic: 'Long-term use of broad-spectrum antibiotics',
            save: 'save information',
            clinical: 'Clinical Information',
            demo_graphic: 'DemoGraphic Information',
            Im_pregnant: 'Yes',
            not_pregnant: 'No'

        };
        let final = {};
        console.log(this.state.language, ';kfjgfj')
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

    save_b() {
        let data = {
            sign: this.state.sign_b,
            weight: this.state.weight_b,
            resume: this.state.resume_b,
            medicine: this.state.medicine_b,
            antibiotic: this.state.antibiotic_b,
            husband: this.state.husband_b
        }
        console.log(data, 'fkjfkgfkg');
        if (data['sign'] !== '' || data['weight'] !== '' || data['resume'] !== '' || data['medicine'] !== '' || data['antibiotic'] !== '') {
            AsyncStorage.setItem('baseInfo', JSON.stringify(data));

            Navigation.showModal({
                screen: 'com.koalasolution.Verified', // unique ID registered with Navigation.registerScreen
                animationType: 'none', // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
                overrideBackPress: false,// true / false, (Android only), prevents back button and hardware back button from hiding the dialog on Android, instead the [navigator event](https://wix.github.io/react-native-navigation/#/screen-api?id=setonnavigatoreventcallback) 'backPress' will be sent (optional)
                navigatorStyle: {
                    navBarHidden: true, // make the nav bar hidden
                }
            });
        } else {
            alert('همه موارد را پر کنید!')
        }


    }

    language_b() {

        let fa = {
            name: 'نام و نام خانوادگی',
            national_id: 'کد ملی',
            age: 'سن',
            education_grade: 'میزان تحصیلات',
            job: 'شغل',
            couple: 'وضعیت تاهل',
            address: 'آدرس',
            save: 'ذخیره اطلاعات',
            married: 'متاهلم',
            single: 'مجردم'
        };
        let en = {
            name: 'name & family',
            national_id: 'national Id',
            age: 'age',
            education_grade: 'Education level',
            job: 'job',
            couple: 'marital status',
            address: 'Address',
            save: 'save information',
            married: 'Married',
            single: 'Single'

        };
        let final = {};
        console.log(this.state.language, ';kfjgfj')
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

    render() {
        console.log('dlkdlfklf', RNCalendarEvents.authorizationStatus());

        return (



                <ScrollView style={{width: width, flex: 1}}>

                    <KeyboardAvoidingView style={styles.container}>
                        <View style={{height: 0.05 * height}}/>

                        <Image source={require('./health.png')}
                               style={{
                                   alignItems: 'center',
                                   width: 0.3 * width,
                                   height: 0.3 * width,
                                   justifyContent: 'center',
                                   margin: 7
                               }}>
                        </Image>
                        <View style={{height: 0.05 * height}}/>

                        <View style={styles.box}>
                            <Text style={styles.titles}>{this.language()['sign']}</Text>
                            <TextInput
                                ref={input => {
                                    this.textInput = input
                                }}
                                style={styles.input}
                                value={this.state.sign}
                                onChangeText={(text) => {
                                    console.log(text, 'aqaqadkdklvldvnkldn')
                                    this.setState({sign: text})
                                }}
                            >
                            </TextInput>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.titles}>{this.language()['weight']}</Text>
                            <TextInput
                                ref={input => {
                                    this.textInput = input
                                }}
                                editable={this.state.edit}

                                style={styles.input}
                                keyboardType='number-pad'
                                value={this.state.weight}
                                onChangeText={(text) => this.setState({weight: text})}
                            >
                            </TextInput>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.titles}>{this.language()['resume']}</Text>
                            <TextInput
                                ref={input => {
                                    this.textInput = input
                                }}
                                editable={this.state.edit}

                                style={styles.input}
                                value={this.state.resume}
                                onChangeText={(text) => this.setState({resume: text})}
                            >
                            </TextInput>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.titles}>{this.language()['medicine']}</Text>
                            <TextInput
                                ref={input => {
                                    this.textInput = input
                                }}
                                editable={this.state.edit}

                                style={styles.input}
                                value={this.state.medicine}
                                onChangeText={(text) => this.setState({medicine: text})}
                            >
                            </TextInput>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.titles}>{this.language()['antibiotic']}</Text>
                            <TextInput

                                editable={this.state.edit}

                                style={styles.input}
                                value={this.state.antibiotic}
                                onChangeText={(text) => this.setState({antibiotic: text})}
                            >
                            </TextInput>
                        </View>

                        <View style={styles.switch}>

                            <SegmentControl
                                values={[this.language()['not_pregnant'], this.language()['Im_pregnant']]}
                                badges={[0, 0]}
                                selectedIndex={this.state.pregnant}
                                onTabPress={(index) => {
                                    this.setState({pregnant: index}), console.log(this.state.chos, 'ljfhfhfjks')
                                }}
                                activeTabTextStyle={{fontFamily: 'B Koodak', color: 'white'}}
                                tabTextStyle={{fontFamily: 'B Koodak', color: '#f62459'}}
                                activeTabTextStyle={{fontFamily: 'B Koodak', color: 'white'}}
                                tabBadgeStyle={{fontFamily: 'B Koodak'}}
                                height={30}
                                borderRadius={5}
                                tabsContainerStyle={{margin: 7, borderColor: '#f62459', width: 0.6 * width}}
                                animationType={'none'}
                                activeTabStyle={{backgroundColor: '#f62459'}}
                                tabStyle={{borderColor: '#f62459'}}

                            />
                            <Text style={{
                                fontFamily: 'B Koodak',
                                color: 'black',
                                textAlign: 'center',
                                marginTop: 13,
                                marginBottom: 13,
                                width: 0.2 * width
                            }}>{this.language()['pregnant']}</Text>
                        </View>
                        <TouchableHighlight
                            underlayColor="#ff0064"

                            style={styles.buttonOut1}
                            onPress={() => {
                                this.save();
                            }}>
                            <Text style={styles.titles2}>{this.language()['save']}</Text>
                        </TouchableHighlight>
                        <View style={{height: 0.1 * height}}/>
                    </KeyboardAvoidingView>
                </ScrollView>


        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7fbad9',
    }, koon: {
        flex: 1,
        flexDirection: 'column',
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7fbad9',
    },
    box: {
        flexDirection: 'column',
        width: 0.9 * width,
        backgroundColor: 'white',
        borderRadius: 7,
        alignItems: 'center',
        marginBottom: 5
    },
    buttonIn: {borderRadius: 7, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'},
    buttonOut: {
        width: 0.8 * width,
        borderRadius: 7,
        marginTop: 7,
        flexDirection: 'row',
        backgroundColor: '#16bbe7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonOut1: {
        width: 0.8 * width,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: 'white',
        margin: 7,
        flexDirection: 'row',
        backgroundColor: '#f62459',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonOut2: {
        borderRadius: 7,
        marginTop: 7,
        flexDirection: 'row',
        backgroundColor: '#eb9040',
        justifyContent: 'center',
        alignItems: 'center'
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        width: 0.85 * width,
        fontFamily: 'B Koodak',
        backgroundColor: 'white',
        textAlign: 'center',
        borderRadius: 7,
        borderBottomWidth: 2,
        marginBottom: 7,
        borderColor: '#ff0064'

    },
    switch: {
        width: 0.9 * width,
        fontFamily: 'B Koodak',
        backgroundColor: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginBottom: 7,
        borderColor: '#ff0064',
        flexDirection: 'row'

    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    titles: {
        fontFamily: 'B Koodak', color: 'black', textAlign: 'center', marginTop: 13, marginBottom: 13
    },
    titles2: {
        fontFamily: 'B Koodak', color: 'white', textAlign: 'center', marginTop: 13, marginBottom: 13
    }
});
module.export = ClinicalInfo;
