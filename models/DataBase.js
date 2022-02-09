/*
Here we manage mongo database connection 

*/

// var section 
const mongoose = require('mongoose')

//funct section
mongoose.connect('mongodb://localhost:27017/troovDataBase',{
    useNewUrlParser: true,
    useUnifiedTopology : true,
},(err, res) => {
    if(!err){
        console.log('dataBase connected')

    }else{
        console.log('Error'+err)
    }
})

