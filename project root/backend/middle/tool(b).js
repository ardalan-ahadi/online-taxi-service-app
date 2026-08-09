// Link
const crud = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/database/crud.js');

// Tool

const updtHloc = async (req, res) => {
    const rcvdToken = req.body.token;
    const rcvdLoc = req.body.locord;
    const timeNow = new Date().toISOString().replace('T', ' ').replace(/.[0-9]{3}Z/, '');
    const rowsDrvr = await crud.queryDB(DB_PWT, `SELECT * FROM SESSIONS WHERE ID_SESN=?`, [rcvdToken]);
    if (rowsDrvr.length > 0) {
      const rcvdidhloc = rowsDrvr[0].ID_user.replace(/-/g,'_');
      DB_PWT.run(`INSERT INTO HLOC_${rcvdidhloc} (sckt_lgps, auto_date_cord) VALUES (?, ?)`, [rcvdLoc, timeNow], 
        () => {
      });
    } else {
      // console.log('No session found with the provided token.');
    }
};

const wrdInfo = async (req, res) => {
    const rows = await crud.queryDB(DB_PWT, `SELECT * FROM WORD`);
    const lastRow = rows[rows.length - 1];
    const words = {
        sttmnt1: lastRow.feed_file_wrds_canc,
        sttmnt2: lastRow.feed_file_wrds_cstm,
        sttmnt3: lastRow.feed_file_wrds_drvr,
        sttmnt4: lastRow.feed_file_wrds_pays,
        sttmnt5: lastRow.feed_file_wrds_pens,
        sttmnt6: lastRow.feed_file_wrds_prvc,
        sttmnt7: lastRow.feed_file_wrds_howt
    };
    return res.send(words);
};

// Export
module.exports = {
    updtHloc, 
    wrdInfo,
};