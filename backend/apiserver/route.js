// Link
const express = require('express');
const router = express.Router();
const control = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/backend/apiserver/control.js');

// Define Routes
router.get('/', control.basic);
router.post('/auth/signPsngr', control.signPsngr);
router.post('/auth/signDrvr', control.signDrvr);
router.post('/auth/logUser', control.logUser);
router.post('/auth/forgotUser', control.forgotUser);
router.post('/auth/outUser', control.outUser);

router.post('/tool/updtHloc', control.updtHloc);
router.post('/tool/wrdInfo', control.wrdInfo);

router.post('/fuse/vldtSession', control.vldtSession);

// Export
module.exports = router;