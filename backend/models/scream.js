const mongoose  = require('mongoose')

const screamData = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    link : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    skills : {
        type : String,
        required: true
    },
})
module.exports = mongoose.model('screamData',screamData)