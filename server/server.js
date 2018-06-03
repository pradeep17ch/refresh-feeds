//imports
var express = require("express");
var path = require("path");
var {pushData} = require("./pushData");
var {mongoose} = require("./db/mongoose");

//express connect
var app = express();
var port = 3002;

//database building
var feedSchema = new mongoose.Schema({
	heading: {
		type: String,
	},
	description: {
		type: String,
	},
	photo: {
		type: String
	}
});
var Feed = mongoose.model("Feed", feedSchema);

//to add feeds at regular intervals in the database
//setInterval(pushData, 17000, Feed);

//starting link
app.get("/", (req, res) => {
 res.sendFile(path.join(__dirname, "..", "/views/index.html"));
});

//static files
app.use("/", express.static(path.join(__dirname, "..", "/")));

//link to get feeds
app.get("/getData", (req, res) => {
	Feed.find({}, (err, feeds) => {
		if (err) {
			return console.log("Error finding feeds.");
		} 
		console.log("----------------------------------------------------");
		console.log("Feeds found. ", JSON.stringify(feeds, undefined, 2));
		res.send(feeds);
	}).sort({_id: -1});
});

//Server connect
app.listen(port, () => {
 console.log("Server listening on port ", port);
});

