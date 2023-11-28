const mongoose = require('mongoose');

//Creating schema for project
const projectSchema = new mongoose.Schema({
    projectName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    authorName:{
        type:String,
        required:true,
    },
    //we have to populate issues from the issue model using objectId
    issues:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Issue'
        }
    ],
    labels:[
        {
            type:String,
        }
    ]

},{
    timestamps:true,
})

module.exports = mongoose.model('Project', projectSchema);
