import { Navigation } from 'react-native-navigation';

import BaseInfo from './baseInfo';
import App from './App';
import ClinicalInfo from './clinicalInfo';
import Education from './education';
import Reminder from './reminder';
import EducationContent from './educationContent';
import AboutUs from './aboutUs';
import Main_text from './main_text';
import Notify from './notify';
import Main_Points from './main_points';
import Disease_Type from './disease_type';
import Life_Style from './life_style';
import Medical_treatment from './medical_treatment';
import Non_medical_treatment from './non_medical_treatment';
import Associated_illness from './associated_illness';
import Verified from './verified';
import Medicine_reminder from './medicine_reminder';
import Doctor_reminder from './doctor_reminder';
import Sport_reminder from './sport_reminder';
import Reminder_deleted from './reminder_deleted';
import Reminder_saved from './reminder_saved';
import Choose_language from './choose_language';
import Control_stress from './control_stress';
import Patient_info from './patient_info';
import Hospital from './hospital';
import Mazi from './mazi';

// register all screens of the app (including internal ones)

export function registerScreens() {
    Navigation.registerComponent('com.koalasolution.Choose_language', () => Choose_language);
    Navigation.registerComponent('com.koalasolution.App', () => App);
    Navigation.registerComponent('com.koalasolution.Mazi', () => Mazi);
    Navigation.registerComponent('com.koalasolution.Hospital', () => Hospital);
    Navigation.registerComponent('com.koalasolution.Patient_info', () => Patient_info);
    Navigation.registerComponent('com.koalasolution.Control_stress', () => Control_stress);
    Navigation.registerComponent('com.koalasolution.Main_text', () => Main_text);
    Navigation.registerComponent('com.koalasolution.Reminder_saved', () => Reminder_saved);
    Navigation.registerComponent('com.koalasolution.Reminder_deleted', () => Reminder_deleted);
    Navigation.registerComponent('com.koalasolution.Medicine_reminder', () => Medicine_reminder);
    Navigation.registerComponent('com.koalasolution.Doctor_reminder', () => Doctor_reminder);
    Navigation.registerComponent('com.koalasolution.Sport_reminder', () => Sport_reminder);
    Navigation.registerComponent('com.koalasolution.Notify', () => Notify);
    Navigation.registerComponent('com.koalasolution.BaseInfo', () => BaseInfo);
    Navigation.registerComponent('com.koalasolution.ClinicalInfo', () => ClinicalInfo);
    Navigation.registerComponent('com.koalasolution.Education', () => Education);
    Navigation.registerComponent('com.koalasolution.Reminder', () => Reminder);
    Navigation.registerComponent('com.koalasolution.EducationContent', () => EducationContent);
    Navigation.registerComponent('com.koalasolution.AboutUs', () => AboutUs);
    Navigation.registerComponent('com.koalasolution.Verified', () => Verified);
    Navigation.registerComponent('com.koalasolution.Main_Points', () => Main_Points);
    Navigation.registerComponent('com.koalasolution.Disease_Type', () => Disease_Type);
    Navigation.registerComponent('com.koalasolution.Life_Style', () => Life_Style);
    Navigation.registerComponent('com.koalasolution.Medical_treatment', () => Medical_treatment);
    Navigation.registerComponent('com.koalasolution.Non_medical_treatment', () => Non_medical_treatment);
    Navigation.registerComponent('com.koalasolution.Associated_illness', () => Associated_illness);
}
