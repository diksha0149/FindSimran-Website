const mongoose = require('mongoose')

// const Screams = new mongoose.Schema({
//     title : {
//         type : String,
//         required: true
//     },
//     link : {
//         type : String,
//         required: true
//     },
//     description : {
//         type : String,
//         required: true
//     },
//     skills : {
//         type : String,
//         required: true
//     },
// })

const userSchema = new mongoose.Schema({
    UserName : {
        type : String,
        required : true,
        trim: true,
        // unique: true
    },
    fullName : {
        type : String,
        trim: true,
    },
    email : {
        type : String,
        required: true,
        trim : true,
        unique: false
        // unique : true
    },
    password : {
        type : String,
        required : true,
    },
    avatar : {
        type : String,
        default : '#'
    },
    phoneNo : {
        type: Number,
        default: ''
    },
    institutionName : {
        type : String,
        default : ''
    }
},
{
    timestamps : true
})

module.exports = mongoose.model('user', userSchema)