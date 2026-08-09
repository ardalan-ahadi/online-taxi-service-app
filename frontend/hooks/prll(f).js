// Import
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

// Link
import { aeDtlLoc, aeFstLoc } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/hooks/auth(f).js';

// Export

export const watchLoc = async () => {
  const aeDet = await aeFstLoc();
  if (aeDet) {
    return new Promise((resolve, reject) => {
      const watchPosition = async () => {
        try {
          const sts = await aeFstLoc();
          if (sts) {
            await Location.watchPositionAsync({
              accuracy: Location.Accuracy.BestForNavigation,
              timeInterval: 5000,
              distanceInterval: 10
            }, (loc) => {
              resolve(loc); 
            });
          }
        } catch (error) {
          console.error(error);
          reject(error); 
        }
      };
      watchPosition();
    });
  } else {
    return null;
  }
};

export const gotoFirstLoc = async ({mapRef}) => { 
    try {
      const loc = await watchLoc();
      if (loc) {
        const location = { 
          latitude: loc.coords.latitude, 
          longitude: loc.coords.longitude, 
          latitudeDelta: 0.0922, 
          longitudeDelta: 0.0421, 
        }; 
        await mapRef.current.animateToRegion(location); 
      } else { 
        await aeDtlLoc(); 
      }
    } catch (error) {
      console.error(error);
    }        
};

export const firstOnLoc = async ({mapRef}) => { 
    try {
      const aeDet = await aeFstLoc();
      if (!aeDet){
        await AsyncStorage.setItem('firstOn', 'yes');
      } 
      const frston = await AsyncStorage.getItem('firstOn');
      if (aeDet && frston === 'yes' ) {
        await AsyncStorage.setItem('firstOn', 'no');
        await gotoFirstLoc({mapRef});
      }
    } catch (error) {
      console.error(error);
    }       
};

export const firstOffLoc = async () => { 
  try {
      aeDet = await aeFstLoc();
      if (aeDet) {
        await AsyncStorage.setItem('firstOff', 'yes');
      }
      const frstoff = await AsyncStorage.getItem('firstOff');
      if (!aeDet && frstoff === 'yes' ) {
        await AsyncStorage.setItem('firstOff', 'no');
        await aeDtlLoc();
      }
  } catch (error) {
      console.error(error);
  }      
};