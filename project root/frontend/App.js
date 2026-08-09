// Import
import React, { useState, useEffect } from 'react';
import SplashScreen from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/screens/splash.js';  
import UserScreen from 'D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/frontend/src/screens/user.js';

// Main 
const mainApp = () => { 
    const [showUserScreen, setShowUserScreen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowUserScreen(true);
        }, 4200);
    }, []);

    return (
        <>
            {showUserScreen ? (
                <UserScreen />
            ) : (
                <SplashScreen />
            )}
        </>
    );
};

// Export 
export default mainApp;