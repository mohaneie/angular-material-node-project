'use strict';
const express = require('express')
// const app = express.Router();
const sign = require('../models/usermodel');
module.exports = function (app) {

    app.get('/getinfo/:id', (req, res) => {

        const y = req.params.id;

        sign.find({'_id': y})
            .then((data) => {
                res.json(data)
            })

            .catch((error) => {
                res.json(error)
            })
    });


    app.post('/add', (req, res) => {
        const data = req.body;
        console.log(req.body);
        const some = new sign(data);
        some.save()
            .then((result) => {
                res.json(result)
                console.log(result)
            })

            .catch((error) => {
                console.log(error)
                res.json(error)
            })

    });

    app.put('/update/:id', (req, res) => {

        const x = req.params.id;
        const data = req.body;
        sign.findByIdAndUpdate({ "_id": x, }, data, { new: true })
            .then(() => {
                res.json(data)
            })
            .catch((error) => {
                res.json(error)
            })


    })

    app.delete('/del', (req, res) => {

    })
}

