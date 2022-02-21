const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
const dbPromise = sqlite.open({
    filename: "./moh-covidData.db",
    driver: sqlite3.Database
});

module.exports = dbPromise;