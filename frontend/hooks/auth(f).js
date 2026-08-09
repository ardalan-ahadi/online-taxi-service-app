// Import
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import * as MediaLibrary from 'expo-media-library';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import axios from 'axios';

// Export

export const allowLoc = async () => { 
  try {
    const { status } = await Location.getForegroundPermissionsAsync();
    const sts1 = status;
    if (sts1 !== 'granted') {
      const { status } = await Location.requestForegroundPermissionsAsync(); 
      const sts2 = status;
      if (sts2 === 'granted') { 
        return true; 
      } else { 
        Alert.alert( 
          'Location permission is required...', 
          "Please allow in phone's app setting!", 
          [{ text: "Got it!" }]  
        ); 
        return false; 
      } 
    } else {
      return true; 
  }
  } catch (error) {
    console.error(error);
  }        
}; 

export const enableLoc = async () => { 
  try {
    const sts = await Location.hasServicesEnabledAsync(); 
    if (sts) {
      return true; 
    } else { 
      Alert.alert( 
        "Location service is disabled...", 
        "Please enable in phone's setup!", 
        [{ text: "Got it!" }]  
      ); 
      return false; 
    } 
  } catch (error) {
    console.error(error);
  }        
}; 

export const aeDtlLoc = async () => {
  try {
    const sts1 = await allowLoc();
    const sts2 = await enableLoc();
    if (sts1 && sts2) { 
      return true;
    } else {
      return false;
    }
  } catch (error){
    console.log(error);
  }
}; 

export const aeFstLoc = async () => {
  try {
    const sts1 = await Location.hasServicesEnabledAsync(); 
    const { status } = await Location.getForegroundPermissionsAsync();  
    const sts2 = status; 
    if (sts1 && sts2 === 'granted') {
      return true;
    } else { 
      return false;
    }
  } catch (error){
    console.log(error);
  }   
};

export const allowMedia = async () => {
    try {
      const { sts } = await MediaLibrary.requestPermissionsAsync();
      if (sts === 'granted') {
          return true;
      } else {
        Alert.alert( 
            'Media storage permission is required...', 
            "Please allow in phone's app setting!", 
            [{ text: "Got it!" }]  
        );       
        return false;
      }
    }
    catch (error) {
        console.error(error);
    }
  };