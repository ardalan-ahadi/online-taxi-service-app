function queryDB(db, query, params) {
    return new Promise((resolve, reject) => {
      db.all(query, params, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }
  
  function chngDB(db, query, params) {
    return new Promise((resolve, reject) => {
      db.run(query, params, err => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
  
  function printDB(db, query, params) {
    return new Promise((resolve, reject) => {
      db.all(query, params, (err, rows) => {
        if (err) {
          return reject(err);
        }
        console.log(rows);
        resolve(rows);
      });
    });
  }

// Export
module.exports = {
  queryDB, 
  chngDB, 
  printDB, 
}