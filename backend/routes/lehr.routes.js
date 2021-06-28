
const express = require('express');
const lehrerRoute = express.Router();

// Student model
let LehrerModel = require('../models/Lehrperson');

lehrerRoute.route('/lehrer').get((req, res) => {
    LehrerModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

lehrerRoute.route('/create-teacher').post((req, res, next) => {
    LehrerModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

lehrerRoute.route('/edit-teacher/:id').get((req, res) => {
    LehrerModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update student
lehrerRoute.route('/update-teacher/:id').post((req, res, next) => {
    LehrerModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('Student successfully updated!')
        }
    })
})

// Delete student
lehrerRoute.route('/delete-teacher/:id').delete((req, res, next) => {
    LehrerModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = lehrerRoute;