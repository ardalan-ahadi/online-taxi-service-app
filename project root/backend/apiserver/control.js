// Link
const auth = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/backend/middle/auth(b).js');
const tool = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/backend/middle/tool(b).js');
const fuse = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/backend/middle/fuse(b).js');

// Root
exports.basic = (req,res) => {
    res.send('Hello World!'); 
}

// Define Controller
exports.signPsngr = auth.signPsngr;
exports.signDrvr = auth.signDrvr;
exports.logUser = auth.logUser;
exports.forgotUser = auth.forgotUser;
exports.outUser = auth.outUser;
exports.wrdInfo = tool.wrdInfo;
exports.updtHloc = tool.updtHloc;
exports.vldtSession = fuse.vldtSession;