const mongoose = require("mongoose");

const Rolle = mongoose.model(
    "Rolle",
    new mongoose.Schema({
        name: String
    })
);

module.exports = Rolle;