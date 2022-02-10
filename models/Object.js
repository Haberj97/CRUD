const mongoose = require('mongoose')

var objectSchema = mongoose.Schema({
    title : {
        type : String
    },
    image : {
        type : String
    },
    description : {
        type : String
    },
    creationDate : {
        type : Date,
        default : Date.now()
    },
    lastModification : {
        type : Date,
        default : Date.now()
    }

})

module.exports = mongoose.model("ObjectPost",objectSchema)