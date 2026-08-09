// Import
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

// Link
import { gosgnForm, godrvForm, openInfo, closeForm } 
        from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/components/frame.js';

// Style
import { styles } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/styles/canstl.js';

// Component
const Cancal = ({ 
    categTheme, categOrint, 
    selectedTab, showFormDrvr2, 
    showVelPsngr, showVelDrvr, showInfo, showWord, 
    setShowVelPsngr, setShowVelDrvr, setShowInfo, setShowWord, 
    setShowFormUser, setShowTabtlbr, setSelectedTab, 
    setShowFormPsngr, setShowFormDrvr1, setShowFormDrvr2, 
    vldtn, 
}) => {

    const cancelImageSource = categTheme === 'dark'
    ? require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/noylw.png') 
    : require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/noblk.png'); 

    return (
        <>
        {(selectedTab !== '' || (selectedTab === '' && (showVelPsngr || showVelDrvr || (showInfo && !showWord)))) && ( 
        <TouchableOpacity style={[styles.cancelButton, 
                                categTheme === 'dark' ? styles.dark_cancelButton : {}, 
                                categOrint === 'landscape' ? styles.land_cancelButton : {}, 
                                ]} onPress={() => closeForm({setShowFormUser, setShowVelPsngr, setShowVelDrvr, setShowTabtlbr, setSelectedTab, setShowFormPsngr, setShowFormDrvr1, setShowFormDrvr2, setShowInfo,
                                                            vldtn})}>
        <Image source={cancelImageSource} style={styles.cancelImage} />
        </TouchableOpacity> 
        )}
        {(selectedTab === '' && showWord) && ( 
            <TouchableOpacity style={[styles.cancelButton, 
                                    categTheme === 'dark' ? styles.dark_cancelButton : {}, 
                                    categOrint === 'landscape' ? styles.land_cancelButton : {}, 
                                    ]} onPress={() => openInfo({setShowWord, setShowFormUser, setShowTabtlbr, setSelectedTab, setShowInfo, 
                                                                vldtn})}>
            <Image source={cancelImageSource} style={styles.cancelImage} />
            </TouchableOpacity> 
        )}      
        {(selectedTab === '' && !showFormDrvr2 && (!showVelPsngr && !showVelDrvr && !showInfo && !showWord)) && ( 
            <TouchableOpacity style={[styles.cancelButton, 
                                    categTheme === 'dark' ? styles.dark_cancelButton : {}, 
                                    categOrint === 'landscape' ? styles.land_cancelButton : {}, 
                                    ]} onPress={() => gosgnForm({setShowFormUser, setShowTabtlbr, setSelectedTab ,
                                                                setShowFormPsngr, setShowFormDrvr1, setShowFormDrvr2})}>
            <Image source={cancelImageSource} style={styles.cancelImage} />
            </TouchableOpacity> 
        )}
        {(selectedTab === '' && showFormDrvr2 && (!showVelPsngr && !showVelDrvr && !showInfo && !showWord)) && ( 
            <TouchableOpacity style={[styles.cancelButton,  
                                    categTheme === 'dark' ? styles.dark_cancelButton : {}, 
                                    categOrint === 'landscape' ? styles.land_cancelButton : {}, 
                                    ]} onPress={() => godrvForm({setShowFormDrvr1, setShowFormDrvr2})}>
            <Image source={cancelImageSource} style={styles.cancelImage} />
            </TouchableOpacity> 
        )}
        </>
    )
};

export default Cancal;