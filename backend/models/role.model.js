/*
@Author: Siddharth Jaiswal 
@version: 1.0v
@Latest Update: 24.06.2021
Status: Done

Descripton:  Student Record Management system. It efficiently allows users to perform CRUD operations.
             Schüler Datenbank Mangament system. Erlaubt den Nutzer effizient CRUD Operationen durchzuführen.

*/



const mongoose = require("mongoose");

const Role = mongoose.model(
    "Role",
    new mongoose.Schema({
        name: String
    })
);

module.exports = Role;