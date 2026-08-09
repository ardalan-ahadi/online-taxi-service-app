// Link
const { uuid, jwt, geoip } = 
      require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/backend/storage/requirements(b).js');
const { secret } = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/backend/storage/keyconf(b).js')
const model = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/database/model.js');
const daos = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/database/daos.js');
const crud = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/database/crud.js');
const auto = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/backend/middle/auto(b).js');

// Auth
const signPsngr = async (req, res) => {
    try {
        const reqbody = req.body; 
        if (!reqbody.feed_text_pnum || !reqbody.feed_text_pass || !reqbody.feed_text_prpt) { 
            res.send({ message: 'Please fill all fields!' });
        } else if (reqbody.feed_text_pass !== reqbody.feed_text_prpt) { 
            res.send({ message: 'Passwords do not match!' });
        } else {
            const passengerRows = await crud.queryDB(DB_PWT, 'SELECT * FROM PASSENGERS WHERE feed_text_pnum = ?', [reqbody.feed_text_pnum]);
            if (passengerRows.length > 0) {
                res.send({ message: 'User (passenger) already exists!' });
            } else {
                let nuid = await auto.uniqueUUID(DB_PWT, uuid); 
                await daos.insertPassengers(DB_PWT, nuid, reqbody); 
                await model.initializeSafePsngr(DB_PWT, uuid, nuid); 
                // crud.printDB(DB_PWT, `SELECT * FROM PASSENGERS`, []);
                res.send({ message: 'Signing up is completed!' });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Internal server error' });
    }
};

const signDrvr = async (req, res) => {
    const reqbody = req.body; 
    if (!reqbody.signupFormPsngrDrvr1.feed_text_pnum || !reqbody.signupFormPsngrDrvr1.feed_text_pass || !reqbody.signupFormPsngrDrvr1.feed_text_prpt || !reqbody.signupFormDrvr2.feed_text_bank) { 
        res.send({ message: 'Please fill all fields!' }); 
    } else if (!reqbody.signupFormDrvr2.feed_file_ppic || !reqbody.signupFormDrvr2.feed_file_iden || !reqbody.signupFormDrvr2.feed_file_lcns) { 
        res.send({ message: 'Please upload all images!' }); 
    } else if (reqbody.signupFormPsngrDrvr1.feed_text_pass !== reqbody.signupFormPsngrDrvr1.feed_text_prpt) { 
        res.send({ message: 'Passwords do not match!' });  
    } else {
        const driverRows = await crud.queryDB(DB_PWT, 'SELECT * FROM DRIVERS WHERE feed_text_pnum = ?', [reqbody.feed_text_pnum]);
        if (driverRows.length > 0) {
            res.send({ message: 'User (driver) already exists!' });  
        }
        if (driverRows.length === 0) {
            let nuid = await auto.uniqueUUID(DB_PWT, uuid); 
            daos.insertDrivers(DB_PWT, nuid, reqbody); 
            model.initializeSafeDrvr(DB_PWT, uuid, nuid); 
            model.initializeHloc(DB_PWT, nuid); 
            model.initializeTlog(DB_PWT, nuid); 
            model.initializeTnot(DB_PWT, nuid); 
            res.send({ message: 'Signup successful!' }); 
        }
    }
}; 

const logUser = async (req, res) => {
    const reqbody = req.body;
    const pnml = reqbody.feed_text_pnml;
    if (!pnml || !reqbody.feed_text_pass) {
        return res.send({ message: 'Please fill all fields!', categ: 'Guest' , token: 'notoken'});
    }
    const passengerRows = await crud.queryDB(DB_PWT, 'SELECT * FROM PASSENGERS WHERE feed_text_pnum = ? OR feed_text_mail = ?', [pnml]);
    if (passengerRows.length > 0) {
        if (reqbody.feed_text_pass === passengerRows[0].feed_text_pass) {
        const timeNow = new Date(); 
        const ID_user = passengerRows[0].ID_PSNGR;
        const auto_text_ipad = req.clientIp;
        const auto_text_ipgl = geoip.lookup(auto_text_ipad);
        const auto_text_agnt = req.headers['user-agent'];
        const auto_text_devc = 'Unknown';
        const reqinfo = { timeNow, ID_user, auto_text_ipad, auto_text_ipgl, auto_text_devc, auto_text_agnt }
        const tokenid = jwt.sign(reqinfo, secret);
        daos.insertSessions(DB_PWT, tokenid, reqinfo); 
        return res.send({ message: 'Passenger successfully logged in!', categ: 'Passenger' , token: tokenid });
        } else {
        return res.send({ message: 'Invalid password for passenger!', categ: 'Guest' , token: 'notoken' });
        }
    }      
    const driverRows = await crud.queryDB(DB_PWT, 'SELECT * FROM DRIVERS WHERE feed_text_pnum = ? OR feed_text_mail = ?', [pnml]);
    if (driverRows.length > 0) {
        if (reqbody.feed_text_pass === driverRows[0].feed_text_pass) {
        const timeNow = new Date(); 
        const ID_user = driverRows[0].ID_DRVR;
        const auto_text_ipad = req.clientIp;
        const auto_text_ipgl = geoip.lookup(auto_text_ipad);
        const auto_text_agnt = req.headers['user-agent'];
        const auto_text_devc = 'Unknown';
        const reqinfo = { timeNow, ID_user, auto_text_ipad, auto_text_ipgl, auto_text_devc, auto_text_agnt }
        const tokenid = jwt.sign(reqinfo, secret);
        daos.insertSessions(DB_PWT, tokenid, reqinfo); 
        daos.insertTlog(DB_PWT, ID_user, tokenid); 
        daos.insertTnot(DB_PWT, ID_user, tokenid); 
        return res.send({ message: 'Driver successfully logged in!', categ: 'Driver', token: tokenid });
        } else {
        return res.send({ message: 'Invalid password for driver!', categ: 'Guest' , token: 'notoken' });
        }
    }
    return res.send({ message: "Phone or mail doesn't exist!", categ: 'Guest', token: 'notoken' });
};

const forgotUser = async (req, res) => {
    const reqbody = req.body;
    if (!reqbody.feed_text_pnml) {
        return res.send({ message: 'Please provide email address or phone number!' });
    }
    const pnml = reqbody.feed_text_pnml;
    const passengerRows = await crud.queryDB(DB_PWT, 'SELECT * FROM PASSENGERS WHERE feed_text_pnum = ? OR feed_text_mail = ?', [pnml]);
    if (passengerRows.length > 0) {
        try {
            DB_PWT.run(`UPDATE PASSENGERS SET feed_text_pass = ? WHERE feed_text_pnum = ? OR feed_text_mail = ?`, 
                ['1234', pnml]
            ); 
            return res.send({ message: 'New password reset!'});
        } catch (error) {
            console.log(error);
        }
    }
    const driverRows = await crud.queryDB(DB_PWT, 'SELECT * FROM DRIVERS WHERE feed_text_pnum = ? OR feed_text_mail = ?', [pnml]);
    if (driverRows.length > 0) {
        try {
            await crud.chngDB(DB_PWT, `UPDATE DRIVERS SET feed_text_pass = ? WHERE feed_text_pnum = ? OR feed_text_mail = ?`, ['1234', pnml]); 
            return res.send({ message: 'New password reset!'});
        } catch (error) {
            console.log(error);
        }
    }
    return res.send({ message: "Phone or mail doesn't exist!" });
};

const outUser = async (req, res) => {
    const rcvdToken = req.body.token;
    const rcvdCateg = req.body.categ
    const rows = await crud.queryDB(DB_PWT, `SELECT * FROM SESSIONS WHERE ID_sesn = ?`, [rcvdToken]);
    if (rows.length === 0) {
        return res.status(404).send({ message: "Session ID doesn't exist!" });
    }
    const userID = rows[0].ID_user.replace(/-/g,'_');  
    await crud.chngDB(DB_PWT, `UPDATE SESSIONS SET prll_slct_xprd = ? WHERE ID_sesn = ?`, ['#yes', rcvdToken]); 
    if (rcvdCateg === 'Driver') {
        daos.updtTlog(DB_PWT, userID, rcvdToken);
        dais.updtTnot(DB_PWT, userID, rcvdToken); 
    }
    return res.send({ message: 'User successfully logged out!' });
};

module.exports = { 
    signPsngr, 
    signDrvr, 
    logUser, 
    forgotUser, 
    outUser, 
};