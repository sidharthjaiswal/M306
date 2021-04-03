const mongoose = require("mongoose");

const Schüler = mongoose.model(
    "Schüler",
    new mongoose.Schema({
        benutzername: String,
        password: String,
        roles: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rolle"
        }]
    })
);

module.exports = Schüler;