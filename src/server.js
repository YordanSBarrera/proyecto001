const express = require('express');
const exphdl = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');

//inicializaciones
const app = express();

//configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphdl({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs');

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

//global variables

//routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;