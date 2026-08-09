// Import
import React from 'react'; 
import { Platform, StatusBar, View,  Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

// Link
import CustomMap from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/components/map.js';
import Toolbar from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/components/toolbar.js'; 
import { callcab } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/hooks/tool(f).js';
import Logsign from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/screens/forms/logsign.js'; 
import Signup from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/screens/forms/signup.js'; 
import Velx2 from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/screens/forms/velx2.js'; 
import Word from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/screens/forms/word.js'; 
import Cancal from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/screens/forms/cancal.js'; 


// Style
import { styles } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/styles/usrstl.js';

// Core
const Core = ({ 
    loading, setLoading,     
    userType, vldtn,
    updtNem, categTheme, categOrint,
    mapRef, locRegion, locPoint,
    gotoLoc,
    openForm,
    openInfo, openWord,
    openVelP, openVelD,
    selectedTab, setSelectedTab,
    showTabtlbr, showFormPsngr,
    showFormDrvr1, showFormDrvr2,
    showFormUser,
    showInfo, showWord,
    showVelPsngr, showVelDrvr,
    setShowTabtlbr, setShowFormPsngr, 
    setShowFormDrvr1, setShowFormDrvr2,
    setShowFormUser,
    setShowInfo, setShowWord,
    setShowVelPsngr, setShowVelDrvr,
    tilesImageSource, loadingImageSource,
    psngrImageSource, drvrImageSource,
    callcabImageSource,
    drvrForm2,
    loginFormUser, feedChngUser,
    signupFormPsngrDrvr1, signupFormDrvr2,
    feedChngPsngrDrvr1, feedChngDrvr2,
    hndlSign, handleForgotUser,
    hndlFile1, hndlFile2, hndlFile3,
    hndlLog, hndlOut,
}) => {

    return ( 

        <KeyboardAvoidingView 
          style={[styles.container, categTheme === 'dark' ? styles.darkTheme : {}]} 
          behavior={Platform.OS === 'Android' ? 'padding' : 'height'} 
          keyboardVerticalOffset={0}
        > 
    
          <StatusBar
            barStyle={categTheme === 'dark' ? 'light-content' : 'dark-content'} 
            backgroundColor={categTheme === 'dark' ? 'black' : 'white'}  
          />
    
          <CustomMap 
            mapRef={mapRef}
            locRegion={locRegion} 
            locPoint={locPoint} 
            categTheme={categTheme} 
            categOrint={categOrint} 
          />
    
          <Toolbar 
            setLoading={setLoading}
            setShowFormUser={setShowFormUser} setShowTabtlbr={setShowTabtlbr} setSelectedTab={setSelectedTab} setShowVelPsngr={setShowVelPsngr} setShowVelDrvr={setShowVelDrvr}
            categOrint={categOrint} categTheme={categTheme} updtNem={updtNem} mapRef={mapRef} userType={userType}
            openForm={openForm} openVelP={openVelP} openVelD={openVelD} openInfo={openInfo} 
            setShowWord={setShowWord} setShowInfo={setShowInfo}
            gotoLoc={gotoLoc} vldtn={vldtn}
          />
    
          <TouchableOpacity style={[styles.callcabButton, 
                                    categTheme === 'dark' ? styles.dark_callcabButton : {}, 
                                    categOrint === 'landscape' ? styles.land_callcabButton : {}, 
                                  ]} onPress={() => callcab({setLoading, 
                                                             vldtn})}>
            <Image source={callcabImageSource} style={styles.callcabImage}/>
          </TouchableOpacity>  
    
          {showFormUser && ( 
            <>
            <View style={[styles.backForm, categTheme === 'dark' ? styles.dark_backForm : {}]}>
            </View> 
    
            <View style={[styles.logsignForm, 
                          categTheme === 'dark' ? styles.dark_logsignForm : {}, 
                          categOrint === 'landscape' ? styles.land_logsignForm : {}, 
                          ]}>
              { (categOrint === 'landscape' && (selectedTab === '' && (!showVelPsngr && !showVelDrvr && !showInfo && !showWord))) && ( 
                <Image source={tilesImageSource} style={styles.tilesImage1} />
              )}
              { !(categOrint === 'landscape' && (selectedTab === 'login' || (showFormPsngr || showFormDrvr1 || showFormDrvr2))) && ( 
                <Image source={tilesImageSource} style={styles.tilesImage2} />
              )}
    
              <Logsign 
                showTabtlbr={showTabtlbr} selectedTab={selectedTab} 
                setShowTabtlbr={setShowTabtlbr} setSelectedTab={setSelectedTab}
                setShowFormPsngr={setShowFormPsngr} setShowFormDrvr1={setShowFormDrvr1}
                categTheme={categTheme} categOrint={categOrint}
                psngrImageSource={psngrImageSource} drvrImageSource={drvrImageSource}
                loginFormUser={loginFormUser} feedChngUser={feedChngUser}
                handleForgotUser={handleForgotUser} hndlLog={hndlLog}
              />
    
              <Signup
                showFormPsngr={showFormPsngr} showFormDrvr1={showFormDrvr1} showFormDrvr2={showFormDrvr2}
                setShowFormDrvr1={setShowFormDrvr1} setShowFormDrvr2={setShowFormDrvr2} 
                categTheme={categTheme} categOrint={categOrint}
                signupFormPsngrDrvr1={signupFormPsngrDrvr1} signupFormDrvr2={signupFormDrvr2}
                feedChngPsngrDrvr1={feedChngPsngrDrvr1} feedChngDrvr2={feedChngDrvr2}
                hndlSign={hndlSign} hndlFile1={hndlFile1} hndlFile2={hndlFile2} hndlFile3={hndlFile3}
                drvrForm2={drvrForm2}
              />
    
              <Velx2
                categTheme={categTheme} categOrint={categOrint} 
                showVelPsngr={showVelPsngr} showVelDrvr={showVelDrvr} 
                hndlOut={hndlOut} 
              />
    
              <Word
                categTheme={categTheme} categOrint={categOrint} 
                showInfo={showInfo} showWord={showWord} setShowWord={setShowWord} 
                openWord={openWord} 
              />
    
            </View> 
    
            <Cancal
              categTheme={categTheme} categOrint={categOrint} 
              selectedTab={selectedTab} showFormDrvr2={showFormDrvr2} 
              showVelPsngr={showVelPsngr} showVelDrvr={showVelDrvr} showInfo={showInfo} showWord={showWord} 
              setShowVelPsngr={setShowVelPsngr} setShowVelDrvr={setShowVelDrvr} setShowInfo={setShowInfo} setShowWord={setShowWord} 
              setShowFormUser={setShowFormUser} setShowTabtlbr={setShowTabtlbr} setSelectedTab={setSelectedTab} 
              setShowFormPsngr={setShowFormPsngr} setShowFormDrvr1={setShowFormDrvr1} setShowFormDrvr2={setShowFormDrvr2} 
              vldtn={vldtn} 
            />
            </>
          )} 
          
          {loading && (
            <>
            <View style={[styles.backForm, categTheme === 'dark' ? styles.dark_backForm : {}]}>
            </View> 
            <Image 
              source={loadingImageSource} 
              style={styles.loadingGif} 
            />
            </>
          )}
    
        </KeyboardAvoidingView >
      );
};

export default Core;