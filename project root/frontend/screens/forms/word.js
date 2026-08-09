// Import
import React from 'react';
import { TouchableOpacity, Text, Image, View, ScrollView } from 'react-native';

// Style
import { styles } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/styles/wrdstl.js';

// Component
const Word = ({ 
    categTheme, categOrint, 
    showInfo, showWord, setShowWord, 
    openWord, 
}) => {

    const wrdImageSource = categTheme === 'dark'
    ? require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/wrdylw.png') 
    : require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/wrdblk.png');

    return (
        <>
        { showInfo && (
            <>
            <Text style={[
                styles.asTitle, 
                categTheme === 'dark' ? styles.dark_asTitle : {}, 
                categOrint === 'landscape' ? styles.land_asTitle : {}
            ]}>
                Policies Statement
            </Text>
            <View style={[styles.wrdContainer, categOrint === 'landscape' ? styles.land_wrdContainer : {}]} >
                {showWord ? (
                    <View>
                        <ScrollView>
                            <Text style={[
                                styles.inputLabel, 
                                { fontSize: 11, marginLeft: 10, marginRight: 10, alignSelf: 'center', textAlign: 'justify' }, 
                                categTheme === 'dark' ? styles.dark_inputLabel : {}
                            ]}>
                                {showWord}
                            </Text>
                        </ScrollView>
                    </View>
                ) : (
                    <>
                    {/*
                    <TouchableOpacity style={[styles.wrdButton, categOrint === 'landscape' ? styles.land_wrdButton : {}]} onPress={handleWrd(1)}> 
                        <Image source={wrdImageSource} style={styles.wrdImage} /> 
                        <Text style={[styles.inputLabel, {fontSize: 13}, categTheme === 'dark' ? styles.dark_inputLabel : {}]}>Cancellation </Text> 
                    </TouchableOpacity>  
                    */}
                    <TouchableOpacity style={[styles.wrdButton, categOrint === 'landscape' ? styles.land_wrdButton : {}]} onPress={() => openWord({index: 2, setShowWord})}> 
                        <Image source={wrdImageSource} style={styles.wrdImage} /> 
                        <Text style={[styles.inputLabel, {fontSize: 13}, categTheme === 'dark' ? styles.dark_inputLabel : {}]}>Passenger </Text> 
                    </TouchableOpacity> 

                    <TouchableOpacity style={[styles.wrdButton, categOrint === 'landscape' ? styles.land_wrdButton : {}]} onPress={() => openWord({index: 3, setShowWord})}> 
                        <Image source={wrdImageSource} style={styles.wrdImage} /> 
                        <Text style={[styles.inputLabel, {fontSize: 13}, categTheme === 'dark' ? styles.dark_inputLabel : {}]}>Driver </Text> 
                    </TouchableOpacity> 

                    <TouchableOpacity style={[styles.wrdButton, categOrint === 'landscape' ? styles.land_wrdButton : {}]} onPress={() => openWord({index: 4, setShowWord})}> 
                        <Image source={wrdImageSource} style={styles.wrdImage} /> 
                        <Text style={[styles.inputLabel, {fontSize: 13}, categTheme === 'dark' ? styles.dark_inputLabel : {}]}>Payment </Text> 
                    </TouchableOpacity> 

                    <TouchableOpacity style={[styles.wrdButton, categOrint === 'landscape' ? styles.land_wrdButton : {}]} onPress={() => openWord({index: 5, setShowWord})}> 
                        <Image source={wrdImageSource} style={styles.wrdImage} /> 
                        <Text style={[styles.inputLabel, {fontSize: 13}, categTheme === 'dark' ? styles.dark_inputLabel : {}]}>Penalty </Text> 
                    </TouchableOpacity> 

                    <TouchableOpacity style={[styles.wrdButton, categOrint === 'landscape' ? styles.land_wrdButton : {}]} onPress={() => openWord({index: 6, setShowWord})}> 
                        <Image source={wrdImageSource} style={styles.wrdImage} /> 
                        <Text style={[styles.inputLabel, {fontSize: 13}, categTheme === 'dark' ? styles.dark_inputLabel : {}]}>Privacy </Text> 
                    </TouchableOpacity> 

                    <TouchableOpacity style={[styles.wrdButton, categOrint === 'landscape' ? styles.land_wrdButton : {}]} onPress={() => openWord({index: 7, setShowWord})}> 
                        <Image source={wrdImageSource} style={styles.wrdImage} /> 
                        <Text style={[styles.inputLabel, {fontSize: 13}, categTheme === 'dark' ? styles.dark_inputLabel : {}]}>Terms Of Use </Text> 
                    </TouchableOpacity> 
                    </>
                )}
            </View>
            </>
        )}
        </>
    );
};

export default Word;