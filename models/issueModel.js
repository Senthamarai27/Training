const mongoose = require('mongoose');

//Creating schema for issue
const issueSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true,
    },
    description:{
        type:String,
        trim:true,
        required:true,
    },
    label:{
        type:String,
        trim:true,
        required:true,
    },
    issueAuthor:{
        type:String,
        trim:true,
        required:true,
    }
},{
    timestamps:true,
})

module.exports = mongoose.model('Issue', issueSchema);
