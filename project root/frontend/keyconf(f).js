// Import
import { useState, useRef } from 'react';
import { Dimensions } from 'react-native';

// Init
const Param = () => {
    
    // Image
    const drvrImageSource = categTheme === 'dark'
    ? require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/drvrylw.png') 
    : require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/drvrblk.png'); 
    const psngrImageSource = categTheme === 'dark'
    ? require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/psngrylw.png') 
    : require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/psngrblk.png'); 
    const callcabImageSource = categTheme === 'dark'
    ? require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/bacblack.png') 
    : require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/bacblack.png'); 
    const tilesImageSource = categOrint === 'landscape'
    ? require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/tilesribbon2.png') 
    : require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/tilesribbon1.png');
    const loadingImageSource = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/busy.gif');

    // Coord
    const mapRef = useRef(null);
    let stateRegionLoc = {
        coords: {
            latitude: 35.2276,
            longitude: 33.4299,
            latitudeDelta: .05,
            longitudeDelta: .05,
        }
    };
    const [locRegion, setLocRegion] = useState(stateRegionLoc); 
    const [locPoint, setLocPoint] = useState(null);

    // State
    const [userType, setUserType] = useState('Guest');
    const [loading, setLoading] = useState(false);
    let stateCategOrint = (Dimensions.get('window').width < Dimensions.get('window').height ? 'portrait' : 'landscape');
    const [categOrint, setCategOrint] = useState(stateCategOrint);
    let stateCategTheme = 'light';
    const [categTheme, setCategTheme] = useState(stateCategTheme);

    // Form
    const [showVelDrvr, setShowVelDrvr] = useState(false);
    const [showVelPsngr, setShowVelPsngr] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showWord, setShowWord] = useState('');
    const [showFormUser, setShowFormUser] = useState(false);
    const [showTabtlbr, setShowTabtlbr] = useState(false);
    const [selectedTab, setSelectedTab] = useState('login');
    const [showFormPsngr, setShowFormPsngr] = useState(false);
    const [showFormDrvr1, setShowFormDrvr1] = useState(false);
    const [showFormDrvr2, setShowFormDrvr2] = useState(false);

    // Input
    const [signupFormPsngrDrvr1, setSignupFormPsngrDrvr1] = useState({
            feed_text_pnum: '',
            feed_text_pass: '',
            feed_text_prpt: '',
    });
    const [signupFormDrvr2, setSignupFormDrvr2] = useState({
            feed_file_ppic: null,
            feed_file_bank: null,
            feed_file_iden: null,
            feed_file_lcns: null,
            feed_text_bank: '',
            feed_text_iden: '',
            feed_text_lcns: '',
    });
    const [loginFormUser, setLoginFormUser] = useState({
            feed_text_pnml: '',
            feed_text_pass: '',
    });

    return {
        tilesImageSource, loadingImageSource,
        drvrImageSource, psngrImageSource, callcabImageSource,
        mapRef,
        locRegion, setLocRegion,
        locPoint, setLocPoint,
        userType, setUserType,
        loading, setLoading,
        categOrint, setCategOrint,
        categTheme, setCategTheme,
        showVelDrvr, setShowVelDrvr,
        showVelPsngr, setShowVelPsngr,
        showInfo, setShowInfo,
        showWord, setShowWord,
        showFormUser, setShowFormUser,
        showTabtlbr, setShowTabtlbr,
        selectedTab, setSelectedTab,
        showFormPsngr, setShowFormPsngr,
        showFormDrvr1, setShowFormDrvr1, 
        showFormDrvr2, setShowFormDrvr2,
        signupFormPsngrDrvr1, setSignupFormPsngrDrvr1,
        signupFormDrvr2, setSignupFormDrvr2,
        loginFormUser, setLoginFormUser, 
    };
};

export default Param;