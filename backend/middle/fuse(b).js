// Link
const crud = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/database/crud.js');

// Prll
const vldtSession = async (req, res) => {
    const rcvdToken = req.body.token;
    // if (rcvdToken !== 'notoken') {
    // const reqinfo = await model.vldtSession2(DB_PWT, rcvdToken); 
    //return res.send(reqinfo);
    // } else {
    // return res.send(true); // reqinfo
    // }
    // const vldtSession2 = async (DB_PWT, rcvdToken) => {
    const rows = await crud.queryDB(DB_PWT, `SELECT * FROM SESSIONS WHERE ID_SESN=?`, [rcvdToken]);
    if (rcvdToken !== 'notoken' && rows.length > 0 && rows[0].prll_slct_xprd === '#yes') {
        const reqinfo = { message: 'Your session has been expired!', validation: false }
        return res.send(reqinfo);
    } else if (rcvdToken !== 'notoken' && rows.length > 0 && rows[0].prll_slct_xprd === '#no') {
        const timeNow = new Date(); 
        const sessionID = rows[0].ID_SESN; 
        await crud.chngDB(DB_PWT, `UPDATE SESSIONS SET prll_date_fnsh = ? WHERE ID_sesn = ?`,
        [new Date(timeNow.getTime() + 1 * 20 * 1000).toISOString().replace('T', ' ').replace(/.[0-9]{3}Z/, ''), sessionID])
        // console.log('Your session has been updated!')
        const reqinfo = { message: '', validation: true }
        return res.send(reqinfo);
    } else if (rcvdToken !== 'notoken' && rows.length === 0) {
        // console.log('Session ID not found...')
        const reqinfo = { message: '', validation: false }
        return res.send(reqinfo);
    } else {
        // console.log('Guest user...')
        const reqinfo = { message: '', validation: true }
        return res.send(reqinfo);
    }
};

// Export
module.exports = {
    vldtSession, 
};

