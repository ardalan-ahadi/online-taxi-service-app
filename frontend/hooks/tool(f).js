// Import
import { Dimensions } from 'react-native';

// Link
// import { vldtn } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/hooks/auth(f).js';
import { aeDtlLoc } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/hooks/auth(f).js';
import { loadTheme } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/hooks/auto(f).js';
import { watchLoc } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/hooks/prll(f).js';

// Export

export const toggleOrient = async () => {
    try {
        const ori = (Dimensions.get('window').width < Dimensions.get('window').height ? 'portrait' : 'landscape');
        return (ori); 
    } catch (error) {
        console.error(error);
    }
};

export const gotoLoc = async ({mapRef, 
                              vldtn}) => { 
    try {
        const loc = await watchLoc();
        if (loc) {
            const location = { 
                latitude: loc.coords.latitude, 
                longitude: loc.coords.longitude, 
                latitudeDelta: 0.0922, 
                longitudeDelta: 0.0421, 
            }; 
            await mapRef.current.animateToRegion(location); 
        } if (!loc) { 
            await aeDtlLoc(); 
        }
        await vldtn();
        } catch (error) {
        console.error(error);
    }      
};

export const toggleTheme = async ({vldtn}) => {
    try {
        const tem = await loadTheme();
        let nem = '';
        if (tem === 'light') {
            nem = 'dark';
        }
        if (tem === 'dark') {
            nem = 'light';
        }
        await vldtn();
        return nem;
    } catch (error) {
        console.error(error);
    }
};

export const callcab = async ({setLoading, 
                              vldtn}) => {
    try {
        setLoading(true);
        const sts = await vldtn();
        if (sts) {}
        setLoading(false);
        return sts;
    } catch (error) {
        console.error(error);
    }  
};