// Import
import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

// Style
import { styles } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/styles/velstl.js'

// Component
const Velx2 = ({ 
    categTheme, categOrint, 
    showVelPsngr, showVelDrvr, 
    hndlOut, 
}) => {

    const editImageSource = categTheme === 'dark'
    ? require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/editylw.png') 
    : require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/editblk.png');  
    const outImageSource = categTheme === 'dark'
    ? require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/outblk.png') 
    : require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/outylw.png');   
    
    return (
        <>
        {showVelPsngr && (
        <>
            <Text style={[styles.asTitle, 
                            categTheme === 'dark' ? styles.dark_asTitle : {}, 
                            categOrint === 'landscape' ? styles.land_asTitle : {}, 
                        ]}>Passenger's Profile</Text>
            <TouchableOpacity style={[styles.editButton, categOrint === 'landscape' ? styles.land_editButton : {}]} > 
                <Image source={editImageSource} style={styles.editImage} /> 
            </TouchableOpacity>
            <TouchableOpacity style={[styles.outButton, categOrint === 'landscape' ? styles.land_outButton : {}]} onPress={hndlOut} > 
                <Image source={outImageSource} style={styles.outImage} /> 
            </TouchableOpacity>
        </>
        )}
        { showVelDrvr && (
        <>
            <Text style={[styles.asTitle, 
                            categTheme === 'dark' ? styles.dark_asTitle : {}, 
                            categOrint === 'landscape' ? styles.land_asTitle : {}, 
                        ]}>Driver's Profile</Text>
            <TouchableOpacity style={[styles.editButton, categOrint === 'landscape' ? styles.land_editButton : {}]} > 
                <Image source={editImageSource} style={styles.editImage} /> 
            </TouchableOpacity>  
            <TouchableOpacity style={[styles.outButton, categOrint === 'landscape' ? styles.land_outButton : {}]} onPress={hndlOut} > 
                <Image source={outImageSource} style={styles.outImage} /> 
            </TouchableOpacity>
            </>
        )}   
        </>
    )
}

// Export
export default Velx2;