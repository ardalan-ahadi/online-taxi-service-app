// Import
import { useEffect } from 'react';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

// Link
import { toggleOrient } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/hooks/tool(f).js';
import { loadTheme } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/hooks/auto(f).js';
import { watchLoc, firstOnLoc, firstOffLoc } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/hooks/prll(f).js';
import { hstryLoc } from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/hooks/fuse(f).js';

// React
const Effect = ({mapRef, setLocPoint, setCategTheme, setCategOrint, vldtn}) => {
  useEffect(() => {

    // vld
    vldtn();

    // 1st
    (async () => {
      AsyncStorage.setItem('firstOn', 'yes');
      AsyncStorage.setItem('firstOff', 'yes');
    })();

    // tem
    (async () => {
      const tem = await loadTheme();
      await AsyncStorage.setItem('theme', tem);
      setCategTheme(tem);
    })();

    // ori
    const updtOri = async () => {
      const ori = await toggleOrient();
      setCategOrint(ori);     
    };
    const dimensionListener = Dimensions.addEventListener('change', updtOri);

    // lup
    const intervalWatch = setInterval(async () => {
      const loc = await watchLoc(); 
      if (loc) {
        setLocPoint(loc);
      } else {
        setLocPoint(null);
      }
    }, 5000);
    const intervalHstry = setInterval(hstryLoc, 5000);
    const intervalOn = setInterval(() => firstOnLoc({mapRef}), 5000);
    const intervalOff = setInterval(firstOffLoc, 5000);
  
    // clear
    return () => {
      dimensionListener.remove();
      clearInterval(intervalWatch);
      clearInterval(intervalHstry);
      clearInterval(intervalOn);
      clearInterval(intervalOff);
    };
  }, []);

};

// Export 
export default Effect;