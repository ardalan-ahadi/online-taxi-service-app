// Import
import { StyleSheet } from 'react-native';

// Style
export const styles = StyleSheet.create({
    cancelButton: {
        position: 'absolute', 
        alignSelf: 'center',
        top: '6.66%',
        padding: 25,
        borderWidth: 1, 
        borderRadius: 25, 
        borderColor: '#001020', 
        backgroundColor: '#fed90f',
        opacity: .8,
    },  
    dark_cancelButton: {  
        borderColor: '#fed90f', 
        backgroundColor: '#001020',
    },  
    land_cancelButton: {  
        top: '36.9%',
        left: '11%',
    },  
    cancelImage: { 
        position: 'absolute',
        alignSelf: 'center',
        top: 0,
        width: 50,
        height: 50,    
    },  
});
