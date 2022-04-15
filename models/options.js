const mongoose = require('mongoose');

optionSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    votes:{
        type:String,
        required:true
    },
    link_to_vote:{
        type:String,
        required:true
    }
})


const Option = mongoose.model('Option',optionSchema)

module.exports = Option