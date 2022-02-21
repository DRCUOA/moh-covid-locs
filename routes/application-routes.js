// application routes

const express = require("express");
const router = express.Router();

// custom modules required for this routes:
const { verifyAuthenticated } = require("../middleware/auth-middleware");
const locationsDao = require("../modules/locations-dao");

router.get("/", verifyAuthenticated, function (req, res) {
    console.log('index route called, render index view')
    res.render("index");
});

router.get("/locations", async function (req, res) {
    const currentLocations = await locationsDao.retrieveAllLocations();
    // console.log(currentLocations);
    res.render("index", {currentLocations : currentLocations});
});


module.exports = router