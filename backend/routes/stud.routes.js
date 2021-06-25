/*
@Author: Sidharth Jaiswal 
@version: 1.0v
@Latest Update: 24.06.2021
Status: Done

Descripton:  Student Record Management system. It efficiently allows users to perform CRUD operations.
             Schüler Datenbank Mangament system. Erlaubt den Nutzer effizient CRUD Operationen durchzuführen.

*/



const express = require('express');
const studentRoute = express.Router();

// Student model
let StudentModel = require('../models/Student');

studentRoute.route('/').get((req, res) => {
    StudentModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

studentRoute.route('/create-student').post((req, res, next) => {
    StudentModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

studentRoute.route('/edit-student/:id').get((req, res) => {
    StudentModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update student
studentRoute.route('/update-student/:id').post((req, res, next) => {
    StudentModel.findByIdAndUpdate(req.params.id, {
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
studentRoute.route('/delete-student/:id').delete((req, res, next) => {
    StudentModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = studentRoute;