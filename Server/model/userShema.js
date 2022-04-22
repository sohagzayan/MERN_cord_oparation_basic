const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    email : {
        type : String , 
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    status : {
        type : String ,
        required : true
    }

})

module.exports = mongoose.model('User', userShema)