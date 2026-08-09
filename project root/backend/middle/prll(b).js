// Link
const crud = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/database/crud.js');

// Prll
const watchSession = async(DB_PWT) => {
    const timeNow = new Date().toISOString().replace('T', ' ').replace(/.[0-9]{3}Z/, '');
    const rows = await crud.queryDB(DB_PWT, `SELECT * FROM SESSIONS`);
    rows.forEach((row) => {
      const timeNowDate = new Date(timeNow); 
      const timeXprDate = new Date(row.prll_date_fnsh);
      if (timeXprDate < timeNowDate) {
        const sessionID = row.ID_SESN;  
        crud.chngDB(DB_PWT, `UPDATE SESSIONS SET prll_slct_xprd = ? WHERE ID_SESN = ?`, ['#yes', sessionID]); 
      }
    });
};

// Export
module.exports = {
    watchSession, 
};