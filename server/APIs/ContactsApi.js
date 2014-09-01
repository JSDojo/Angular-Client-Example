var express = require('express');
var Contact = require('../Models/Contact');

module.exports = function(server) {
    var router = express.Router();

    router.use(function(req, res, next) {
        console.log('Connection to the api from somewhere');
        next();
    });

    //get a list of all the contacts in the DB
    router.get('/contacts', function(req, res){
        console.log('get a contact');
        Contact.find(function(err, contacts) {
            if (err) {
                res.send("Something got screwed up")
            }
            res.json(contacts);
        })
    });

    router.get('/contact/:contact_id', function(req,res){
        console.log('getting a contact by id');
        Contact.findById(req.params.contact_id, function(err, contact){
            if (err) {
                res.send('this crashes all the time...')
            }
            res.json(contact);
        });
    });

    //insert a Contact record to the DB
    router.post('/contacts', function(req, res){
        console.log('inserting a contact ...');
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
            if (err){
                res.send('Resource not allowed');
            }
            res.json({"message":"success", "flag":"0"})
        });


    });

    //remove a contact record by _id
    router.delete('/contact/:contact_id', function(req,res){
        console.log('deleting a contact ...');

        Contact.remove({
            _id:req.params.contact_id
        }, function(err, contact){
            if(err) {
                console.log("Something went really, really bad! You better call 911")
            }
            res.json({
                message:'Record deleted successfully!'
            })
        })
    });

    router.put('/contact/:contact_id', function(req, res) {
        Contact.findById(request.params.contact_id, function(err, contact) {
            console.log(contact);
            if(err) {
                res.send(err);
            }
            contact.fname   = rb.fname;
            contact.lname   = rb.lname;
            contact.where   = rb.where;
            contact.phone   = rb.phone;
            contact.address = rb.address;
            contact.location= rb.location;
            contact.info    = rb.info;
            contact.save(function(err){
                if(err) {
                    response.send (err);
                }
            });
            response.json(request.body)
        });
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
