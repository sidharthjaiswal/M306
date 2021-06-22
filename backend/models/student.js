const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
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
    collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema)