const mysql = require("mysql");
const fs = require("fs");

let dbinfo = fs.readFileSync("./src/config/dbinfo.json",{encoding:'utf8'});
dbinfo = JSON.parse(dbinfo);

const db = mysql.createConnection({
    host: dbinfo.host,
    port: dbinfo.port,
    user: dbinfo.user,
    password: dbinfo.password,
    database: dbinfo.database
});

db.connect()

module.exports = db;