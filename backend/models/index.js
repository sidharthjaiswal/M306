const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.benutzer = require("./benutzer.model");
db.rolle = require("./rolle.model");

db.ROLES = ["benutzer", "schulleitung", "lehrer"];

module.exports = db;