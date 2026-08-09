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
    land_asTitle: {
        top: 0, 
        fontSize: 19, 
    },
    editButton: {  
        position: 'absolute', 
        top: 21,
        left: 15,
        height: 27, 
        width: 33, 
        backgroundColor: 'transparent',      
    },  
    land_editButton: {
        top: 11,
        left: 13,
    },
    editImage: {
        width: '100%', 
        height: '100%', 
    }, 
    outButton: {  
        position: 'absolute', 
        top: 21,
        right: 11,
        height: 27, 
        width: 36, 
        backgroundColor: 'transparent',      
    },  
    land_outButton: {
        top: 11,
        right: 13,
    },
    outImage: {
        width: '100%', 
        height: '100%', 
    },
});