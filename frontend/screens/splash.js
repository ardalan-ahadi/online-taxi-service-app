// Import
import React, { useRef, useEffect } from 'react'; 
import { StyleSheet, View, Text, Image, Animated, StatusBar } from 'react-native'; 

// Export

const SplashScreen = () => { 
  const animation = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => { 
    Animated.sequence([ 
      Animated.timing(animation, { 
        toValue: 1.1,
        duration: 2000,
        useNativeDriver: true, 
      }), 
      Animated.timing(animation, { 
        toValue: 1,
        duration: 200, 
        useNativeDriver: true, 
      }), 
      Animated.timing(fadeAnim, {
        toValue: 1, 
        duration: 1100, 
        useNativeDriver: true, 
      }),
    ]).start(); 
  }, []); 
    
  return ( 
    <View style={styles.container}> 
      <Animated.View style={[styles.logoContainer, { transform: [{ scale: animation }] }]}>  
        <Image 
          source={require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/assets/image/splash.png')} 
          style={styles.logo} 
        /> 
      </Animated.View> 
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={{ fontSize: 17, fontWeight: 'bold'}}>Kendine İyi Bak...</Text>
      </Animated.View>
      <StatusBar translucent={true} backgroundColor='transparent' barStyle='dark-content' /> 
    </View> 
  ); 
};

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#fed90f', 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
  logoContainer: {
    width: 333, 
    height: 333, 
    shadowColor: '#ffff00', 
    shadowOffset: { width: 2, height: 2 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 5, 
  }, 
  logo: { 
    width: '100%',
    height: '100%', 
  }, 
}); 

export default SplashScreen; 