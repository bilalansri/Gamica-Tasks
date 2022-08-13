let mongoose = require('mongoose');

let adSchema = mongoose.Schema({
    title:String,
    detail:String,
    image:String
});

module.exports = mongoose.model('ad', adSchema);