var request = require("request");
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");



var PORT = process.env.PORT || 3000;
// Initialize Express
var app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Use morgan logger for logging requests


// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;

var databaseUri = 'mongodb://localhost/week18day3mongoose';

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
if (process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI)
}else{
  mongoose.connect(databaseUri);
}

var db = mongoose.connection;

db.on('error', function(err) {
	console.log('Mongoose Error: ', err);
});

db.once('open', function() {
	console.log('Mongoose connection successful');
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/scrapeController.js");

app.use("/", routes);

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
