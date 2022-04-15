const mongoose = require('mongoose');

questionSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    options:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Option'
        }
    ]
},{
    timestamps:true
})


const Questions = mongoose.model('Questions',questionSchema)

module.exports = Questions