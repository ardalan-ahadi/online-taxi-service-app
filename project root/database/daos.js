// Link
const crud = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/database/crud.js');

// Insert into "PASSENGERS" dataset
const insertPassengers= async (DB_PWT, nuid, reqbody) => {
    try {
      DB_PWT.run(`INSERT INTO PASSENGERS (
        ID_PSNGR, 
        feed_text_name, feed_text_surn, feed_text_mail, feed_text_pnum, feed_file_ppic, feed_text_pass, 
        auto_text_vcod, auto_date_sign, 
        prll_slct_bann_list, prty_slct_bann_list, prty_durt_bann_list, 
        auto_date_bnbg_list, auto_date_bnnd_list, 
        fuse_plcy_list, 
        auto_awcd_list )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
        nuid, 
        '', '', '', reqbody.feed_text_pnum, '', reqbody.feed_text_pass,   
        '1234', new Date().toISOString().replace('T', ' ').replace(/.[0-9]{3}Z/, ''),  
        [], [], [], 
        [], [], 
        ['yes'], 
        []
        ],
      );
    } catch (error) {
      console.log(error);
    }
  };

  // Insert into "DRIVERS" dataset
const insertDrivers= async (DB_PWT, nuid, reqbody) => {
    try {
      DB_PWT.run(`INSERT INTO Drivers (
        ID_DRVR, 
        feed_text_name, feed_text_surn, feed_text_mail, feed_text_pnum, feed_file_ppic, feed_text_pass, 	
        feed_text_bank, 	
        auto_text_vcod, auto_date_sign,
        feed_file_iden, feed_file_lcns, 
        prll_slct_bann_list, prty_slct_bann_list, prty_durt_bann_list, 
        prty_slct_srvc, prty_slct_diss, fuse_slct_docs, 
        auto_date_bnbg_list, auto_date_bnnd_list, 
        auto_date_diss, 
        fuse_plcy_list, 
        sckt_lgps, auto_prmsn, auto_trmp, auto_trfn, 
        auto_awcd_list)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
        nuid, 
        '', '', '', reqbody.signupFormPsngrDrvr1.feed_text_pnum, '', reqbody.signupFormPsngrDrvr1.feed_text_pass, 
        reqbody.signupFormDrvr2.feed_text_bank, 
        '1234', new Date().toISOString().replace('T', ' ').replace(/.[0-9]{3}Z/, ''), 
        [], [],
        [], [], [],
        '', '', '#viewing', 
        [], [], 
        [],
        ['yes'],
        '', '', '',
        [],
        ],
      );
    } catch (error) {
      console.log(error);
    }
  }; 

  // Insert into "SESSIONS" dataset
const insertSessions= async (DB_PWT, tokenid, reqinfo) => {
    try {
      DB_PWT.run(`INSERT INTO SESSIONS (
        ID_SESN, ID_user, 
        auto_text_ipad,	auto_text_ipgl,	auto_text_devc, auto_text_agnt, 
        auto_date_strt,	
        prll_date_fnsh,	prll_durt_sesn,	prll_slct_xprd)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          tokenid, reqinfo.ID_user,
          reqinfo.auto_text_ipad,	reqinfo.auto_text_ipgl,	reqinfo.auto_text_devc, reqinfo.auto_text_agnt, 
          reqinfo.timeNow.toISOString().replace('T', ' ').replace(/.[0-9]{3}Z/, ''),	
          new Date(reqinfo.timeNow.getTime() + 1 * 60 * 1000).toISOString().replace('T', ' ').replace(/.[0-9]{3}Z/, ''), 0, '#no',
        ],
      );
    } catch (error) {
      console.log(error);
    }
  };

  // Insert into "TLOG" dataset
const insertTlog = async (DB_PWT, nuid, rcvdToken) => {
    const nuidtlog = nuid.replace(/-/g,'_');
    const auto_date_lgin = new Date().toISOString().replace('T', ' ').replace(/.[0-9]{3}Z/, '');
    DB_PWT.run(`INSERT INTO "TLOG_${nuidtlog}" (ID_sesn,`+
                                                'auto_date_lgin, auto_date_lgot, auto_durt_onln, auto_durt_onln_stck)'+ 
                                                'VALUES (?, ?, ?, ?, ?)', 
      [
        rcvdToken, 
        auto_date_lgin, '', 0, 0
      ], 
    () => {
      // console.log(`\nInserted into "TLOG_${nuidtlog}" table!`);
    });
  };

// Insert into "TNOT" dataset
const insertTnot = async (DB_PWT, nuid, rcvdToken) => {
    const nuidtnot = nuid.replace(/-/g,'_');
    const auto_date_wtbg = new Date().toISOString().replace('T', ' ').replace(/.[0-9]{3}Z/, '');
    DB_PWT.run(`INSERT INTO "TNOT_${nuidtnot}" (ID_sesn,`+
                                                'auto_date_wtbg, auto_date_wtfn, auto_durt_wait, auto_durt_wait_stck)'+ 
                                                'VALUES (?, ?, ?, ?, ?)', 
      [
        rcvdToken, 
        auto_date_wtbg, '', 0, 0
      ], 
    () => {
      // console.log(`\nInserted into "TNOT_${nuidtnot}" table!`);
    });
}; 

// Update "TLOG" dataset
const updtTlog = async (DB_PWT, rcvdID, rcvdToken) => {
    const timeNow1 = new Date().toISOString().replace('T', ' ').replace(/.[0-9]{3}Z/, '');
    const rowthen1 = await crud.queryDB (DB_PWT, `SELECT * FROM "TLOG_${rcvdID}" WHERE ID_sesn = ?`, [rcvdToken]);
    const timeThen1 = rowthen1[0].auto_date_lgin;
    let timeDelta1 = (new Date(timeNow1).getTime() - new Date(timeThen1).getTime())/(60*60*1000);
    timeDelta1 = Math.round((timeDelta1 + Number.EPSILON) * 10000) / 10000
    const rowsTlog = await crud.queryDB(DB_PWT, `SELECT * FROM "TLOG_${rcvdID}"`);
    let total1 = timeDelta1; 
    for (let i = 0; i < rowsTlog.length; i++) {
        total1 = total1 + rowsTlog[i].auto_durt_onln;  
    } 
    await crud.chngDB(DB_PWT, `UPDATE "TLOG_${rcvdID}" SET auto_date_lgot = ?, auto_durt_onln = ?, auto_durt_onln_stck = ? WHERE ID_sesn = ?`, 
        [timeNow1, timeDelta1, total1, rcvdToken]
    ); 
};

// Update "TNOT" dataset
const updtTnot = async (DB_PWT, rcvdID, rcvdToken) => {
    const timeNow2 = new Date().toISOString().replace('T', ' ').replace(/.[0-9]{3}Z/, '');
    const rowthen2 = await crud.queryDB (DB_PWT, `SELECT * FROM "TNOT_${rcvdID}" WHERE ID_sesn = ?`, [rcvdToken]);
    const timeThen2 = rowthen2[0].auto_date_wtbg;
    let timeDelta2 = (new Date(timeNow2).getTime() - new Date(timeThen2).getTime())/(60*60*1000);
    timeDelta2 = Math.round((timeDelta2 + Number.EPSILON) * 10000) / 10000
    const rowsTnot = await crud.queryDB(DB_PWT, `SELECT * FROM "TNOT_${rcvdID}"`);
    let total2 = timeDelta2; 
    for (let i = 0; i < rowsTnot.length; i++) {
        total2 = total2 + rowsTnot[i].auto_durt_wait;  
    } 
    await crud.chngDB(DB_PWT, `UPDATE "TNOT_${rcvdID}" SET auto_date_wtfn = ?, auto_durt_wait = ?, auto_durt_wait_stck = ? WHERE ID_sesn = ?`, 
        [timeNow2, timeDelta2, total2, rcvdToken]
    );
};

// Export
module.exports = { 
    insertPassengers, 
    insertDrivers, 
    insertSessions, 
    insertTlog, 
    insertTnot, 
    updtTlog, 
    updtTnot, 
}