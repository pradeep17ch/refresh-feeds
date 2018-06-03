//express connect
var express = require("express");
var app = express();

//random feed information
var feedData = {
		heading: "Price of commodity A drops heavily",
		description: "Yes, it's true that the price went down heavily due to unexpected reasons.",
		photo: "https://res.cloudinary.com/dxmkaxwx8/image/upload/v1527958827/sample.jpg"
	};

var pushData = (Feed) => {
	
	var feed = new Feed(feedData);

	feed.save((err, doc) => {
		if (err) {
			return console.log("Unable to save feed data.");
		}
		console.log("Saved successfully", doc);
	});

};

module.exports = {
	pushData
};