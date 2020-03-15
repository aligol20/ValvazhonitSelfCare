import { Navigation } from 'react-native-navigation';
import {
    AsyncStorage,
} from 'react-native';
import TimerMixin from 'react-timer-mixin';

import { registerScreens } from './screens';
import {Component} from "react";







            registerScreens(); // this is where you register all of your app's screens

let oo = 20;

let d = new Date();

console.log(n,'lklllkllkl')
let n = 0;

let i = 0;                     //  set your counter to 1

for(i;i<=n+40000;i++){
    console.log(i,'nashod...')

    if(i > 39999){
        console.log(i,'azazazaza...')

        AsyncStorage.getItem('language', (err, store) => {
            let lan = '';
            if (JSON.parse(store)) {
                lan = JSON.parse(store);
            } else {
                lan = 'fa'
            }
            Navigation.startTabBasedApp({
                tabs: [

                    {
                        screen: 'com.koalasolution.AboutUs',
                        icon: require('./information.png'),
                        navigatorStyle: {
                            navBarHidden: true, // make the nav bar hidden
                            navBarHideOnScroll: true, // make the nav bar hidden only after the user starts to scroll
                            navBarTranslucent: true, // make the nav bar semi-translucent, works best with drawUnderNavBar:true
                            navBarTransparent: true,
                        }, // override the navigator style for the screen, see "Styling the navigator" below (optional)

                    },
                    {
                        screen: 'com.koalasolution.App', // this is a registered name for a screen
                        icon: require('./house.png'),
                        navigatorStyle: {
                            navBarHidden: true, // make the nav bar hidden
                            navBarHideOnScroll: true, // make the nav bar hidden only after the user starts to scroll
                            navBarTranslucent: true, // make the nav bar semi-translucent, works best with drawUnderNavBar:true
                            navBarTransparent: true,
                        }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
                    },
                    {
                        screen: 'com.koalasolution.Choose_language',
                        icon: require('./global.png'),
                        navigatorStyle: {
                            navBarHidden: true, // make the nav bar hidden
                            navBarHideOnScroll: true, // make the nav bar hidden only after the user starts to scroll
                            navBarTranslucent: true, // make the nav bar semi-translucent, works best with drawUnderNavBar:true
                            navBarTransparent: true,
                        }, // override the navigator style for the screen, see "Styling the navigator" below (optional)

                    }
                ],
                appStyle: { // optional, add this if you want to style the tab bar beyond the defaults
                    initialTabIndex: 1,


                },
            });
            console.log(store, 'kjfhkjfhdjfhekjhkjhkjf')



        });

    }
}













