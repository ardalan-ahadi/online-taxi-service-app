// Import
import React from 'react'; 

// Link
import { openForm, drvrForm2, openVelP, openVelD, openInfo, openWord } 
        from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/components/frame.js';
import Core from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/components/core.js';
import { handleForgotUser } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/components/button.js';
import { gotoLoc } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/hooks/tool(f).js';
import Param from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/keyconf(f).js'; 
import Prince from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/services/principle.js'; 
import Effect from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/services/effect.js'; 

// User

const UserScreen = () => { 

  // Init
  const {
    tilesImageSource, loadingImageSource,
    drvrImageSource, psngrImageSource, callcabImageSource,
    editImageSource, outImageSource, 
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
  } = Param();

  // Func
  const { 
    vldtn, updtNem, 
    feedChngPsngrDrvr1, feedChngDrvr2, feedChngUser, 
    hndlSign, hndlLog, hndlOut, 
    hndlFile1, hndlFile2, hndlFile3, hndlFile,
  } = Prince(    
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
  );

  // React
  Effect({mapRef, setLocPoint, setCategTheme, setCategOrint, vldtn});

  // Frnt
  return ( 
    <Core
      loading={loading} setLoading={setLoading}     
      userType={userType} vldtn={vldtn} 
      updtNem={updtNem} categTheme={categTheme} categOrint={categOrint} 
      mapRef={mapRef} locRegion={locRegion} locPoint={locPoint} 
      gotoLoc={gotoLoc} 
      openForm={openForm} 
      openInfo={openInfo} openWord={openWord} 
      openVelP={openVelP} openVelD={openVelD} 
      selectedTab={selectedTab} setSelectedTab={setSelectedTab} 
      showTabtlbr={showTabtlbr} showFormPsngr={showFormPsngr} 
      showFormDrvr1={showFormDrvr1} showFormDrvr2={showFormDrvr2} 
      showFormUser={showFormUser} 
      showInfo={showInfo} showWord={showWord} 
      showVelPsngr={showVelPsngr} showVelDrvr={showVelDrvr} 
      setShowTabtlbr={setShowTabtlbr} setShowFormPsngr={setShowFormPsngr} 
      setShowFormDrvr1={setShowFormDrvr1} setShowFormDrvr2={setShowFormDrvr2} 
      setShowFormUser={setShowFormUser} 
      setShowInfo={setShowInfo} setShowWord={setShowWord} 
      setShowVelPsngr={setShowVelPsngr} setShowVelDrvr={setShowVelDrvr} 
      tilesImageSource={tilesImageSource} loadingImageSource={loadingImageSource} 
      psngrImageSource={psngrImageSource} drvrImageSource={drvrImageSource} 
      callcabImageSource={callcabImageSource} 
      drvrForm2={drvrForm2} 
      loginFormUser={loginFormUser} feedChngUser={feedChngUser} 
      signupFormPsngrDrvr1={signupFormPsngrDrvr1} signupFormDrvr2={signupFormDrvr2} 
      feedChngPsngrDrvr1={feedChngPsngrDrvr1} feedChngDrvr2={feedChngDrvr2} 
      hndlSign={hndlSign} handleForgotUser={handleForgotUser} 
      hndlFile1={hndlFile1} hndlFile2={hndlFile2} hndlFile3={hndlFile3} 
      hndlLog={hndlLog} hndlOut={hndlOut}
    />
  );
}; 

// Export
export default UserScreen;