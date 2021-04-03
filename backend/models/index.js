const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.schüler = require("./schüler.model");
db.rolle = require("./rolle.model");

db.ROLES = ["schüler", "admin", "moderator"];

module.exports = db;