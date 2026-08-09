// Import
import React from 'react';
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native';

// Style
import { styles } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/styles/sgnstl.js'

// Component
const Signup = ({ 
    showFormPsngr, showFormDrvr1, showFormDrvr2,
    setShowFormDrvr1, setShowFormDrvr2, 
    categTheme, categOrint,
    signupFormPsngrDrvr1, signupFormDrvr2,
    feedChngPsngrDrvr1, feedChngDrvr2,
    hndlSign, hndlFile1, hndlFile2, hndlFile3,
    drvrForm2,
}) => {

    const signupImageSource = categTheme === 'dark'
    ? require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/signupylw.png') 
    : require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/signupblk.png');
    
    return (
        <>
        {(showFormPsngr || (showFormDrvr1 || showFormDrvr2)) && (
            <>
            {(showFormPsngr || showFormDrvr1) && (
            <>
            <Image source={signupImageSource} style={[styles.signupImage, categOrint === 'landscape' ? styles.land_signupImage : {}]} />
            <View style={[styles.inputSignup1, categOrint === 'landscape' ? styles.land_inputSignup1 : {}]}>
                <Text style={[styles.inputLabel, categTheme === 'dark' ? styles.dark_inputLabel : {}]}>Phone Number: </Text> 
                <TextInput 
                style={[
                    styles.inputFieldSign, 
                    categTheme === 'dark' ? styles.dark_inputFieldSign : {},
                    { paddingHorizontal: 5 } 
                ]}
                keyboardType="phone-pad"
                placeholder='+90...'
                textColor="#001020"
                value={signupFormPsngrDrvr1.feed_text_pnum}
                onChangeText={(text) => feedChngPsngrDrvr1({name: 'feed_text_pnum', value: text})}
                />
            </View>
            <View style={[styles.inputSignup2, categOrint === 'landscape' ? styles.land_inputSignup2 : {}]}>
                <Text style={[styles.inputLabel, categTheme === 'dark' ? styles.dark_inputLabel : {}]}>Password: </Text> 
                <TextInput 
                style={[styles.inputFieldSign, 
                    categTheme === 'dark' ? styles.dark_inputFieldSign : {},
                    { paddingHorizontal: 5 } 
                ]}
                placeholder='Enter phrase!'
                textColor="#001020"
                secureTextEntry={true}
                value={signupFormPsngrDrvr1.feed_text_pass}
                onChangeText={(text) => feedChngPsngrDrvr1({name: 'feed_text_pass', value: text })}
                />
            </View>
            <View style={[styles.inputSignup3, categOrint === 'landscape' ? styles.land_inputSignup3 : {}]}>
                <Text style={[styles.inputLabel, categTheme === 'dark' ? styles.dark_inputLabel : {}]}>Confirm Password: </Text> 
                <TextInput 
                style={[styles.inputFieldSign, 
                    categTheme === 'dark' ? styles.dark_inputFieldSign : {},
                    { paddingHorizontal: 5 } 
                ]}
                placeholder='Repeat phrase!'
                secureTextEntry={true}
                value={signupFormPsngrDrvr1.feed_text_prpt}
                onChangeText={(text) => feedChngPsngrDrvr1({name: 'feed_text_prpt', value: text })}
                />
            </View>
            </>
            )}

            {showFormPsngr && (
            <>
            <Text style={[styles.asTitle, 
                                categTheme === 'dark' ? styles.dark_asTitle : {}, 
                                categOrint === 'landscape' ? styles.land_asTitle : {}]}>Passenger's Signup Form</Text>
            <TouchableOpacity style={[styles.agreeButton, 
                                categTheme === 'dark' ? styles.dark_agreeButton : {}, 
                                categOrint === 'landscape' ? styles.land_agreeButton : {}]} onPress={() => hndlSign({type: 'Passenger'})}>
                <Text style={[styles.agreeText, categTheme === 'dark' ? styles.dark_agreeText : {}]}>Continue</Text>
            </TouchableOpacity>  
            </>
            )}

            {showFormDrvr1 && (
            <>
            <Text style={[styles.asTitle, 
                                categTheme === 'dark' ? styles.dark_asTitle : {}, 
                                categOrint === 'landscape' ? styles.land_asTitle : {}]}>Driver's Signup Form</Text>
            <TouchableOpacity style={[styles.agreeButton, 
                                categTheme === 'dark' ? styles.dark_agreeButton : {}, 
                                categOrint === 'landscape' ? styles.land_agreeButton : {}]} onPress={() => drvrForm2({signupFormPsngrDrvr1,setShowFormDrvr1, setShowFormDrvr2})}>
                <Text style={[styles.agreeText, categTheme === 'dark' ? styles.dark_agreeText : {}]}>Continue</Text>
            </TouchableOpacity>  
            </>
            )}

            {showFormDrvr2 && (
            <>
            <Text style={[styles.asTitle, 
                                categTheme === 'dark' ? styles.dark_asTitle : {}, 
                                categOrint === 'landscape' ? styles.land_asTitle : {}, 
                                ]}>Documents Submission</Text> 
            <Image source={signupImageSource} style={[styles.signupImage, categOrint === 'landscape' ? styles.land_signupImage : {}]} />
            <View style={[styles.inputSignup11, categOrint === 'landscape' ? styles.land_inputSignup11 : {}]}>
                <Text style={[styles.inputLabel, categTheme === 'dark' ? styles.dark_inputLabel : {}]}>Profile Picture:</Text>
                <TouchableOpacity style={[styles.atchBtn, categTheme === 'dark' ? styles.dark_atchBtn : {}]} onPress={hndlFile1}>
                <Text style={[styles.inputLabel,{fontSize: 13, fontWeight: 'bold'}]}>Choose File</Text>
                </TouchableOpacity>
                {signupFormDrvr2.feed_file_ppic && (<Image source={{ uri: signupFormDrvr2.feed_file_ppic }} style={styles.thumbnail} resizeMode="cover" /> )}
            </View>
            <View style={[styles.inputSignup12, categOrint === 'landscape' ? styles.land_inputSignup12 : {}]}>
                <Text style={[styles.inputLabel, categTheme === 'dark' ? styles.dark_inputLabel : {}]}>ID Card:</Text>
                <TouchableOpacity style={[styles.atchBtn, categTheme === 'dark' ? styles.dark_atchBtn : {}]} onPress={hndlFile2}>
                <Text style={[styles.inputLabel,{fontSize: 13, fontWeight: 'bold'}]}>Choose File</Text>
                </TouchableOpacity>
                {signupFormDrvr2.feed_file_iden && (<Image source={{ uri: signupFormDrvr2.feed_file_iden }} style={styles.thumbnail} resizeMode="cover" /> )}
            </View>
            <View style={[styles.inputSignup13, categOrint === 'landscape' ? styles.land_inputSignup13 : {}]}>
                <Text style={[styles.inputLabel, categTheme === 'dark' ? styles.dark_inputLabel : {}]}>Driving License:</Text>
                <TouchableOpacity style={[styles.atchBtn, categTheme === 'dark' ? styles.dark_atchBtn : {}]} onPress={hndlFile3}>
                <Text style={[styles.inputLabel,{fontSize: 13, fontWeight: 'bold'}]}>Choose File</Text>
                </TouchableOpacity>
                {signupFormDrvr2.feed_file_lcns && (<Image source={{ uri: signupFormDrvr2.feed_file_lcns }} style={styles.thumbnail} resizeMode="cover" /> )}
            </View>
            <View style={[styles.inputSignup14, categOrint === 'landscape' ? styles.land_inputSignup14 : {}]}>
                <Text style={[styles.inputLabel, categTheme === 'dark' ? styles.dark_inputLabel : {}]}>Credit Card Serial:</Text>
                <TextInput 
                style={[
                    styles.inputFieldSign, 
                    categTheme === 'dark' ? styles.dark_inputFieldSign : {},
                    { paddingHorizontal: 5 } 
                ]}
                keyboardType="phone-pad"
                placeholder='****-****-****-****'
                textColor="#001020" 
                value={signupFormDrvr2.feed_text_bank} 
                onChangeText={(text) => feedChngDrvr2({name: 'feed_text_bank', value: text})} 
                />
            </View>
            <TouchableOpacity style={[styles.agreeButton, 
                                categTheme === 'dark' ? styles.dark_agreeButton : {}, 
                                categOrint === 'landscape' ? styles.land_agreeButton : {}, 
                                ]} onPress={() => hndlSign({type: 'Driver'})}>
                <Text style={[styles.agreeText, categTheme === 'dark' ? styles.dark_agreeText : {}]}>Continue</Text>
            </TouchableOpacity> 
            </>
            )}
            </>
        )}
        </>
    );
};

export default Signup;