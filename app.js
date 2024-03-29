const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const hbs = require('express-hbs')

app.engine('hbs', hbs.express4({
    defaultLayout: path.join(__dirname, 'views/layouts/default.hbs'),
    partialsDir: path.join(__dirname, 'views/partials'),
    layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.use('/',express.static(path.join(__dirname,'public')))  
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views/pages'))

app.use(session({
    secret: 'Shhh',
    resave: false,
    saveUninitialized: false
}))

app.use('/home',require('./routes/home'))
//Routes
app.get('/',(req,res) => {
     return res.redirect('/home')
})
app.get('/home2', function(req, res){
	res.render('home2');
});




app.listen(3000, function(){
	console.log("express running on localhost 3000");
});




