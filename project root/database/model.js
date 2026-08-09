// Initiate the database
function initializeDatabase(sqlite3) {
  const DB_PWT = new sqlite3.Database('D:/#0dsktp/nTS/nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/database/database.db');
  console.log('\nDatabase is initiated!');
  return DB_PWT;
}

// Collect text statements
function collectDocs(fs, path, mammoth) {
  const folderPath = 'D:/#0dsktp/nTS/nts/Todo/WMP/W/Cases/Webapp/Prjss/aptx/KIBTAXI_1/backend/storage/policy/';
  const fileList = []; 
  const files = fs.readdirSync(folderPath); 
  for (const fileName of files) {
    const filePath = path.join(folderPath, fileName);
    mammoth.extractRawText({ path: filePath })
    .then(result => {
      fileList.push(result.value); 
    })
    .catch(error => {
      console.log(error)
  });
  }
  return fileList; 
}

// Eliminate existing tables
function deleteTables(DB_PWT) {
  new Promise((resolve, reject) => {
      DB_PWT.all("SELECT name FROM sqlite_master WHERE type='table';", (err, tables) => {
        if (err) {
          reject(err);
        } else {
          resolve(tables);
        }
      });
  })
  .then((tables) => {
    const dropTablePromises = tables.map((table) => {
      return new Promise((resolve, reject) => {
        DB_PWT.run(`DROP TABLE IF EXISTS ${table.name}`, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    });
    return Promise.all(dropTablePromises);
  })
  .then(() => {
    console.log('\nExisting tables deleted!');
  })
};

// Initiate "WORD" dataset
function initializeWord(DB_PWT,fileList) {
  DB_PWT.serialize(() => {
    DB_PWT.run('CREATE TABLE IF NOT EXISTS WORD (' +
                'id INTEGER PRIMARY KEY,' +
                'auto_date_modif DATETIME, ' +
                'feed_file_wrds_canc BLOB, ' +
                'feed_file_wrds_cstm BLOB, ' +
                'feed_file_wrds_drvr BLOB, ' +
                'feed_file_wrds_pays BLOB, ' +
                'feed_file_wrds_pens BLOB, ' +
                'feed_file_wrds_prvc BLOB, ' +
                'feed_file_wrds_howt BLOB)',  () => {
      console.log('\nTable "WORD" is created!');
      const auto_date_modif = new Date().toISOString().replace('T', ' ').replace(/\.[0-9]{3}Z/, '');
      DB_PWT.run(`INSERT INTO WORD (auto_date_modif,
                                    feed_file_wrds_canc, feed_file_wrds_cstm,	feed_file_wrds_drvr, feed_file_wrds_pays, feed_file_wrds_pens, feed_file_wrds_prvc, feed_file_wrds_howt)
                                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, 
                                    [auto_date_modif, 
                                     fileList[0], fileList[1], fileList[2], fileList[3], fileList[4], fileList[5], fileList[6]], () => {
        console.log('\nThe statement docs were added to the "WORD" table!');
      });
    });
  });
}

// Initiate "SAFE_APP" dataset
function initializeSafeApp(DB_PWT,uuid) {
  DB_PWT.serialize(() => {
    DB_PWT.run('CREATE TABLE IF NOT EXISTS SAFE_APP ( id INTEGER PRIMARY KEY, ID_SAFE_APP TEXT,'+
                                                      'auto_date_safe_app DATETIME, auto_qtty_cash REAL, auto_qtty_cash_stck REAL )', () => {
      const auto_date_safe_app = new Date().toISOString().replace('T', ' ').replace(/.[0-9]{3}Z/, '');
      DB_PWT.run('INSERT INTO SAFE_APP (ID_SAFE_APP,'+
                                        'auto_date_safe_app,'+
                                        'auto_qtty_cash, auto_qtty_cash_stck)'+ 
                                        'VALUES (?, ?, ?, ?)', 
                                        [uuid.v4(), 
                                         auto_date_safe_app, 
                                         0, 0], () => {
        console.log('\nTable "SAFE_APP" is created!');
      });
    });
  });
}

// Initiate "PASSENGERS" dataset
function initializePassengers(DB_PWT) {
  DB_PWT.serialize(() => {
    DB_PWT.run('CREATE TABLE IF NOT EXISTS PASSENGERS ( id INTEGER PRIMARY KEY, ID_PSNGR TEXT,'+	
                                                        'feed_text_name TEXT, feed_text_surn TEXT, feed_text_mail TEXT, feed_text_pnum TEXT, feed_file_ppic BLOB, feed_text_pass TEXT,'+	
                                                        'auto_text_vcod TEXT, auto_date_sign DATETIME,'+	
                                                        'prll_slct_bann_list TEXT, prty_slct_bann_list TEXT, prty_durt_bann_list REAL,'+ 
                                                        'auto_date_bnbg_list DATETIME, auto_date_bnnd_list DATETIME,'+	
                                                        'fuse_plcy_list TEXT,'+
                                                        'auto_awcd_list TEXT )', () => {
      console.log('\nTable "PASSENGERS" is created!');
    });
  });
}

// Initiate "DRIVERS" dataset
function initializeDrivers(DB_PWT) {
  DB_PWT.serialize(() => {
    DB_PWT.run('CREATE TABLE IF NOT EXISTS DRIVERS ( id INTEGER PRIMARY KEY, ID_DRVR,'+	
                                                    'feed_text_name TEXT, feed_text_surn TEXT, feed_text_mail TEXT, feed_text_pnum TEXT, feed_file_ppic, feed_text_pass TEXT,'+	
                                                    'feed_text_bank TEXT,'+	
                                                    'auto_text_vcod TEXT, auto_date_sign DATETIME,'+	
                                                    'feed_file_iden BLOB,	feed_file_lcns BLOB,'+
                                                    'prll_slct_bann_list TEXT, prty_slct_bann_list TEXT, prty_durt_bann_list TEXT,'+ 
                                                    'prty_slct_srvc TEXT, prty_slct_diss TEXT, fuse_slct_docs TEXT,'+
                                                    'auto_date_bnbg_list DATETIME, auto_date_bnnd_list DATETIME,'+	
                                                    'auto_date_diss DATETIME,'+
                                                    'fuse_plcy_list TEXT,'+
                                                    'sckt_lgps TEXT, auto_prmsn TEXT, auto_trmp REAL, auto_trfn REAL,'+
                                                    'auto_awcd_list TEXT )', () => {
      console.log('\nTable "DRIVERS" is created!');
    });
  });
}

// Initiate "TAXIS" dataset
function initializeTaxis(DB_PWT) {
  DB_PWT.serialize(() => {
    DB_PWT.run('CREATE TABLE IF NOT EXISTS TAXIS ( id INTEGER PRIMARY KEY, ID_TAXI, ID_drvr,'+	
    	                                              	'feed_text_seri TEXT, feed_text_colr TEXT, feed_text_plat TEXT, feed_file_imge BLOB, feed_file_prmt BLOB,'+
                                                      'auto_slct_stts TEXT,'+
                                                      'fuse_slct_docs TEXT,'+
                                                      'auto_awcd_list TEXT )', () => {
      console.log('\nTable "TAXIS" is created!');
    });
  });
}

// Initiate "SESSIONS" dataset
function initializeSessions(DB_PWT) {
  DB_PWT.serialize(() => {
    DB_PWT.run('CREATE TABLE IF NOT EXISTS SESSIONS ( id INTEGER PRIMARY KEY, ID_SESN, ID_user,'+	
                                                      'auto_text_ipad TEXT,	auto_text_ipgl TEXT, auto_text_devc TEXT, auto_text_agnt TEXT,'+
                                                      'auto_date_strt DATETIME,'+		
                                                      'prll_date_fnsh DATETIME, prll_durt_sesn REAL, prll_slct_xprd TEXT )', () => {
      console.log('\nTable "SESSIONS" is created!');
    });
  });
}

// Initiate "SAFE_PSNGR" dataset
function initializeSafePsngr(DB_PWT, uuid, nuid) {
  const nuidsafe = nuid.replace(/-/g, '_');
  DB_PWT.serialize(() => {
    DB_PWT.run(`CREATE TABLE IF NOT EXISTS SAFE_PSNGR_${nuidsafe} (
      id INTEGER PRIMARY KEY, 
      ID_SAFE_PSNGR TEXT,
      auto_date_safe_psngr DATETIME, 
      auto_qtty_cash REAL, 
      auto_qtty_cash_stck REAL
    )`);
    const auto_date_safe_psngr = new Date().toISOString().replace('T', ' ').replace(/.[0-9]{3}Z/, '');
    DB_PWT.run(`INSERT INTO SAFE_PSNGR_${nuidsafe} (ID_SAFE_PSNGR, auto_date_safe_psngr, auto_qtty_cash, auto_qtty_cash_stck)
      VALUES (?, ?, ?, ?)`,
       [
        '#init' + uuid.v4(),
        auto_date_safe_psngr,
        0,
        0
      ]
    );
    console.log(`\nTable "SAFE_PSNGR_${nuidsafe}" is created!`);
  });
};

// Initiate "SAFE_DRVR" dataset
function initializeSafeDrvr(DB_PWT, uuid, nuid) {
  const nuidsafe = nuid.replace(/-/g, '_');
  DB_PWT.serialize(() => {
    DB_PWT.run(`CREATE TABLE IF NOT EXISTS SAFE_DRVR_${nuidsafe} (
      id INTEGER PRIMARY KEY, 
      ID_SAFE_DRVR TEXT,
      auto_date_safe_drvr DATETIME, 
      auto_qtty_cash REAL, 
      auto_qtty_cash_stck REAL
    )`);
    const auto_date_safe_drvr = new Date().toISOString().replace('T', ' ').replace(/.[0-9]{3}Z/, '');
    DB_PWT.run(`INSERT INTO "SAFE_DRVR_${nuidsafe}" (ID_SAFE_DRVR, auto_date_safe_drvr, auto_qtty_cash, auto_qtty_cash_stck) 
      VALUES (?, ?, ?, ?)`, 
      [
        '#init ' + uuid.v4(), 
        auto_date_safe_drvr, 0, 0
      ]
    );
    // console.log(`\nTable "SAFE_DRVR_${nuidsafe}" is created!`);
    console.log(`\nNew row was added to the "SAFE_DRVR_${nuidsafe}" table!`);
  });
};

// Initiate "HLOC" dataset
function initializeHloc(DB_PWT, nuid) {
  const nuidhloc = nuid.replace(/-/g,'_');
  DB_PWT.run(`CREATE TABLE IF NOT EXISTS HLOC_${nuidhloc} ( id INTEGER PRIMARY KEY,`+
                                                            'sckt_lgps TEXT, auto_date_cord DATETIME )', 
  () => {
    console.log(`\nTable "HLOC_${nuidhloc}" is created!`);
  })
};

// Initiate "TLOG" dataset
function initializeTlog(DB_PWT, nuid) {
  const nuidtlog = nuid.replace(/-/g,'_');
  DB_PWT.run(`CREATE TABLE IF NOT EXISTS TLOG_${nuidtlog} ( id INTEGER PRIMARY KEY, ID_sesn TEXT,`+
                                                            'auto_date_lgin	DATETIME, auto_date_lgot DATETIME, auto_durt_onln REAL, auto_durt_onln_stck REAL )', 
  () => {
    console.log(`\nTable "TLOG_${nuidtlog}" is created!`);
  });
};

// Initiate "TNOT" dataset
function initializeTnot(DB_PWT, nuid) {
  const nuidtnot = nuid.replace(/-/g,'_');
  DB_PWT.run(`CREATE TABLE IF NOT EXISTS TNOT_${nuidtnot} ( id INTEGER PRIMARY KEY, ID_sesn TEXT,`+
                                                            'auto_date_wtbg DATETIME,	auto_date_wtfn DATETIME, auto_durt_wait REAL,	auto_durt_wait_stck REAL )', 
  () => {
    console.log(`\nTable "TNOT_${nuidtnot}" is created!`);
  });
};

// Export
module.exports = { 
  initializeDatabase,
  collectDocs,
  deleteTables, 
  initializeWord, 
  initializeSafeApp, 
  initializePassengers, 
  initializeDrivers, 
  initializeTaxis, 
  initializeSessions, 
  initializeSafePsngr, 
  initializeSafeDrvr, 
  initializeHloc, 
  initializeTlog, 
  initializeTnot, 
};