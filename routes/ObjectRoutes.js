const express = require('express')
const router = express.Router()
const objectControllers = require('../controllers/ObjectControllers')
const upload = require('../middlewares/imageMiddleware')

//create
router.post('/postObject',upload.single('image'),objectControllers.create)

//readAll
router.get('/getObject',objectControllers.readAll)

//readOne  
router.get('/findOne/:id',objectControllers.readOne)

//update
router.put('/udpateObject/:id',upload.single('image'),objectControllers.update)

//delete
router.delete('/deleteObject/:id',objectControllers.delete)

module.exports = router