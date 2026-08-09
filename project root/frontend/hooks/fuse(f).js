// Import
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

// Link
import { aeFstLoc } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/hooks/auth(f).js';
import { req_hstryloc } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/services/sendreq.js'
// Export
export const hstryLoc = async () => {
    try {
        sts = await aeFstLoc();
        if (sts) {
            Location.watchPositionAsync({ 
                accuracy: Location.Accuracy.BestForNavigation, timeInterval: 5000, distanceInterval: 10 
            }, 
            (location) => {
                sendGps = {location}; 
            });
            const sendToken = await AsyncStorage.getItem('token');
            const sendcateg = await AsyncStorage.getItem('userType');
            if (sendToken !== 'notoken' && sendcateg === 'Driver') {
                const body = { token: sendToken, locord: sendGps };
                await req_hstryloc(body);
            }
        }
    } catch (error) {
        console.error(error);
    }      
};