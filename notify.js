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
    ScrollView,
    View,
    SectionList,
    TouchableHighlight,
    AsyncStorage, KeyboardAvoidingView
} from 'react-native';
import RNCalendarEvents from 'react-native-calendar-events';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
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
export default class Notify extends Component {
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
            statusBarColor:'#d6488c'
        });
        this.state = {
            language:'fa',
            index:0
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
                icon: require('./megaphone.png'), // if you want an image button
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
                    screen: 'com.koalasolution.Hospital',
                    navigatorStyle: {navBarBackgroundColor:'#de8cc0',navBarTitleFontFamily:'B koodak',titleColor:'white'},


                });
            }

        }
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
    language(){
        let fa={hospitalList:'مراکز بیمارستان زنان و زایمان',drList:'لیست متخصصان زنان و زایمان',teh:'تهران بزرگ',sar:'استان مازندران',tehteh:'شاخص‌ترین مراکز تخحصصی زنان و زایمان تهران'};
        let en={hospitalList:'Obstetrics and Gynecology Hospitals',drList:'Gynecologists list',teh:'Capital Tehran',sar:'Mazandaran State',tehteh:'The most specialized women’s gynecology centers in Tehran'};
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
    city(){
        let fa={tehran:'تهران',sari:'ساری',babol:'بابل',amol:'آمل',qaem:'قایم شهر',babolSar:'بابل سر',mahmood:'محمودآباد',freydoon:'فریدون کنار',noor:'نور',
            noShahr:'نوشهر',chaloos:'چالوس',tonekabon:'تنکابن',ramsar:'رامسر',behshahr:'بهشهر',neka:'نکا',jooybar:'جویبار',savadKooh:'سوادکوه',gloogah:'گلوگله',kelar:'کلاردشت'};
        let en={tehran:'Tehran',sari:'sari',babol:'Babol',amol:'Amol',qaem:'QaemShahr',babolSar:'BabolSar',mahmood:'MahmoodAbad',freydoon:'FreydoonKenar',noor:'Noor',
        noShahr:'Noshahr',chaloos:'Chaloos',tonekabon:'Tonekabon',ramsar:'Ramsar',behshahr:'BehShahr',neka:'Neka',jooybar:'Jooybar',savadKooh:'SavadKooh',gloogah:'Glougah',kelar:'KlarDasht'};
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
    hospitals(){
        let fa= [
            {title:'بیمارستان صارم: (خصوصی) (تخصصی و فوق تخصصی) (شبانه‌روزی)',
                    data:['آدرس: منطقه 5، شهرک اکباتان، انتهای فاز 3\n' +
                        'پزشکان متخصص زنان و زایمان:\n' +
                        'دکتر ابوطالب صارمی، دکتر مژگان قرائی، دکتر آتوسا عزیزخانی، دکتر اقدس صفری، دکتر فرح اکبریان، دکتر فاطمه جلالی زند، دکتر طرلان حمیده‌خو، دکتر هما بهرامی، دکتر هما ایرانمنش، دکتر نوشین محمدی']},
            {title:'بیمارستان خاتم‌الانبیاء (ص): (خصوصی) (تخصصی و فوق تخصصی) (شبانه‌روزی)',
                data:['آدرس: خیابان رشید یاسمی، بالاتر از بلوار میرداماد\n' +
                    'پزشکان متخصص زنان و زایمان:\n' +
                    'دکتر پروین روحانی، دکتر رقیه موسی زاده، دکتر نگین متقینی، دکتر بهناز محبتیان',]},
            {title:'بیمارستان آبان: (خصوصی) (تخصصی و فوق تخصصی) (شبانه‌روزی)',
                data:['آدرس: منطقه 6، خیابان کریم‌‌خان زند، خیابان شهید عضدی (آبان جنوبی) پلاک 46\n' +
                    'پزشکان متخصص زنان و زایمان :\n' +
                    'دکتر غلامرضا کیوان‌پژوه، دکتر وحید یزدی، دکتر مینو طاهری\n' +
                    'دکتر احمد بهرام وندی، دکتر محسن معینی، دکتر هدیه قوامی عادل، دکتر آزیتا صفارزاده کرمانی، دکتر رزا مقدم، دکتر حمیدرضا طاهری، دکتر گیتا حاتمی‌زاده',]},
            {title:'بیمارستان حضرت زینب: (دولتی) (شبانه‌روزی)',
                data:['آدرس: منطقه 6، خیابان سمیه، خیابان موسوی (فرصت)، پلاک 39\n' +
                    'پزشکان متخصص زنان و زایمان:\n' +
                    'دکتر سهیلا پوراعظمی، دکتر نفیسه ظفرقندی، دکتر مریم ربیعی، دکتر شهرزاد هداوند',]},
            {title:'بیمارستان محب یاس (میرزا کوچک‌خان سابق): (دولتی) (آموزشی-درمانی) (شبانه‌روزی)',
                data:['آدرس: منطقه 6، خیابان استاد نجات‌الهی (ویلا)\n' +
                    'پزشکان متخصص زنان و زایمان:\n' +
                    'دکتر فیروزه اکبری، دکتر فریبا یارندی، دکتر شیرین نیرومنش، دکتر زهرا رضایی، دکتر عذرا آزموده، دکتر فاطمه داودی تنها، دکتر عزیزه قاسمی‌نژاد، دکتر نسرین مقدمی تبریزی، دکتر مهرناز ولدان، دکتر مهبد ابراهیمی',]},
            {title:'بیمارستان هدایت: (دولتی) (شبانه‌روزی)',
                data:['آدرس: منطقه 3، خیابان شریعتی، خیابان یخچال، تقاطع خیابان هدایت\n' +
                    'پزشکان متخصص زنان و زایمان:\n' +
                    'دکتر زهرا مذهبی، دکتر معصومه دیدری خمسه مطلق',]},
            {title:'بیمارستان روئین‌تن آرش: (دولتی) (شبانه‌روزی)',
                data:['آدرس: منطقه 4، بزرگراه رسالت، بعد از اتوبان شهید باقری، خیابان شهید باغدارنیا (رشید شمالی)، نبش کوچه 1/160 غربی (شهید عبدالمجید)\n' +
                    'پزشکان متخصص زنان و زایمان:\n' +
                    'دکتر زهرا عسگری، دکتر افسانه تهرانیان، دکتر مریم مجتهدی، دکتر مرضیه وحید دستجردی، دکتر ریحانه پیرجانی، دکتر اشرف معینی، دکتر ریحانه حسینی، دکتر لادن کاشانی، دکتر طاهره فروغی‌فر، دکتر اکرم قهقایی',]},
            {title:'بیمارستان مهدیه: (دولتی) (شبانه‌روزی)',
                data:['آدرس: میدان شوش، خیابان فدائیان اسلام، کوچه شیشه‌گرخانه، خیابان شهید رجب‌نیا\n' +
                    'پزشکان متخصص زنان و زایمان:\n' +
                    'دکتر زهرا حیدر، دکتر شهرزاد زاده مدرس',]},
            {title:'بیمارستان مفرح: (خیریه) (شبانه‌روزی)',
                data:['آدرس: یاخچی‌آباد، اتوبان تندگویان، پل بصیر، میدان بهمنیار، خیابان بهمنیار\n' +
                    'پزشکان متخصص زنان و زایمان:\n' +
                    'دکتر مژگان خلیلی، دکتر رسول پیروزمند، دکتر هما حکمت، دکتر حسن فرجزاده جلالی، دکتر معصومه ایمان‌‌زاده، دکتر آزاده بشرخواه، دکتر پلاما کدخدایان',]},
            {title:'بیمارستان جواهری: (دولتی) (آموزشی – درمانی) (شبانه‌روزی)',
                data:['آدرس: منطقه 3، خیابان دکتر شریعتی، بالاتر از قلهک، خیابان شهید محمد خاقانی (زرگنده)\n' +
                    'پزشکان متخصص زنان و زایمان:\n' +
                    'دکتر فاطمه فدکی، دکتر مرجان محبوبی، دکتر نرجس صدیق‌پور، دکتر شراره هنرجو، دکتر افسانه اختیاری، دکتر ژاله فضل']},
            {title:'بیمارستان مادران: (خصوصی) (شبانه‌روزی)',
                data:['آدرس: منطقه 7، خیابان بهشتی (عباس‌آباد)، نرسیده به میدان تختی، خیابان کاووسی‌فر، کوچه آریا وطنی\n' +
                    'پزشکان متخصص زنان و زایمان:\n' +
                    'دکتر فریده دهدار درگاهی، دکتر علیرضا شیروانی، دکتر حسین صاحب نسق، دکتر فیروز صاحبدل نوبری، دکتر نرجس صدیق‌پور، دکتر ادریس خدمتی، دکتر فریده کاظمیان، دکتر ویولت سعادتمند، دکتر جمشید فرامرزی']},
            {title:'بیمارستان بابک: (خصوصی) (شبانه‌روزی)',
                data:['آدرس: منطقه 10، خیابان آذربایجان، خیابان کارون، چهار راه طوس\n' +
                    'پزشکان متخصص زنان و زایمان:\n' +
                    'دکتر شیوا فاطمی شریعت پناهی، دکتر محمدرضا چادرباف، دکتر معین پردل شهری، دکتر مریم خاکپور، دکتر شیرین شمس، دکتر میترا موسوی‌نسب، دکتر سارا میرزنده‌دل']},
            {title:'بیمارستان اکبرآبادی: (دولتی) (آموزشی – درمانی) (شبانه‌روزی)',
                data:['آدرس: منطقه 12، مولوی، ایستگاه باغ فردوس، نبش خیابان مادر \n' +
                    'پزشکان متخصص زنان و زایمان:\n' +
                    'دکتر مریم کاشانیان، دکتر جاودانی، دکتر اشرفی، دکتر افسانه قاسمی، دکتر اکبری، دکتر ربابه محمدبیگی، دکتر رشیدی']},
            {title:'بیمارستان لولاگر : (دولتی) (شبانه‌روزی)',
                data:['آدرس: منطقه 10، خیابان خوش جنوبی، بین خیابان دامپزشکی و آذربایجان\n' +
                    'پزشکان متخصص زنان و زایمان:\n' +
                    'دکتر شیوا فاطمی شریعت‌پناهی، دکتر فریبا حیدری کهن']},
            {title:'بیمارستان دکتر سپیر: (خیریه) (شبانه‌روزی)',
                data:['آدرس: منطقه 12، خیابان مصطفی خمینی، نرسیده به چهار راه سیروس، نبش کوچه مرادی\n' +
                    'پزشکان متخصص زنان و زایمان:\n' +
                    'دکتر ترسا زریسفی']},
            {title:'بیمارستان میلاد: (تأمین اجتماعی) (شبانه‌روزی)',
                data:['آدرس: منطقه 2، اتوبان شهید همت، روبروی شهرک غرب\n' +
                    'پزشکان متخصص زنان و زایمان:\n' +
                    'دکتر لیلی رحیم‌زاده گیوی، دکتر مهرناز رادمهر، دکتر مهناز همایون‌فر، دکتر لاله میرزایی، دکتر شهره خاکبازان، دکتر فرحناز معصومی، دکتر بتول قاضی‌زاده، دکتر فاطمه ابراهیمی، دکتر کبری ملایی، دکتر فریبا امیری']},
            {title:'بیمارستان عرفان: (خصوصی) (شبانه‌روزی)',
                data:['آدرس: منطقه 2، خیابان سرو، خیابان بخشایش\n' +
                    'پزشکان متخصص زنان و زایمان:\n' +
                    'دکتر مرجان محجوبی، دکتر مرجان قاجار، دکتر طاهره همتی، دکتر شیرین نیرومنش، دکتر مریم میکانیک، دکتر اعظم‌السادات مهدوی، دکتر آزیتا صفارزاده کرمانی، دکتر لینا جاودان، دکتر ندا شرقی، دکتر شکیبا خداداد']},
        ];
        let en = [
            {title:'Sarem Hospital: (private) (specialist) (boarding)'
                ,data:['Address: 5 area, Ekbatan town, end of phase 3\n' +
                'Gynecologists:\n Dr. Abotaleb saremi-Dr. Mojgan Gharaee- Dr. Atosa Azizkhani-Dr. Aghdas Safari- Dr. Farah Akbarian- Dr. Fatemeh Jalalizand – Dr. Tarlan Hamidehkho – Dr Homa bahrami- Dr. Homa Iranmanesh-Dr. Noshin mohammadi\n']},
            {title:'Khatam Hospital: (private) (specialist) (boarding)'
                ,data:['Address: Rashid Yasemi street, Above Mirdamad boulevard\n' +
                'Gynecologists:\n Dr. Parvin Rohani- Dr. Roghyeh Mosazadeh\n' +
                'Dr. Negin Matghini – Dr. Behnaz Mohabatian']}
            ,{title:'Aban Hospital: (private) (specialist) (boarding)'
                ,data:['Adress: 6 Area, Karimkhan Zand street, Shahid Azodi street ( south Aban), 46 plaque.\n' +
                'Gynecologists:\n Dr. Gholamreza Keyvan pajoh\n' +
                'Dr. Vahid Yazdi – Dr. Mino taheri – Dr.Ahmad Bahramvandi- Dr. Mohsen Moeni- Dr. Hedyeh Ghavamiadel – Dr. Azita Safarzadeh Kermani-Dr. Rosa Moghadam – Dr. Hamidreza Taheri – Dr. Gita Hatamizadeh']}
            ,{title:'Hazrat Zainab Hospital: (Governmental) (boarding)'
                ,data:[' Adress: 6 Area, Somayeh street, Mousavi street ( Forsat), 39 plaque.\n' +
                'Gynecologists:\n Dr. Soheila Pour Azami- Dr. Nafiseh Zafarghandi – Dr.Maryam Rabiei – Dr. Sharzad Hadavand']}
            ,{title:'Moheb Yas Hospital ( Formerly Mirza Khan): ( Governmental) (Curative education) (boarding)'
                ,data:['Adress: 6 Area, professor Nejatelahi street (villa)\n' +
                'Gynecologists:\n Dr. Firoozeh Akbari- Dr. Fariba Yarandi- Dr.Shirin Niromanesh- Dr. Zahra Rezaei – Dr. Ozra Azmodeh- Dr. Fatemeh Davari Tanha- Dr. Azizeh Ghasemi Nejad- Dr. Nasrin Moghaddami Tabrizi – Dr. Mehrnaz Voldan- Dr.Mahbod Ebrahimi']}
            ,{title:'Hedayat Hospital : ( Governmental)(boarding)'
                ,data:['Adress: 3 Area, Shariati street, Glacier street, Intersection of Hedayat street\n' +
                'Gynecologists:\n Dr. Zahra mazhabi- Dr. Masoumeh deydari khamseh motlagh.']}
            ,{title:'Roein Tan Arash Hospital: ( Governmental) (boarding)'
                ,data:['Adress: 4 Area, Resalat highway, after the shahid bagheri highway, Shahid Baghdarnia street (North Rashid), corner of the 160.1 western alley ( shahid abdulmajid)\n' +
                'Gynecologists:\n Dr. Zahra Asgari-Dr.Afsaneh Tehranian-Dr. Maryam Mojtahedi- Dr. Marzieh Vahid Dastjerdi- Dr. Reyhaneh Pirjani- Dr.Ashraf moeni-Dr. Reyhaneh hosseini-Dr. Ladan Kashani-Dr. Tahereh Foroughifar-Dr. Akram Ghahghai']}
            ,{title:'Mahdiyeh  Hospital: : ( Governmental (boarding)'
                ,data:['Adress: Shush Square, Fadaiyan Islam street, shishehgar khaneh ally, shahid rajabnia street.\n' +
                'Gynecologists:\n Dr. Zahra Heydar- Dr. Sharzad zadehmodares.']}
            ,{title:'Mofarah Hospital: (charity)(boarding)'
                ,data:[' Address: Yakhchiabad Tondgoyan highway, Basir bridge, Bahmanyar square, Bahmanyar street.\n' +
                'Gynecologists:\n Dr.Mojgan Khalili-Dr.Rasoul Piroozmand-Dr.Homa hekmat-Dr.Hasan Farajzadeh jalali-Dr.Masoumeh Imanzadeh-Dr.Azadeh Basharkhah_Dr.Pelama Kadkhodayan']}
            ,{title:'Javaheri Hospital: ( Governmental)(Curative education)(boarding)'
                ,data:['  Address: 3 Area, Dr. Shariati street, above than gholhak, Shahid Mohammad Khaghani street (zargandeh)\n' +
                'Gynecologists:\n Dr. Fatemeh Fadaki- Dr. Marjan Mahboubi- Dr. Narjes Sedighpour- Dr. Sharareh Honarjo- Dr. Afsaneh Ekhteyari- Dr. Jaleh Fazel.']}
            ,{title:'Mothers Hospital: (private)(boarding)'
                ,data:['Adress: 7  Area, Beheshti street (Abasabad), Not reaching Takhty square, Kavosifar street, Arya Vatani ally.\n' +
                'Gynecologists:\n Dr. Farideh dehdar dargahi- Dr. Alireza Shirvani – Dr. Hosseini Sahebdel nobari –Dr. Narjes Sedighpour- Dr. Edris Khedmati-Dr. Farideh Kazemian-Dr. Violet Saadtmand – Dr. Jamshid  Faramarzi']}
            ,{title:'Babak Hospital: (private)(boarding)'
                ,data:['Address: 10 Area, Azarbayjan street, Karoun street, Tous intersection.\n' +
                'Gynecologists:\n Dr. Shiva Fatemi Shariatpanahi-Dr. Mohammadreza Chadorbaf-Dr.Mahin Pardel Shahri- Dr. Maryam Khakpour- Dr.Shirin Shams-Dr.Mitra Mousavi nasab-Dr. Sara Mirzendehdel']}
            ,{title:'Akbarabadi Hospital: ( Governmental) (Curative education) (boarding)'
                ,data:['Address: 12 Area, Molavi, Ferdows station, corner of the mother’s street\n' +
                'Gynecologists:\n Dr. Maryam Kashanian-Dr.Javdani-Dr. Ashrafi - Dr.Afsaneh Ghasemi-Dr. Akbari - Dr. Robabeh Mohammad beige-Dr.Rashidi.']}
            ,{title:'Lolagar Hospital: ( Governmental)(boarding)'
                ,data:[' Address: 10 area, south khosh street, between veterinary street and azarbayjan\n' +
                'Gynecologists:\n Dr. Shiva Fatemi Shariat Panahi- Dr. Fariba Heydari kohan']}
            ,{title:'Dr. Sepir Hospital: (charity)(boarding)'
                ,data:['  Address: 12 Area, Mostafa Khomeini street, Not reaching the intersection of sirous, Alley way Moradi\n' +
                ' Gynecologists:\n Dr. Teresa Zarisfi']}
            ,{title:'Milad Hospital: ( Tamin Ejtemaei )(boarding)'
                ,data:['Address: 2 Area, shahid hemmat highway, opposite the west town.\n' +
                'Gynecologists:\n Dr. Leily Rahimzadeh givi- Dr. Mehrnaz Radmehr-Dr. Mahnaz Homayounfar- Dr. Laleh Mirzai-Dr. Shohreh Khakbazan-Dr. Farahnaz masoumi-Dr.Kobra molaei-Dr.Fariba Amiri']}
            ,{title:'Erfan Hospital: (private)(boarding)'
                ,data:['Adress: 2 Area, sarv street, Bakhshayesh street,\n' +
                'Gynecologists:\n Dr. Marjan mahjoubi- Dr.Marjan Ghajar- Dr. Tahereh Hemati, Dr. Shirin Niromanesh-Dr. Maryam mikanik-Dr. Azam Sadatmahdavi-Dr.Azita Safarzadeh Kermani-Dr. Lina Javedan- -Dr.Neda Sharghi-Dr.Shakiba Khodadad.']}
        ];
        let final = [];
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
    sari(){
        let fa= [
            {
                title:'بیمارستان امام خمینی: (دولتی) (آموزشی – درمانی) (شبانه‌روزی)',
                data:['آدرس: خیابان رازی\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر عطارد-دکتر گران اوریمی – دکتر مسلمی‌زاده- دکتر نظری- دکتر سپیده پیوندی – دکتر رحمانی']},
            {title:'بیمارستان حکمت : (تأمین اجتماعی) (شبانه‌روزی)',
                data:['آدرس: ساری، بلوار طالقانی\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر فاطمه نائیجی- دکتر رویا بیات- دکتر هدی طبرستانی- دکتر فاطمه فاضل‌تبار- دکتر ناهید عالیشاه- دکتر مریم اسدی دیزآبادی- دکتر سیده رویا مسیبی- دکتر سیده مژگان اورند']},
            {title:'بیمارستان امیر مازندرانی : (خصوصی) (شبانه‌روزی)',
                data:['آدرس: خیابان امیر مازندرانی، سه راه کشاورزی\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر نصری- دکتر ابطحی- دکتر یزدانی']},
            {title:'بیمارستان نیمه شعبان: (خصوصی) (شبانه‌روزی)',
                data:['آدرس: بلوار پاسداران، جنب مرکز پزشکی پرتو مازند\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر سیما رازپوش- دکتر نرگس صادقی- دکتر سلیم- دکتر عالمی- دکتر فروزان- دکتر مهناز قلی‌پور- دکتر قریشی- دکتر مریم قلی‌زاده- دکتر کریمی- دکتر آل‌عبا']},
            {title:'بیمارستان شفا : (خصوصی) (شبانه‌روزی)',
                data:['آدرس: میدان خزر، بلوار ولیعصر، کمربندی شرقی\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر مریم رحمانی- دکتر فانی- دکتر الهام رحمانی']},

                ]
        let en= [
            {
                title:'Imam Khomeini Hospital: (Governmental) (Curative Education) (Boarding)',
                data:['Address: Razi Street\n' +
                'Gynecologists: \n' +
                'Dr. Atarod- Dr. Geran Orimi- Dr.Moslemi zadeh- Dr. Nazari- Dr.sepideh peyvandi- Dr. Rahmani']},
            {title:'Hekmat Hospital: (Tamin Ejtemaei) (Boarding)',
                data:['Address: Talegani Boulevard \n' +
                'Gynecologists: \n' +
                'Dr. Fatemeh naije- Dr. Roya bayat- Dr.Hoda tabarestani- Dr. Fatemeh fazeltabar- Dr. Nahid Alishah- Dr. Maryam Asadi disabadi- Dr. seyedeh roya mosayebi- Dr. seyedeh mojgan orand']},
            {title:'Amir mazandarani Hospital: (Private) (Boarding)',
                data:['Address: Amir mazandarani street, three way keshavarzi \n' +
                'Gynecologists: \n' +
                'Dr. Nasri-Dr.Abtahi- Dr. Yazdani']},
            {title:'Nime shaban Hospital: (Private) (Boarding)',
                data:['Address: Pasdaran boulevard, Near mazand partov medical center \n' +
                'Gynecologists: \n' +
                'Dr. Sima razpush- Dr. Narges sadeghi- Dr.salim- Dr. Alami - Dr. Foruzan- Dr. Mahnaz gholipour- Dr. Ghoreyshi- Dr. Maryam gholizadeh- Dr. Karimi- Dr. Aleaba']},
            {title:'Shafa Hospital: (Private) (Boarding)',
                data:['Address: Khazar square, Valiasr boulevard, Eastern belt\n' +
                'Gynecologists: \n' +
                'Dr. Maryam rahmani- Dr. fani- Dr. Elham rahmani']},

                ]
        let final = [];
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
    babol(){
        let fa = [

            {title:'بیمارستان آیت الله روحانی : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: جنب دانشگاه علوم پزشکی، میدان دانشگاه\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر پروانه زرین‌خامه- دکتر میترا لطفی- دکتر سارا مصطفوی- دکتر طاهره نظری- دکتر شهلا یزدانی- دکتر میترا آرام- دکتر شهناز برات- دکتر زهرا بصیرت- دکتر مهتاب زینال‌زاده- دکتر صدیقه اسماعیل‌زاده- دکتر نساء اصنافی- دکتر زینت بوذری']},
            {title:'بیمارستان فاطمه الزهرا (س) : (دولتی) (آموزشی-درمانی) (شبانه‌روزی)',
                data:['آدرس: جاده قدیم آمل، ترک محله\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر صدیقه اسماعیل‌زاده- دکتر زهرا بصیرت']},
            {title:'بیمارستان یحیی‌نژاد : (دولتی) (آموزشی-درمانی) (شبانه‌روزی)',
                data:['آدرس: خیابان مدرس، چهار راه فرهنگ\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر پروانه زرین‌خامه- دکتر طاهره آجیلی- دکتر فاطمه بقایی- دکتر شهناز برات- دکتر زینت نوذری- دکتر رضوانه پوررضا']},
            {title:'بیمارستان 17 شهریور : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: بخش بابل‌کنار، شهر مرزیکلا\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر طاهره آجیلی- دکتر مهدی حمیدزاده- دکتر مهناز قلی‌پور- دکتر زهرا حسن‌زاده- دکتر پریسا کیانفر- دکتر مهسا اسمعیل‌پور']},
            {title:'بیمارستان بابل کلینیک : (خصوصی) (تخصصی و فوق‌تخصصی) (شبانه‌روزی)',
                data:['آدرس: میدان باغ فردوس، خیابان سید جمال‌الدین اسدآبادی\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر پروانه زرین‌خامه- دکتر پرویز خوشبخت- دکتر پریسا کیانفر- دکتر طاهره نظری- دکتر شهرزاد مدانلو- دکتر شهناز برات- دکتر علی بابایی- دکتر شهلا یزدانی- دکتر مهدی حمیدزاده- دکتر مهتاب زینال‌زاده- دکتر شکوفه نوری امیرکلایی- دکتر معصومه آقاپور- دکتر رضوانه پوررضا']},
            {title:'بیمارستان مهرگان : (خصوصی) (شبانه‌روزی)',
                data:['آدرس: ابتدای امیرکلا، بلوار امام رضا\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر ناهید میرحسینی- دکتر صدیقه اسماعیل‌زاده- دکتر نوذری- دکتر مهسا اسمعیل‌پور- دکتر نساء اصنافی']},
        ]
        let en = [

            {title:'Ayatollah rohani Hospital: (Governmental) (Curative education) (Boarding)',
                data:['Address: Near medical university, university square\n' +
                'Gynecologists: \n' +
                'Dr. Parvaneh zarinkhameh- Dr. Mitra lotfi- Dr.Sara mostafavi- Dr. Tahereh Nazari- Dr.Shahla yazdani- Dr. Mitra Aram- Dr.Shahnaz barat- Dr.Zahra basirat- Dr.Mahtab zeynalzadeh- Dr.Sedigheh esmaeilzadeh- Dr.Nesa asnafi- Dr.Zinat bozari']},
            {title:'Fatemeh zahra Hospital: (Governmental) (Curative education) (Boarding)',
                data:['Address: old road Amol, Tork mahalleh\n' +
                'Gynecologists: \n' +
                'Dr.sedigheh esmaeilzadeh- Dr.Zahra basirat']},
            {title:'Yahyanejad Hospital: (Governmental) (Curative education) (Boarding)',
                data:['Address: Modarres street, farhang intersection\n' +
                'Gynecologists: \n' +
                'Dr.Parvaneh zarinkhameh- Dr.Tahereh ajili- Dr.Fatemeh baghaei- Dr.Shahnaz barat- Dr.Zinat Nozari- Dr.Rezvaneh pourreza']},
            {title:'17 Shahrivar Hospital: (Governmental) (Curative education) (Boarding)',
                data:['Address: Babolkenar section, city of marzicola\n' +
                'Gynecologists: \n' +
                'Dr.Tahereh ajili- Dr.Mehdi hamidzadeh-Dr.Mahnaz gholipour- Dr.Zahra hasanzadeh- Dr.Parisa kianfar- Dr.Mahsa esmaeilpour']},
            {title:'Babol Clinic Hospital: (Private) (Specialized) (Boarding)',
                data:['Address: Ferdows garden square, Asadabadi Street \n' +
                'Gynecologists:\n' +
                'Dr.Parvaneh  zarinkhameh- Dr.Parviz khoshbakht- Dr.parisa kianfar- Dr.shahrzad modanlou- Dr.Shahnaz barat- Dr.Ali babaei- Dr.Shahla Yazdani- Dr.Mehdi hamidzadeh- Dr.Mahtab Zeynalzadeh- Dr.Shokofeh nouri amirkolaei- Dr.Masoumeh Aghapour- Dr.Rezvaneh pourreza']},
            {title:'Mehrgan Hospital: (Private) (Boarding)',
                data:['Address: The beginning of the amirkola, Imamreza Boulevard\n' +
                'Gynecologists:\n' +
                'Dr.Nahid mirhoseini- Dr.Sedigheh esmaeilzadeh- Dr.Nozari- Dr.mahsa esmaeilpour- Dr.Nesa asnafi']},

        ]
        let final = [];
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
    amol(){
        let fa = [

            {title:'بیمارستان امام علی(ع) : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: جاده نور بالاتر از شرکت کاله\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر رویا زنجانی- دکتر محبوبه رمضانی- دکتر حبیبه رازی- دکتر زهره کریمی- دکتر ماریا کربلایی‌زاده- دکتر فاطمه شاهکویی- دکتر محبوبه فکری- دکتر مرضیه یزدانی- دکتر بهجت‌السادات حسینی']},
            {title:'بیمارستان امام رضا (ع) : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: مرکز شهر، خیابان امام رضا (ع)\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر رویا زنجانی- دکتر معصومه آقاپور- دکتر محمد داودی- دکتر ریاحی']},
            {title:'بیمارستان شمال : (خصوصی) (تخصصی و فوق تخصصی) (شبانه‌روزی)',
                data:['آدرس: بلوار مدرس، آفتاب 47\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر رمضان بروان- دکتر ندا اصغرزاده- دکتر شهرزاد جوان- دکتر آتوسا معنوی- دکتر فاطمه توحید- دکتر محمدرضا چاوشی‌نژاد- دکتر ماریا حجازی- دکتر پرند قشلاقی- دکتر معصومه آقاپور- دکتر فرشته یزدانی']},
        ]
        let en = [

            {title:'Imam Ali Hospital: (Governmental) (Curative education) (Boarding)',
                data:['Address: Nour road, above than kalleh company\n' +
                'Gynecologists:\n' +
                'Dr.Roya zanjani- Dr.Mahbobeh ramzani- Dr.Habibeh razi- Dr.Zohreh karimi- Dr.Maria karbalaeizadeh- Dr.fatemeh shahkuhi- Dr.Mahbobeh fekri- Dr.Marzieh yazdani- Dr.Behjatosadat hosseini']},
            {title:'Imam reza Hospital: (Governmental) (Curative education) (Boarding)',
                data:['Address: City center, imam reza street\n' +
                'Gynecologists:\n' +
                'Dr.Roya zanjani- Dr.Masoumeh Aghapour- Dr.Mohammad davoodi- Dr.Riahi']},
            {title:'Shomal Hospital: (Private) (Specialized) (Boarding)',
                data:['Address: Modarres boulevard, 47 aftab\n' +
                'Gynecologists:\n' +
                'Dr.Ramzan bervan- Dr.Neda asgharzadeh- Dr.Shahrzad javan- Dr.Atosa manavi- Dr.Fatemeh tohid- Dr.Mohammadreza chavoshinejad- Dr.Maria Hejazi- Dr.Parand gheshlaghi- Dr.Masoumeh Aghapour- Dr.Fereshteh yazdani']},

        ]
        let final = [];
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
    qaem(){
        let fa = [

            {title:'بیمارستان رازی : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: خیابان یوسف رضا\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر سالومه پیوندی- دکتر نصیری- دکتر ولی‌پور- دکتر زهرا حسن‌زاده- دکتر قریشی- دکتر سیما رازپوش- دکتر تقی‌زاده- دکتر مریم قلیزاده- دکتر قنبرپور']},
            {title:'بیمارستان ولی‌عصر : (تأمین اجتماعی) (شبانه‌روزی)',
                data:['آدرس: خیابان ساری\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر محمدرضا چاووشی‌نژاد- دکتر گلچهره جوادیان- دکتر نرگس صادقی- دکتر شهرزاد مدانلو- دکتر سکینه قنبری- دکتر مهسا یاقوتی- دکتر رقیه احمدی- دکتر مهری حسین‌نژاد- دکتر رجا اعتماد']},

        ]
        let en = [

            {title:'Razi Hospital: (Governmental) (Curative education) (Boarding)',
                data:['Address: Yousef reza street\n' +
                'Gynecologists:\n' +
                'Dr.Salome peyvandi- Dr.Nasiri- Dr.Valipour- Dr.Zahra hasanzadeh- Dr.Ghoreyshi- Dr.Sima razpoush- Dr.Taghizadeh- Dr.Maryam Gholizadeh- Dr.Ghanbarpour']},
            {title:'Valiasr Hospital: (Tamin ejtemaei) (Boarding)',
                data:['Address: Sari street\n' +
                'Gynecologists: \n' +
                'Dr.Mohammad reza Chavoshinejad- Dr.Golchehreh Javadian- Dr.Narges Sadeghi- Dr.Shahrzad Modanlou- Dr.Sekineh Ghanbari- Dr.Mahsa Yaghooti- Dr.Roghayeh Ahmadi- Dr.Mehri hoseinnejad- Dr.Roja etemad']},

        ]
        let final = [];
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
    babolSar(){
        let fa = [

            {title:'بیمارستان حضرت زینب (س) : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: خیابان شهید چمران- سادات محله\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر پروانه زرین‌خامه- دکتر قدم‌زاده- دکتر حساس']},
            {title:'بیمارستان شفا : (تأمین اجتماعی) (شبانه‌روزی)',
                data:['آدرس: خیابان امام خمینی\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر دریا دل- دکتر خواجات']},

        ]
        let en = [

            {title:'Hazrat zeynab Hospital: (Governmental) (Curative education) (Boarding) ',
                data:['Address: Shahid chamran street, sadat mahalleh\n' +
                'Gynecologists: \n' +
                'Dr.Parvaneh zarinkhameh- Dr.ghadamzadeh- Dr.hassas']},
            {title:'Shafa Hospital: (Tamin ejtemaei) (Boarding)',
                data:['Address: Imam Khomeini street\n' +
                'Gynecologists: \n' +
                'Dr.Daryadel-Dr.khajat']},

        ]
        let final = [];
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
    mahmood(){
        let fa = [

            {title:'بیمارستان شهدا : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: دریای 14، بلوار آزادی\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر شاهکویی- دکتر ریاحی- دکتر یزدانی']},

        ]
        let en = [

            {title:'Shohada Hospital: (Governmental) (Curative education) (Boarding) ',
                data:['Address: 14 Darya, azadi boulevard\n' +
                'Gynecologists: \n' +
                'Dr.Shahkoei-Dr.Riahi-Dr.Yazdani']},

        ]
        let final = [];
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
    freydoon(){
        let fa = [

            {title:'بیمارستان امام خمینی : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: خیابان امام خمینی\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر نوذری- دکتر بینش- دکتر آزادبر- دکتر قادسی']},

        ]
        let en = [

            {title:'Imam khomeini Hospital: (Governmental) (Curative education) (Boarding)',
                data:[' Address: Imam khomeini \n' +
                'Gynecologists: \n' +
                'Dr.Nozari-Dr.Binesh-Dr.Azadbar-Dr.Ghadesi']},

        ]
        let final = [];
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
    noor(){
        let fa = [

            {title:'بیمارستان امام خمینی : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: خیابان امام \n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر مریم توفیقی- دکتر زهرا خواجه حسینی- دکتر زهره کریمی- دکتر رقیه ردایی']},

        ]
        let en = [

            {title:'Imam khomeini Hospital: (Governmental) (Curative education) (Boarding) ',
                data:['Address: Imam Street \n' +
                'Gynecologists: \n' +
                'Dr.Maryam tofighi-Dr.Zahra khajeh hoseini-Dr.Zohreh karimi-Dr.Roghayeh radaei']},

        ]
        let final = [];
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
    noShahr(){
        let fa = [

            {title:'بیمارستان شهید بهشتی : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: خیابان پور سینا\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر صابری- دکتر میترا خواهانی- دکتر معتمدی- دکتر شبنم مددی سنجانی- دکتر فقیه نصیری']},

        ]
        let en = [

            {title:'Shahid Beheshti Hospital: (Governmental) (Curative education) (Boarding)',
                data:['Address: Poursina street \n' +
                'Gynecologists: \n' +
                'Dr.Saberi-Dr.Mitra khahani-Dr.Motamedi-Dr.shabnam madadi sanjani-Dr.Faghih nasiri\n' +
                '\n']},

        ]
        let final = [];
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
    chaloos(){
        let fa = [

            {title:'بیمارستان رازی : (تأمین اجتماعی) (شبانه‌روزی)',
                data:['آدرس: تقاطع کمربندی نوشهر و چالوس، خیابان نواب صفوی، جنب شهرک نواب صفوی\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر فروزان عسگریان- دکتر آناهیتا رشید منافی- دکتر عسل احمدی- دکتر سیده پریسا حسین‌زاده-دکتر فریبا صادقی']},
            {title:'بیمارستان آیت‌الله طالقانی : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: خیابان امام خمینی\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر وسکویی- دکتر حسن‌طلب- دکتر عطابخشی- دکتر کشاورزیان- دکتر نژاد شمسی- دکتر طالبی']},

        ]
        let en = [

            {title:'Razi Hospital: (Tamin ejtemaei) (Boarding)',
                data:['Address: Belt intersection of noshahr and chalous, navab safavi street, Near navab town\n' +
                'Gynecologists: \n' +
                'Dr.Forouzan asgarian- Dr.Anahita rashid manafi- Dr.Asal Ahmadi- Dr.Seyedeh parisa hoseinzadeh-Dr.Fariba sadeghi']},
            {title:'Ayatollah taleghani Hospital: (Governmental) (Curative education) (Boarding)',
                data:['Address: Imam homeini street \n' +
                'Gynecologists: \n' +
                'Dr.Vaskoei-Dr.hasantalab- Dr.Atabakhshi- Dr.Keshavarzian- Dr.Nejad shamsi- Dr.Talebi']},

        ]
        let final = [];
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
    tonekabon(){
        let fa = [

            {title:'بیمارستان شهید رجایی: (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: خیابان جمهوری\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر خلعتبری- دکتر نرگس صادقی- دکتر میرنباتی- دکتر ضیغم حقیقی- دکتر مرضیه علی‌نژاد- دکتر ویدا شفتی']},

        ]
        let en = [

            {title:'Shahid rejaei Hospital: (Governmental) (Curative education) (Boarding) ',
                data:['Address: Jomhoori street \n' +
                'Gynecologists: \n' +
                'Dr.Khalatbari- Dr.Narges sadeghi- Dr.Mirnabati- Dr.Zeygham haghighi- Dr.Marziyeh Alinejad- Dr.Vida shafti']},

        ]
        let final = [];
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
    ramsar(){
        let fa = [

            {title:'بیمارستان امام سجاد : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: خیابان شهید مطهری- میدان انقلاب- روبروی اداره پست\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر علی‌نژاد- دکتر حسینیان‌‌فر- دکتر بنی هاشمی']},

        ]
        let en = [

            {title:'Imam sajad Hospital: (Governmental) (Curative education) (Boarding) ',
                data:['Address: Shahid motahari street, Enghelab square, In front of thr post office\n' +
                'Gynecologists:\n' +
                'Dr.Alinejad- Dr.Hoseinianfar- Dr.Bani hashemi\n']},

        ]
        let final = [];
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
    behshahr(){
        let fa = [

            {title:'بیمارستان شهدا : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: گرایل محله، بلوار شهید هاشمی نژاد\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر اعظم حسینیان- دکتر معصومه شازده احمدی- دکتر رهبر- دکتر اورند- دکتر عالمی- دکتر حقگو- دکتر نرگس صادقی']},
            {title:'بیمارستان مهر: (خصوصی) (شبانه‌روزی)',
                data:['آدرس: چهار راه گرگان، خیابان پاسداران\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر اعظم حسینیان- دکتر نرگس صادقی- دکتر معصومه شازده احمدی- دکتر محمد سعید قدسی']},

            {title:'بیمارستان بیمارستان دکتر امیدی: (خصوصی) (شبانه‌روزی)',
                data:['آدرس: چهار راه فرمانداری، بلوار شهید هاشمی‌نژاد، خیابان دکتر امیدی\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر نازیلا مصباح- دکتر نرگس صادقی- دکتر منصوره حمزه رباطی- دکتر محمد سعید قدسی- دکتر فریبا خطیر']},

        ]
        let en = [

            {title:'Shohada Hospital: (Governmental) (Curative education) (Boarding) ',
                data:['Address: Grayel Mahalleh, shahid hasheminejad boulevard\n' +
                'Gynecologists:\n' +
                'Dr.Azam hoseinian- Dr.Masoumeh shazdeh Ahmadi- Dr.Rahbar- Dr.Orand- Dr.Alami- Dr.Haghguo- Dr.Narges sadeghi\n']},
            {title:'Mehr Hospital: (Private) (Boarding) ',
                data:['Address: Gorgan intersection, pasdaran street\n' +
                'Gynecologists:\n' +
                'Dr.Azam hoseinian- Dr.Narges sadeghi- Dr.Masoumeh shazdeh Ahmadi- Dr.Mohammad saeed Ghodsi\n']},
            {title:'Dr.Omidi Hospital: (Private) (Boarding) ',
                data:['Address: Farmandari intersection, shahid hasheminejad boulevard, Dr.Omidi street\n' +
                'Gynecologists:\n' +
                'Dr.Nazila mesbah- Dr.Narges sadeghi- Dr.Mansoureh hamzeh robati- Dr.Mohammad saeed Ghodsi- Dr.Fariba khatir']},

        ]
        let final = [];
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
    neka(){
        let fa = [

            {title:'بیمارستان امام حسین (ع) : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: بلوار انقلاب، روبروی مصلی امام خمینی\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر رهبر- دکتر سلطانی- دکتر نیک سیمایی']},
            {title:'بیمارستان بوعلی : (تأمین اجتماعی) (شبانه‌روزی)',
                data:['آدرس: میدان امام حسین (ع)، جاده اومال، جنب دادگستری\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر شهناز مددیان- دکتر هدی طبرستانی- دکتر مریم خرازی‌زاده- دکتر فاطمه طالبی']},

        ]
        let en = [

            {title:'Imam hosein Hospital: (Governmental) (Curative education) (Boarding) ',
                data:['Address: Enghelab boulevard, opposite mosalla Imam khomeimi\n' +
                'Gynecologists:\n' +
                'Dr.Rahbar-  Dr.Soltani- Dr.Nik simaei\n']},
            {title:'Buali Hospital: (Tamin ejtemaei) (Boarding)',
                data:['Address: Imam hosein square, Oumal road, Near the judiciary\n' +
                'Gynecologists: \n' +
                'Dr.Shahnaz Madadiyan- Dr.Hoda tabarestani- Dr.Maryam kharazi zadeh- Dr.Fatemeh talebi\n']},

        ]
        let final = [];
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
    jooybar(){
        let fa = [

            {title:'بیمارستان حاج رمضان عزیزی : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: خیابان امام (ره)، روبروی مسجد اعظم\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر ناهید عالیشاه- دکتر عبادی- دکتر مالایی- دکتر شهرزاد مدانلو']},

        ]
        let en = [

            {title:'Haj ramezan azizi Hospital: (Governmental) (Curative education) (Boarding) ',
                data:['Address: Imam street, opposite the azam mosque\n' +
                'Gynecologists:\n' +
                'Dr.Nahid alishah- Dr.Ebadi - Dr.Malaei- Dr.shahrzad modanlou\n']},

        ]
        let final = [];
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
    savadKooh(){
        let fa = [

            {title:'بیمارستان شهدای زیرآب : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: خیابان آزادی\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر قنبرپور شیاده- دکتر محمدپور- دکتر نقی‌زاده- دکتر صادقی- دکتر قاسم زاده']},

        ]
        let en = [

            {title:'Shohada zirab Hospital: (Governmental) (Curative education) (Boarding) ',
                data:['Address: Azadi street\n' +
                'Gynecologists:\n' +
                'Dr.Ghanbarpour- Dr.Mohammadpour- Dr.Naghizadeh- Dr.Sadeghi- Dr.Ghasemzadeh']},

        ]
        let final = [];
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
    gloogah(){
        let fa = [

            {title:'بیمارستان ثامن‌‌الائمه : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)\n',
                data:['آدرس: کمربندی شرقی\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر چشم‌آور']},

        ]
        let en = [

            {title:'Samenal-Aeme Hospital: (Governmental) (Curative education) (Boarding) \n',
                data:['Address: Eastern belt\n' +
                'Gynecologists:\n' +
                'Dr.Cheshmavar']},

        ]
        let final = [];
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
    kelar(){
        let fa = [


            {title:'بیمارستان حضرت قائم (عج) : (دولتی) (آموزشی- درمانی) (شبانه‌روزی)',
                data:['آدرس: بلوار امام خمینی\n' +
                'پزشکان متخصص زنان و زایمان:\n' +
                'دکتر رقیه ردایی- دکتر خلعتبری- دکتر ماریا کربلایی‌زاده']},

        ]
        let en = [

            {title:'Hazrat ghaem Hospital: (Governmental) (Curative education) (Boarding) \n',
                data:['Address: Imam Khomeini boulevard\n' +
                'Gynecologists:\n' +
                'Dr.Roghayeh radaei- Dr.Khalatbari-Dr.Maria karbalaeizadeh']},

        ]
        let final = [];
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
        console.log(this.hospitals(),'ozozozozoz')
        return (
            <ScrollView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.titles}>{this.language()['tehteh']}</Text>
                <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',width:width}}>

                <SectionList
                    style={{width:width}}
                    renderItem={({item, index, section}) =>

                    {

                                return (
                                    <View style={{backgroundColor:'white'}}>

                                        <Text style={this.state.language === 'fa' ? {marginLeft:7,marginRight:7,color:'#336e7b',fontFamily:'B Koodak',textAlign:'right'}:{marginLeft:7,marginRight:7,color:'#336e7b',textAlign:'left'} }>{item}</Text>

                                    </View>
                                );


                    }


                    }
                    renderSectionHeader={({section: {title}}) => (
                        <View style={{width:width}}>
                        <View style={{alignItems:'center',marginLeft:1,marginRight:1,backgroundColor:'#de8cc0',justifyContent:'flex-end',flexDirection:'row',borderRadius:3}}>
                            <Text style={this.state.language === 'fa' ?{color:'white', fontSize:17,margin: 7,textAlign:'right',fontFamily:'B Koodak',width:'98%'}:{color:'white', fontSize:17,margin: 7,textAlign:'left',width:'98%'}}>{title}</Text>
                        </View>
                        </View>
                    )}
                    sections={this.hospitals()}
                    stickySectionHeadersEnabled = {false}
                    keyExtractor={(item, index) => item + index}
                />
                    </View>

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
        backgroundColor: 'white',
    },
    buttonIn:{borderRadius:7,marginTop:5,flexDirection: 'row',justifyContent:'center',alignItems:'center'},
    buttonOut:{width:0.8*width,borderRadius:7,marginTop:5,flexDirection: 'row',backgroundColor: '#19b5fe',justifyContent: 'center',alignItems: 'center'},

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
        fontFamily:'B Koodak',color: 'blue',textAlign:'center',paddingTop: 7,fontSize:17
    } ,
    city:{
        fontFamily:'B Koodak',color: 'blue',textAlign:'center',fontSize:23
    },
    line:{
width:0.8*width,height:4,margin:1,borderRadius:2,backgroundColor:'blue'
    }
});
module.export = Notify;
