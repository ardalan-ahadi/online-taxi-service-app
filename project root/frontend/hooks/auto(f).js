// Import
import AsyncStorage from '@react-native-async-storage/async-storage'; 

// Export

export const loadTheme = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let tem = '';
            const ldTem = await AsyncStorage.getItem('theme');
            if (ldTem) {
                tem = ldTem;
            } else {
                tem = 'light'
            }
            await AsyncStorage.setItem('theme', tem);
            resolve(tem); 
        } catch (error) {
            console.error(error);
            reject(error); 
        }
    });
};