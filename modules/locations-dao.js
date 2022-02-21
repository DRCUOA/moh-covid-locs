const SQL = require("sql-template-strings");
const dbPromise = require("./database");
const dbPromise = require("./database");

// the is the dao for Create Read Update Delete (CRUD) opertions on the database table 'locations'

// call db and get all currenct location records
async function retrieveAllLocations(){
    const dbPromise = await dbPromise;
    const allCurrentLocations = await dbPromise.all(SQL`select * from locations`);
    return allCurrentLocations;
}

// export modules
module.exports = {
    retrieveAllLocations
    }