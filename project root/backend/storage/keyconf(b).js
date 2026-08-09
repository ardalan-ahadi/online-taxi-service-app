// Link
const { crypto } = 
      require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/backend/storage/requirements(b).js');
      
// Static
const secret = crypto.randomBytes(32).toString('hex');
const port = 5000;

// Export
module.exports = {
    secret,
    port,
};