// Import
import { Alert } from 'react-native';

// Link
import { req_wrdInfo } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/services/sendreq.js'

// Forms

export const openForm = async ({setLoading, 
                                setShowFormUser, setShowTabtlbr, setSelectedTab}) => {
    try {
        setLoading(true);
        setShowFormUser(true);
        setShowTabtlbr(true);
        setSelectedTab('login');
        setLoading(false);
    } catch (error) {
        console.error(error);
    }
};

export const psngrForm = async ({setShowFormPsngr, setShowTabtlbr, setSelectedTab}) => {
    try {
        setShowFormPsngr(true);
        setShowTabtlbr(false);
        setSelectedTab('');
    } catch (error) {
        console.error(error);
    }      
};
  
export const gosgnForm = async ({setShowFormUser, setShowTabtlbr, setSelectedTab ,setShowFormPsngr, setShowFormDrvr1, setShowFormDrvr2}) => {
    try{
        setShowFormUser(true);
        setShowTabtlbr(true);
        setSelectedTab('signup');
        setShowFormPsngr(false);
        setShowFormDrvr1(false);
        setShowFormDrvr2(false);
    } catch (error) { 
        console.error(error); 
    } 
};

export const drvrForm1 = async ({setShowFormDrvr1, setShowTabtlbr, setSelectedTab}) => {
    try {
        setShowFormDrvr1(true);
        setShowTabtlbr(false);
        setSelectedTab('');
    } catch (error) {
        console.error(error);
    }          
};

export const drvrForm2 = async ({signupFormPsngrDrvr1, 
                                setShowFormDrvr1, setShowFormDrvr2}) => {
    try {
        if (!signupFormPsngrDrvr1.feed_text_pnum || !signupFormPsngrDrvr1.feed_text_pass || !signupFormPsngrDrvr1.feed_text_prpt) { 
            Alert.alert( 
                'Notice:', 
                "Please fill all fields!", 
                [{ text: "Ok!" }] 
            )
        } else if (signupFormPsngrDrvr1.feed_text_pass !== signupFormPsngrDrvr1.feed_text_prpt) { 
            Alert.alert( 
                'Notice:', 
                "Passwords do not match!", 
                [{ text: "Ok!" }] 
            )
        } else {
            setShowFormDrvr1(false);
            setShowFormDrvr2(true);
        }
    } catch (error) {
        console.error(error);
    }     
  };

export const godrvForm = async ({setShowFormDrvr1, setShowFormDrvr2}) => {
    try{
        setShowFormDrvr1(true);
        setShowFormDrvr2(false);
    } catch (error) { 
        console.error(error); 
    } 
};

export const openVelP = async({setShowFormUser, setShowVelPsngr, 
                                vldtn}) => {
    try{
        const sts = await vldtn();
        if (sts) {
            setShowFormUser(true);
            setShowVelPsngr(true);
        }
    } catch (error) { 
    console.error(error); 
    }
};

export const openVelD = async({setShowFormUser, setShowVelDrvr, 
                                vldtn}) => {
    try{
        const sts = await vldtn();
        if (sts) {
            setShowFormUser(true);
            setShowVelDrvr(true);
        }
    } catch (error) { 
        console.error(error); 
    }
};

export const openInfo = async ({setShowWord, setShowFormUser, setShowTabtlbr, setSelectedTab, setShowInfo,
                                vldtn}) => {
    try{
        setShowWord('');
        setShowFormUser(true);
        setShowTabtlbr(false);
        setSelectedTab('');
        setShowInfo(true);
        await vldtn();
    } catch (error) { 
        console.error(error); 
    }
};

export const openWord = async ({index, 
                                setShowWord}) => {  
    try {
        const response = await req_wrdInfo(); 
        setShowWord(response.data[`sttmnt${index}`]); 
    } catch (error) { 
        console.error(error); 
    } 
};
  
export const closeForm = async ({setShowFormUser, setShowVelPsngr, setShowVelDrvr, setShowTabtlbr, setSelectedTab, setShowFormPsngr, setShowFormDrvr1, setShowFormDrvr2, setShowInfo, 
                                vldtn}) => {
    try{
        setShowFormUser(false);
        setShowVelPsngr(false);
        setShowVelDrvr(false);
        setShowTabtlbr(false);
        setSelectedTab('');
        setShowFormPsngr(false);
        setShowFormDrvr1(false);
        setShowFormDrvr2(false);
        setShowInfo(false);
        await vldtn();
    } catch (error) { 
        console.error(error); 
    }
};