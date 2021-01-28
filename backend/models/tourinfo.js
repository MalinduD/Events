let mongoose = require('mongoose');

let tourInfoSchema = mongoose.Schema({
    reviewer: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    when: {
        type: Date,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    descrip: {
        type: String,
        required: true
    },
 
});

let TourInfo = module.exports = mongoose.model('TourInfo', tourInfoSchema );