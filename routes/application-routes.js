// application routes

const express = require("express");
const router = express.Router();

const { verifyAuthenticated } = require("../middleware/auth-middleware");

router.get("/", function (req, res) {
    res.render("index");
});

module.exports = router