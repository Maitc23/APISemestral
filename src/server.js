const express = require('express');
const path = require ('path');
const morgan = require('morgan');
const bparser = require('body-parser');
const app = express();


//Setings 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(bparser.urlencoded({extended: false}));


// Static files
app.use(express.static("public"),express.static(path.join(__dirname, 'public')));


// Rutas 
app.use('/', require('./app/routes'));

//Server starting
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});