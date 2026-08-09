// Import 
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

// Link 
import { closeForm } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/components/frame.js';
import { handleSignUp, handleFilePick, handleLogUser, handleOutUser } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/components/button.js';
import { toggleTheme } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/hooks/tool(f).js';
import { req_vldtSession } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/services/sendreq.js'

// Functions

const Prince = (
    setLoading, 
    loginFormUser, setLoginFormUser, 
    signupFormPsngrDrvr1, signupFormDrvr2, 
    setSignupFormPsngrDrvr1, setSignupFormDrvr2, 
    setUserType, setCategTheme, 
    setShowTabtlbr, setSelectedTab, 
    setShowFormUser, setShowFormPsngr, 
    setShowFormDrvr1, setShowFormDrvr2, 
    setShowVelPsngr, setShowVelDrvr, 
    setShowInfo, 
) => {

  const vldtn = async () => {
    try {
      const vldtToken = await AsyncStorage.getItem('token');
      const body = { token: vldtToken };
      const response = await req_vldtSession(body);
      const isValid = response.data.validation;
      const msgalrt = response.data.message;
      if (!isValid && msgalrt !== '') {
        Alert.alert( 
            'Redirecting...', 
            msgalrt, 
            [{ text: "Ok!" }]  
        );
        await AsyncStorage.setItem('token', 'notoken');
        await AsyncStorage.setItem('userType', 'Guest');
        setUserType('Guest');
        return false;
      } else {
        return true;
      }
    } catch (error) {
        console.error(error);
    }
  };

  const updtNem = async () => {
    const nem = await toggleTheme({vldtn});
    await AsyncStorage.setItem('theme', nem);
    setCategTheme(nem);
  }

  const feedChngPsngrDrvr1 = ({name, value}) => {
    try {
      setSignupFormPsngrDrvr1({ ...signupFormPsngrDrvr1, [name]: value });
    } catch (error) {
      console.error(error);
    }
  };

  const feedChngDrvr2 = ({name, value}) => {
    try {
      setSignupFormDrvr2({ ...signupFormDrvr2, [name]: value });
    } catch (error) {
      console.error(error);
    }         
  };

  const feedChngUser = ({name, value}) => {
    try {
      setLoginFormUser({ ...loginFormUser, [name]: value });
    } catch (error) {
      console.error(error);
    }         
  };

  const hndlSign = async ({type}) => {
    const sts = await handleSignUp({key: type, setLoading, signupFormPsngrDrvr1, signupFormDrvr2})
    if (sts) {
      setSignupFormPsngrDrvr1({
        feed_text_pnum: '',
        feed_text_pass: '',
        feed_text_prpt: '',
      });
      setSignupFormDrvr2({
        feed_file_ppic: null,
        feed_file_bank: null,
        feed_file_iden: null,
        feed_file_lcns: null,
        feed_text_bank: '',
        feed_text_iden: '',
        feed_text_lcns: '',
      });
      closeForm({setShowFormUser, setShowVelPsngr, setShowVelDrvr, setShowTabtlbr, setSelectedTab, setShowFormPsngr, setShowFormDrvr1, setShowFormDrvr2, setShowInfo, 
                  vldtn});
    }
  };

  const hndlFile1 = () => hndlFile({num: 'feed_file_ppic'});
  const hndlFile2 = () => hndlFile({num: 'feed_file_iden'});
  const hndlFile3 = () => hndlFile({num: 'feed_file_lcns'});
  const hndlFile = async ({num}) => {
    const sts = await handleFilePick({num, setLoading});
    if (sts){
      setSignupFormDrvr2(prevState => ({
        ...prevState,
        [key]: result.assets[0].uri,
      }));
    }
  };

  const hndlLog = async () => {
    const [sts, categUser] = await handleLogUser({setLoading, loginFormUser});
    if (sts) {
      setUserType(categUser);
      setLoginFormUser({
        feed_text_pnml: '',
        feed_text_pass: '',
      });
      closeForm({setShowFormUser, setShowVelPsngr, setShowVelDrvr, setShowTabtlbr, setSelectedTab, setShowFormPsngr, setShowFormDrvr1, setShowFormDrvr2, setShowInfo,
                vldtn});
    }
  };

  const hndlOut = async() => {
    await handleOutUser({setLoading});
    await AsyncStorage.setItem('token', 'notoken');
    await AsyncStorage.setItem('userType', 'Guest');
    setUserType('Guest');
    setShowFormUser(false);
    setShowVelPsngr(false);
    setShowVelDrvr(false);
    setShowTabtlbr(false);
    setSelectedTab('');
    setShowFormPsngr(false);
    setShowFormDrvr1(false);
    setShowFormDrvr2(false);
    setShowInfo(false);
  };

  return { vldtn, updtNem, 
           feedChngPsngrDrvr1, feedChngDrvr2, feedChngUser, 
           hndlSign, hndlLog, hndlOut, 
           hndlFile1, hndlFile2, hndlFile3, hndlFile, 
        };

};
  
// Export
export default Prince;