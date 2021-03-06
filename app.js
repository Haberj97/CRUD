/*
This file represent our express server entry point 
Server will running on LocalHost:8080 
*/

//Var section 
const express = require('express')
const app = express()
const PORT = 8080 
const bodyParser = require('body-parser')
const cors = require('cors')


//importation

require('./models/DataBase')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());

app.use('/uploads', express.static('uploads'));
// routes importations 
app.use(require('./routes/ObjectRoutes'))


//Function Section 
app.listen(PORT, function(req, res) {
    console.log("Server id running on : http://localhost:"+PORT)
})


