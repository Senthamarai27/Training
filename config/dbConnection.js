const mongoose = require('mongoose');

//Creating database connection with mongoDB
const connectDB = async()=>{
    try{
        const connect = await mongoose.connect('mongodb+srv://Senthamarai:Sentha27@cluster0.x67z9wq.mongodb.net/issueTracker?retryWrites=true&w=majority');
        console.log("Database Connected!!");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
} 

module.exports = connectDB;
