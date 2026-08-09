// Import
import { StyleSheet } from 'react-native';

// Style
export const styles = StyleSheet.create({ 

    container: { 
      flex: 1,
      display: 'flex', 
      alignItems: 'center',
      backgroundColor: '#fed90f', 
    }, 
  
    darkTheme: { 
      backgroundColor: '#001020', 
    }, 
  
    backForm: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#001020',
      opacity: 0.618,
    },
  
    dark_backForm: {
      backgroundColor: '#001020',
    },
  
    logsignForm: { 
      position: 'absolute',
      top: '19%', 
      right: 27, 
      left: 27, 
      height: '66.6%', 
      borderRadius: 10, 
      alignSelf: 'center', 
      alignItems: 'center',
      flexDirection: 'column', 
      shadowColor: '#000000', 
      shadowOffset: { width: 1, height: 2 }, 
      shadowOpacity: 0.5, 
      shadowRadius: 5, 
      elevation: 5, 
      color: '#001020', 
      backgroundColor: '#fed90f', 
    }, 
  
    dark_logsignForm: { 
      color: '#fed90f', 
      backgroundColor: '#001020', 
    },   
  
    land_logsignForm: { 
      top: '5%',
      height: '90%', 
    }, 
  
    tilesImage1: {
      position: 'absolute',
      top: 33,
      height: 45,
      width: '100%',
    },
  
    tilesImage2: {
      position: 'absolute',
      bottom: 33,
      height: 45,
      width: '100%',
    },
  
    callcabButton: { 
      position: 'absolute', 
      width: '20%', 
      height: '10%', 
      bottom: 25, 
      borderRadius: 50, 
      borderWidth: 2, 
      borderColor: '#001020', 
      elevation: 5,
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#fed90f', 
    }, 
  
    dark_callcabButton: {   
      borderColor: '#001020',
      backgroundColor: '#fed90f', 
    },
  
    land_callcabButton: {   
      position: 'absolute', 
      width: '10%', 
      height: '20%', 
      bottom: '5%', 
      borderRadius: 50, 
      borderWidth: 2, 
      borderColor: '#001020', 
      elevation: 5,
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#fed90f',     
    },  
  
    callcabImage: { 
      width: '80%', 
      height: '80%', 
    }, 
  
    loadingGif: {
      position: 'absolute', 
      top: '39.6%', 
      alignSelf: 'center', 
      flex: 1,
      width: 57,
      height: 57, 
      resizeMode: 'stretch', 
    },
  
}); 