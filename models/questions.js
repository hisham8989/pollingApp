const mongoose = require('mongoose');

questionSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    options:[
        {
            type:mongoose.Types.ObjectId,
            ref:'options'
        }
    ]
})


const Questions = mongoose.model('Questions',questionSchema)

module.exports = Questions