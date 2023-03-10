const mongoose  = require('mongoose')
// const {ObjectId} = mongoose.Schema.Types
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
    postedBy : {
        type:mongoose.Schema.Types.ObjectID,
        ref: "user"
    }
})
module.exports = mongoose.model('screamData',screamData)