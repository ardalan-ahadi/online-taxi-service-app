// Import
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 

// Link
import { req_signPsngr, req_signDrvr, req_logUser, req_forgotUser, req_outUser }
        from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/services/sendreq.js'

// Export

export const handleSignUp = async ({key, setLoading, signupFormPsngrDrvr1, signupFormDrvr2}) => { 
    try { 
        setLoading(true);
        let response;
        let requestData;
        if (key === 'Passenger') {
            requestData = signupFormPsngrDrvr1;
            response = await req_signPsngr(requestData);
        } 
        if (key === 'Driver') {
            requestData = { signupFormPsngrDrvr1, signupFormDrvr2 };
            response = await req_signDrvr(requestData);
        }
        const msgalrt = response.data.message; 
        if (msgalrt[0] === 'P' || msgalrt[0] === 'U') {
            Alert.alert( 
                'Notice:', 
                msgalrt, 
                [{ text: "Ok!"}] 
            ); 
            setLoading(false);
            return false;
        }
        if (msgalrt[0] !== 'P' && msgalrt[0] !== 'U') {
            Alert.alert( 
                'Notice:', 
                msgalrt, 
                [{ text: "Ok!"}] 
            ); 
            setLoading(false);
            return true;
        }
    } catch (error) { 
      console.error(error); 
    } 
};

export const handleFilePick = async ({key, setLoading}) => {
    try {
        setLoading(true);
        const almed = await allowMedia();
        if (almed) {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                quality: 1,
            });
            if (!result.canceled) {
                const stats = await FileSystem.getInfoAsync(result.assets[0].uri);
                
                if (!['.jpeg', '.jpg', '.png'].some(ext => stats.uri.endsWith(ext))) {
                Alert.alert('File format not appropriate:', 
                            "Upload 'jpeg', 'jpg' or 'png'", 
                            [{ text: "Ok!" }]);
                } else if (stats.size > 25 * 1024 * 1024) {
                Alert.alert('File exceeds size limit (25mb):', 
                            "File is too big...", 
                            [{ text: "Ok!" }]);
                } else {
                setSignupFormDrvr2(prevState => ({
                    ...prevState,
                    [key]: result.assets[0].uri,
                }));
                }
            }
        }
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};

export const handleLogUser = async ({setLoading, loginFormUser}) => {  
    try {  
        setLoading(true);
        const response = await req_logUser(loginFormUser);  
        const categUser = response.data.categ; 
        const storeToken = response.data.token; 
        await AsyncStorage.setItem('token', storeToken) 
        await AsyncStorage.setItem('userType', categUser);
        const msgalrt = response.data.message; 
        if (msgalrt.slice(-3) !== 'in!') {
            Alert.alert( 
                'Notice:', 
                msgalrt, 
                [{ text: "Ok!"}] 
            ); 
            setLoading(false);
            return [false, categUser];
        } 
        if (msgalrt.slice(-3) === 'in!') {
            Alert.alert( 
                'Notice:', 
                msgalrt, 
                [{ text: "Ok!" }] 
            ); 
            setLoading(false);
            return [true, categUser];
        }
    } catch (error) {  
        console.error(error);  
    } 
  };  

export const handleForgotUser = async ({setLoading, 
                                        loginFormUser}) => {  
    try {
        setLoading(true);
        const response = await req_forgotUser(loginFormUser); 
        const msgalrt = response.data.message; 
        if (msgalrt[0] === 'P') {
            Alert.alert( 
                'Notice:', 
                msgalrt, 
                [{ text: "Ok!"}] 
            ); 
        }
        if (msgalrt[0] !== 'P') {
            Alert.alert( 
                'Notice:', 
                msgalrt, 
                [{ text: "Ok!", onPress: closeForm }] 
            ); 
        }
        setLoading(false);
    } catch (error) { 
        console.error(error); 
    } 
  };  
// vldtn

export const handleOutUser = async ({setLoading}) => {  
    try {
        setLoading(true);
        const sendToken = await AsyncStorage.getItem('token');
        const sendCateg = await AsyncStorage.getItem('userType');
        const body = { token: sendToken, categ: sendCateg }
        const response = await req_outUser(body); 
        const msgalrt = response.data.message; 
        Alert.alert( 
            'Notice:', 
            msgalrt, 
            [{ text: "Ok!"}] 
        ); 
        setLoading(false);
    } catch (error) { 
        console.error(error); 
    } 
}; 