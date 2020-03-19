const express = require('express')
const open = require('open')
const router = express.Router()

router.get('/', function(req,res){
    res.render('index')
})

router.get('/quarantine', function(req,res) {
    res.render('quarantine')
})

router.get('/helpline', function(req,res){
    res.render('helpline')
})

module.exports = router