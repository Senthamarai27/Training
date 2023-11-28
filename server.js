const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const connectDb = require('./config/dbConnection');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

//parse application/json
app.use(bodyParser.json());

//View engine setup
app.use(express.static(__dirname + '/public'));
app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/',require('./routes/projectRouter'));

//Creating server
app.listen(port,(req,res)=>{
    console.log("Server running at ",port);
    connectDb();
})
