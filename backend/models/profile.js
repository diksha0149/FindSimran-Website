const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    UserName : {
        type : String,
        required : true,
        trim: true,
        unique: true
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
        default : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-zlrqq&psig=AOvVaw11MW69iBMhZL1zZJjnpOH3&ust=1672266667666000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNC6iPfsmvwCFQAAAAAdAAAAABAE'
    },
    phoneNo : {
        type: Number,
        default: ''
    },
    institutionName : {
        type : String,
        default : ''
    },
},
{
    timestamps : true
})

module.exports = mongoose.model('user', userSchema)