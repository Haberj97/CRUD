const Object = require('../models/Object')

// CREATE 
exports.create = function (req, res, next) {
    
    const { title , description} = req.body
    const { image } = req.file
    
    if(!title || !description)
    {
        return res.status(400).json({error : "all the fields are required"})
        
    }
    const objectPost = Object({
        title: title,
        description: description,
        image : 'http://localhost:8080/uploads/'+ req.file.filename
    })
    Object.create(objectPost).then(resData => {
        res.json(resData)
    })
    .catch((err) => {
        console.log(err)
    })

}


// READ


exports.readOne = function (req, res) {
    var Query = { _id: req.params.id }
    Object.findOne(Query)
    .then((data) => {
        res.json(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

exports.readAll = function (req, res) {
    Object.find({})
    .sort({creationDate :'ASC'}).then(resData => {
        res.json(resData)
    }).catch((err)=>{
        console.log(err)
    })
}

// UPDATE

exports.update = function (req,res){
    var updateQuery = { _id: req.params.id }
    if(req.file){
        
        Object.updateOne(updateQuery,{
            $set :{
                title : req.body.title,
                description : req.body.description,
                image : 'http://localhost:8080/uploads/'+ req.file.filename
            } 
        })
        .then(resData => {
            res.json(resData)
        })
        .catch((err) => {
            console.log(err)
        })
    }else {
        Object.updateOne(updateQuery,{
            $set :{
                title : req.body.title,
                description : req.body.description
            } 
        })
        .then(resData => {
            res.json(resData)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

// DELETE
exports.delete = function (req, res) {
    var deleteQuery = { _id : req.params.id } 
    Object.findByIdAndDelete(deleteQuery).then(resData => { 
        res.json({
            message : "Post Deleted"
        })
    }).catch((err) => {
        console.log(err)
    })
}
