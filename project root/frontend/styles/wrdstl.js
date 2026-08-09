// Import
import { StyleSheet } from 'react-native';

// Style
export const styles = StyleSheet.create({
    asTitle: {
      top: '3.69%',
      alignSelf: 'center',
      fontSize: 20, 
      fontWeight: 'bold', 
      fontStyle: 'italic', 
      textDecorationLine: 'underline',
      color: '#001020', 
    },
    dark_asTitle: {
      color: '#fed90f', 
    },
    inputLabel: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#001020'
    },
    dark_inputLabel: {
      color: '#fed90f'
    },
    wrdContainer: {
      top: '13%', 
      height: '71.71%', 
      marginLeft: '5%', 
      marginRight: '5%', 
      flexDirection: 'row', 
      flexWrap: 'wrap',
      alignSelf: 'center', 
      alignContent: 'center', 
      justifyContent: 'space-evenly', 
      borderTopWidth: 1, 
    },
    land_wrdContainer: {
      top: '1%', 
      width: '65.7%', 
      height: '65.7%', 
    },
    wrdButton: { 
      alignSelf: 'center', 
      alignItems: 'center', 
      marginTop: '12.21%', 
      height: '25%', 
      width: '27%', 
      backgroundColor: 'transparent',
      elevate: 2,
    },
    land_wrdButton: {
      height: '36%', 
      width: '17%', 
      marginTop: 0, 
      marginBottom: '3.3%', 
      marginLeft: '13%', 
      alignContent: 'center', 
    },
    wrdImage: {
      width: '77%', 
      height: '77%', 
      resizeMode: 'stretch',
    },
});