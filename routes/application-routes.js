// application routes

const express = require("express");
const router = express.Router();

// setup multer and fs
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const upload = multer({
    dest: path.join(__dirname, "temp")
});


// custom modules required for this routes:
const { verifyAuthenticated } = require("../middleware/auth-middleware");
const locationsDao = require("../modules/locations-dao");

router.get("/", verifyAuthenticated, function (req, res) {
    console.log('index route called, render index view')
    res.render("index");
});

router.get("/locations", verifyAuthenticated, async function (req, res) {
    const currentLocations = await locationsDao.retrieveAllLocations();
    // console.log(currentLocations);
    res.render("index", {currentLocations : currentLocations});
});

router.get("/upload", function(req,res){
    res.render("uploadforms")
});

router.post("/uploadfile", upload.single('myFile'), function(req, res){
    const fileInfo = req.file;

    // move file 
    const oldFileName = fileInfo.path;
    const newFileName = `./public/uploadedfiles/${fileInfo.originalname}`;
    fs.renameSync(oldFileName, newFileName);

    // get basic file info to send to view for rendering

    res.locals.fileName = fileInfo.originalname;
    res.render('uploadDetails');

});

// router.post("/uploadmultiple", upload.array('myFiles',10), function(req, res){
    
//     const fileInfo = req.file;    
//     const oldFileName = fileInfo.path;
//     const newFileName = `./public/uploadedfiles/${fileInfo.originalname}`;
//     fs.renameSync(oldFileName, newFileName);    
//     res.locals.fileName = fileInfo.originalname;
//     res.render('uploadDetails');
// });

module.exports = router