/*
This file represent our express server entry point 
Server will running on LocalHost:8080 
*/

//Var section 
const express = require('express')
const app = express()
const PORT = 8080 ;

//Function Section 
app.listen(PORT, function(req, res) {
    console.log("Server connected")
})


