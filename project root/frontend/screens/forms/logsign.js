// Import
import React from 'react';
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native';

// Link
import { psngrForm, drvrForm1 } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/components/frame.js';

// Style
import { styles } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/styles/lgsstl.js'

// Component
const Logsign = ({ 
  showTabtlbr, selectedTab, 
  setShowTabtlbr, setSelectedTab, 
  setShowFormPsngr, setShowFormDrvr1,
  categTheme, categOrint, 
  psngrImageSource, drvrImageSource, 
  loginFormUser, feedChngUser, 
  handleForgotUser, hndlLog, 
}) => {

    const loginImageSource = categTheme === 'dark'
    ? require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/loginylw.png') 
    : require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/loginblk.png');

    return (
        <>
        {showTabtlbr && ( 
            <>
            <View style={styles.tabsContainer}>
            <TouchableOpacity onPress={() => setSelectedTab('login')}>
                <View style={[styles.tab_login, 
                            selectedTab === 'login' ? styles.selectedTab_login : {}, 
                            selectedTab === 'login' && categTheme === 'dark' ? styles.dark_selectedTab_login : {}, 
                            ]}>
                <Text style={[styles.tabText, 
                                selectedTab === 'login' ? styles.selectedTabText : {}, 
                                selectedTab === 'login' && categTheme === 'dark' ? styles.dark_selectedTabText : {}, 
                                ]}>Login</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedTab('signup')}>
                <View style={[styles.tab_signup, 
                            selectedTab === 'signup' ? styles.selectedTab_signup : {}, 
                            selectedTab === 'signup' && categTheme === 'dark' ? styles.dark_selectedTab_signup : {}, 
                            ]}>
                <Text style={[styles.tabText, 
                                selectedTab === 'signup' ? styles.selectedTabText : {}, 
                                selectedTab === 'signup' && categTheme === 'dark' ? styles.dark_selectedTabText : {}, 
                                ]}>Signup</Text>
                </View>
            </TouchableOpacity>
            </View>
            </>
        )}
        {selectedTab === 'login' && ( 
            <>
            <Image source={loginImageSource} style={[styles.loginImage, categOrint === 'landscape' ? styles.land_loginImage : {}]} />
            <View style={[styles.inputSignup21, categOrint === 'landscape' ? styles.land_inputSignup21 : {}]}>
            <Text style={[styles.inputLabel, categTheme === 'dark' ? styles.dark_inputLabel : {}]}>Phone Number / Email Address: </Text> 
            <TextInput 
                style={[
                styles.inputFieldLog, 
                categTheme === 'dark' ? styles.dark_inputFieldLog : {},
                { paddingHorizontal: 5, width: '84.2%', marginTop: 7.3 } 
                ]}
                placeholder='+90... or ...@email.com'
                textColor="#001020"
                value={loginFormUser.feed_text_pnml}
                onChangeText={(text) => feedChngUser({name: 'feed_text_pnml', value: text})}
            />
            </View>
            <View style={[styles.inputSignup22, categOrint === 'landscape' ? styles.land_inputSignup22 : {}]}>
            <Text style={[styles.inputLabel, categTheme === 'dark' ? styles.dark_inputLabel : {}]}>Password:     </Text> 
            <TextInput 
                style={[
                styles.inputFieldLog, 
                categTheme === 'dark' ? styles.dark_inputFieldLog : {},
                { paddingHorizontal: 5, width: '84.2%', marginTop: 7.3 } 
                ]}
                placeholder='Enter phrase!'
                textColor="#001020"
                secureTextEntry={true}
                value={loginFormUser.feed_text_pass}
                onChangeText={(text) => feedChngUser({name: 'feed_text_pass', value: text})}
            />
            </View>
            <TouchableOpacity style={[styles.forgotButton, 
                                    categTheme === 'dark' ? styles.dark_forgotButton : {}, 
                                    categOrint === 'landscape' ? styles.land_forgotButton : {}, 
                                    ]} onPress={() => handleForgotUser({setLoading, 
                                                                        loginFormUser})}>
            <Text style={[styles.forgotText, categTheme === 'dark' ? styles.dark_forgotText : {}]}>(Forgot?)</Text>
            </TouchableOpacity>            
            <TouchableOpacity style={[styles.agreeButton, 
                                    categTheme === 'dark' ? styles.dark_agreeButton : {}, 
                                    categOrint === 'landscape' ? styles.land_agreeButton : {}, 
                                    ]} onPress={hndlLog}>
            <Text style={[styles.agreeText, categTheme === 'dark' ? styles.dark_agreeText : {}]}>Continue</Text>
            </TouchableOpacity>  
            </>
        )}
        {selectedTab === 'signup' && ( 
            <>
            <Text style={[styles.inputLabel, 
                        categTheme === 'dark' ? styles.dark_inputLabel : {}, 
                        categOrint === 'landscape' ? {top: '66%'} : {top: '80%'}, 
                        {fontSize: 11 , textDecorationLine: 'underline'}]}> By continuing you agree to the policies of KIBTAXI.</Text>
            <TouchableOpacity style={[styles.signAsPsngrButton, 
                                    categTheme === 'dark' ? styles.dark_signAsPsngrButton : {}, 
                                    categOrint === 'landscape' ? styles.land_signAsPsngrButton : {}, 
                                    ]} onPress={() => psngrForm({setShowFormPsngr, setShowTabtlbr, setSelectedTab})}>
            <Image source={psngrImageSource} style={styles.asPsngrImage} />
            <Text style={[styles.asPsngrText, categTheme === 'dark' ? styles.dark_asPsngrText : {}]}>Passenger</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={[styles.signAsDrvrButton, 
                                    categTheme === 'dark' ? styles.dark_signAsDrvrButton : {}, 
                                    categOrint === 'landscape' ? styles.land_signAsDrvrButton : {}, 
                                    ]} onPress={() => drvrForm1({setShowFormDrvr1, setShowTabtlbr, setSelectedTab})}>
            <Image source={drvrImageSource} style={styles.asDrvrImage} />
            <Text style={[styles.asDrvrText, categTheme === 'dark' ? styles.dark_asDrvrText : {}]}>Driver</Text>
            </TouchableOpacity> 
            </>
        )}
        </>
    );
};

export default Logsign;