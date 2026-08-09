// Link
const { sqlite3, express, fs, uuid, cors, bodyParser , requestIp, path, mammoth } = 
      require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/backend/storage/requirements(b).js');
const { port } = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/backend/storage/keyconf(b).js')
const model = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/database/model.js');
const route = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/backend/apiserver/route.js');
const prll = require('D:/#0dsktp/NTS/Nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/backend/middle/prll(b).js');

// Define App
const app = express();
app.use(cors());  
app.use(express.json());
app.use(bodyParser.json());
app.use(requestIp.mw());
app.use('/', route);

// Initialize Database
DB_PWT = model.initializeDatabase(sqlite3);
fileList = model.collectDocs(fs, path, mammoth);
model.deleteTables(DB_PWT);
setTimeout(() => {
  model.initializeWord(DB_PWT,fileList);
  model.initializeSafeApp(DB_PWT, uuid);
  model.initializePassengers(DB_PWT);
  model.initializeDrivers(DB_PWT);
  model.initializeTaxis(DB_PWT);
  model.initializeSessions(DB_PWT);

  // Prll: Session Expiry
  setInterval(() => prll.watchSession(DB_PWT), 5000);
}, 500);

// Start the server
app.listen(port, () => {
  console.log(`\nApp is listening at http://localhost:${port}`);
});