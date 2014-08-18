var express = require('express');
var Contact = require('../Models/Contact');

module.exports = function(server) {
    var router = express.Router();

    router.use(function(req, res, next) {
        console.log('Connection to the api from somewhere');
        next();
    });

    router.get('/contacts', function(req, res){
        console.log('get a contact');
    });

    router.post('/contacts', function(req, res){
        console.log(req);
        var contact = new Contact;
        var rb = req.body;

        contact.fname   = rb.fname;
        contact.lname   = rb.lname;
        contact.where   = rb.where;
        contact.phone   = rb.phone;
        contact.address = rb.address;
        contact.location= rb.location;
        contact.info    = rb.info;

        contact.save(function(err){
            res.send('Resource not allowed');
        });

        res.json(
            rb
        )
    });

    router.get('/hc-contacts', function(req, res) {
        res.json(
            [
                {
                    fname   : 'Arturo',
                    lname   : 'Mosqueda',
                    where   : 'From the cradle',
                    phone   : '5549215519',
                    address : 'TBD',
                    location: 'Guadalajara, Centro de Software',
                    info    : 'He likes to code and stuff'
                },
                {
                    fname   : 'Zohan',
                    lname   : 'Zomding',
                    where   : 'From a movie',
                    phone   : 'Not Specified',
                    address : 'TBD',
                    location: 'Somewhere only he knows, probably Kasajstan',
                    info    : 'He is an Israeli agent'
                }
            ]
        )
    });

    server.use('/api', router);
};
