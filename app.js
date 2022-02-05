/**  app for reading MOH COVID locations of interest data from API endpoint: https:// api.integration.covid19.health.nz/locations/v1/current-locations-of-interest
*/

// setup express server

const express = require('express');
const app = express();
const port = 8080;

// setup handlebars
const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

// setup body-parser to manage res req data formatting

app.use(express.urlencoded({extended: false}));

// setup cookie-parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// make a public folder available statically

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// setup middleware

const { addUserToLocals } = require("./middleware/auth-middleware");
app.use(addUserToLocals);

// setup routers

// const adminRouter = require("./routes/admin-rotes");
// app.use(adminRouter);

// const applicationRouter = require("./routes/application-routes");
// app.use(applicationRouter);

// start the server running
const server = app.listen(port, function(){
    const host = 'localhost';
    console.log(`COVID-19 Locs of Interest NZ App V0.1 Beta | App listening on http://${host}:${port}`)
})

