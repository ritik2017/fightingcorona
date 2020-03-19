const express = require('express')
const open = require('open')
const router = express.Router()

router.get('/', function(req,res){
    res.render('index')
})

router.get('/quarantine', function(req,res) {
    res.render('quarantine')
})

router.get('/centers', function(req,res){
    res.render('centers')
})

router.get('/faqs', function(req,res){
    res.render('faqs')
})

module.exports = router