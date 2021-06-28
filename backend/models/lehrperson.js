/*
@Author: Sidharth Jaiswal 
@version: 1.0v
@Latest Update: 28.06.2021
Status: Done

Descripton:  Student Record Management system. It efficiently allows users to perform CRUD operations.
             Schüler Datenbank Mangament system. Erlaubt den Nutzer effizient CRUD Operationen durchzuführen.

*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let lehrerSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    class: {
        type: String
    }
}, {
    collection: 'lehrpersonen'
})

module.exports = mongoose.model('Lehrperson', lehrerSchema)