// Link
const crud = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/database/crud.js');

// Auto
const uniqueUUID = async (db, uuid) => { 
  let isUnique = false;
  let nuid;
  while (!isUnique) {
    nuid = uuid.v4();
    const rowsPsngr = await crud.queryDB(db, 'SELECT * FROM DRIVERS WHERE ID_DRVR = ?', [nuid]);
    const rowsDrvr = await crud.queryDB(db, 'SELECT * FROM PASSENGERS WHERE ID_PSNGR = ?', [nuid]);
    isUnique = (rowsPsngr.length === 0 && rowsDrvr.length === 0);
  }
  return nuid;
}

// Export
module.exports = {
    uniqueUUID,
};