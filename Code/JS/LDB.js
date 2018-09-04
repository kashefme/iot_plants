const sqlite3 = require('sqlite3').verbose()

var db;

//start connection and open/create database ---------------------------
function startDBconneection(dbname) {
  //opens connection, if database exists open, if not create then open
  let sb = new sqlite3.Database('Code/db/scoozi.db', (err) => {
    //lets us know the status of what happened
    if (err) {
      console.error(err.message);
    } else {
      //if succeeded
      console.log('Connected to the '+ dbname +' database.');
    }

  });
  //returns obejct database
  db = sb;
  return sb;
}

//close database function
function closeDB(){
  //closes connection
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
}


//create table function ---------------------------
function createtable(tbname) {
  db.run('CREATE TABLE '+ tbname+' (name text, uuid text)', function(err){
    if (err) {
      return console.error(err.message);
    } else {
      console.log("Created table: " + tbname)
    }
  });
}
