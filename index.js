const express = require('express');
const { db } = require('./config/mongooes')
const router = require('./routes/homeroute');
require('dotenv').config()
const app = express()
const path = require('path')
const port = process.env.PORT || 5000;
db();
// layouts
const layouts = require('express-ejs-layouts')
app.use(layouts)
app.set('layout extractStyles', true)
app.set('layout extractScripts', true)
app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.json())
app.use(express.urlencoded())
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'./views'))
app.use('/', require('./routes/homeroute'))
app.listen(port, () => {
    console.log(`server is connected to the port: ${port}`);
})