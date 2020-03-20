const express = require('express')
const router = require('./router')

const app = express()

let port = process.env.PORT
if(port == NULL || port == "")
    port = 3000

app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('views', 'views')
app.set('view engine', 'ejs')
app.use('/', router)

app.listen(port)