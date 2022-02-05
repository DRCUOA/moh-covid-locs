// user auth middleware
const express = require("express");
const router = express.Router();

// const userDao = require("../modules/user-dao");

function addUserToLocals(req, res, next) {
    const user = 'TestUser';
    // await userDao.retrieveUserwithAuthToken(req.cookies.authToken);

    try {
        if (user) {
            res.locals.user = user; 
            console.log(`User ${user} is active`);
            next();
        } else {
            next();
        }
    } catch (err) {
        console.log(`Add User to locals error: ${err}`);
        next();
    }
}

function verifyAuthenticated(req, res, next) {
console.log('verifyAuthenticated called');
        next();
}

module.exports = { 
    router,
    verifyAuthenticated,
    addUserToLocals
    };
