//mongoose connect
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Upstox_feeds");

module.exports = {
	mongoose
}