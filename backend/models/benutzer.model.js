const mongoose = require("mongoose");

const Benutzer = mongoose.model(
    "Benutzer",
    new mongoose.Schema({
        benutzername: String,
        password: String,
        roles: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rolle"
        }]
    })
);

module.exports = Benutzer;