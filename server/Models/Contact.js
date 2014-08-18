var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;

var ContactSchema = new Schema({
    fname   : String,
    lname   : String,
    where   : String,
    phone   : String,
    address : String,
    location: String,
    info    : String
});

module.exports = mongoose.model('Contact', ContactSchema);