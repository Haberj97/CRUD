const express = require('express')
const router = express.Router()
const Object = require('../models/Object')

//create
router.post('/postObject', function (req, res) {
    // i will need to check how to use multer for pictures .
    console.log(req.body)
    const { title ,description } = req.body
    if(!title || !description)
    {
        return res.status(400).json({error : "all the fields are required"})
        
    }

    const objectPost = Object({title: title, description: description})
    Object.create(objectPost).then(resData => {
        res.json(resData)
    })
    .catch((err) => {
        console.log(err)
    })

})

//read
router.get('/getObject',function (req, res) {
    Object.find({})
    .sort({creationDate :'DESC'}).then(resData => {
        res.json(resData)
    }).catch((err)=>{
        console.log(err)
    })
})


module.exports = router