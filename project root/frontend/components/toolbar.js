// Import
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

// Style
import {styles} from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/styles/tlbrstl.js'

const Toolbar = ({
    setLoading,
    setShowFormUser, setShowTabtlbr, setSelectedTab, setShowVelPsngr, setShowVelDrvr,
    categOrint, categTheme, updtNem, mapRef, userType,
    openForm, openVelP, openVelD, openInfo, 
    setShowWord, setShowInfo,
    gotoLoc, vldtn,
}) => {
      
    const isLandscape = categOrint === 'landscape';
    const isDarkTheme = categTheme === 'dark';

    const profImageSource = categTheme === 'dark'
    ? require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/btnylwprof.png') 
    : require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/btnblkprof.png'); 
    const drvrImageSource = categTheme === 'dark'
    ? require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/drvrylw.png') 
    : require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/drvrblk.png'); 
    const psngrImageSource = categTheme === 'dark'
    ? require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/psngrylw.png') 
    : require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/psngrblk.png'); 
    const gpsImageSource = categTheme === 'dark'
    ? require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/gpsylw.png') 
    : require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/gpsblk.png'); 
    const themeImageSource = categTheme === 'dark'
    ? require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/btnsun.png') 
    : require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/btnmoon.png'); 
    const infoImageSource = categTheme === 'dark'
    ? require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/btnylwinfo.png') 
    : require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/btnblkinfo.png'); 
  
    const renderUserButton = () => {
      switch (userType) {
        case 'Guest':
          return (
            <TouchableOpacity
              style={[styles.logsignButton, isLandscape ? styles.land_logsignButton : {}]} 
              onPress={() => openForm({ setLoading, setShowFormUser, setShowTabtlbr, setSelectedTab })}>
              <Image source={profImageSource} style={styles.profImage} />
            </TouchableOpacity>
          );
        case 'Passenger':
          return (
            <TouchableOpacity
              style={[styles.logsignButton, isLandscape ? styles.land_logsignButton : {}]} 
              onPress={() => openVelP({ setShowFormUser, setShowVelPsngr,
                                        vldtn})}>
              <Image source={psngrImageSource} style={styles.profImage_psngr} />
            </TouchableOpacity>
          );
        case 'Driver':
          return (
            <TouchableOpacity
              style={[styles.logsignButton, isLandscape ? styles.land_logsignButton : {}]} 
              onPress={() => openVelD({ setShowFormUser, setShowVelDrvr, 
                                        vldtn})}>
              <Image source={drvrImageSource} style={styles.profImage_drvr} />
            </TouchableOpacity>
          );
        default:
          return null;
      }
    };
  
    return (
      <View style={[styles.headerRibbon, isLandscape ? styles.land_headerRibbon : {}, isDarkTheme ? styles.dark_headerRibbon : {}]}>
        {renderUserButton()}
        <TouchableOpacity style={[styles.gpsButton, isLandscape ? styles.land_gpsButton : {}]} onPress={() => gotoLoc({mapRef, 
                                                                                                                       vldtn})}>
          <Image source={gpsImageSource} style={styles.gpsImage} />
        </TouchableOpacity>        
        <TouchableOpacity style={[styles.themeSwitch, isLandscape ? styles.land_themeSwitch : {}]} onPress={() => updtNem()}>
          <Image source={themeImageSource} style={styles.themeImage} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.infoButton, isLandscape ? styles.land_infoButton : {}]} onPress={() => openInfo({ setShowWord, setShowFormUser, setShowTabtlbr, setSelectedTab, setShowInfo, 
                                                                                                                            vldtn})}>
          <Image source={infoImageSource} style={styles.infoImage} />
        </TouchableOpacity>
      </View>
    );
};

export default Toolbar;