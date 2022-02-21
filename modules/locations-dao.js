const SQL = require("sql-template-strings");
const dbPromise = require("../modules/database");

// the is the dao for Create Read Update Delete (CRUD) opertions on the database table 'locations'

// call db and get all currenct location records
async function retrieveAllLocations(){
    const db = await dbPromise;
    const allCurrentLocations = await db.all(SQL`select * from locations`);
    return allCurrentLocations;
}

// export modules
module.exports = {
    retrieveAllLocations
    }