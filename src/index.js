const express = require('express');
const app = express();
const path = require('path');
const exhbs = require('express-handlebars');
const methodsOverrride = require('method-override');
const expresSession = require('express-session');
//Setting
app.set('port', process.env.PORT ||  3000);
app.set('views',path.join(__dirname + 'views'));

app.engine('.hbs', exhbs({
defaultLayout: 'main',
layoutsDir:path.join(app.get('views))','layouts')),
partialsDir:path.join(app.get('views))','partials')),
extname:'.hbs' 
}));
app.set('view engine','.hbs')

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodsOverrride('_method'))
app.use(expresSession({
    secret:'mySecrectapp',
    resave: true,
    saveUninitialized: true
}))
// Global Variables

//Routes

//Start File

//Server is Listening
app.listen(app.get('port'),()=>{
    console.log('Server is on Por:',app.get('port'))
});