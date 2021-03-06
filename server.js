const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();

require('./helpers/helpersHandlebars');


app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));


app.use(require('./routes/Car.routes'));
// app.use("/rentalCars", require('./routes/Car.routes'));
// eso sería para ahorrar poner en las rutas del controlador la parte común de "/rentalCars"
app.use(require('./routes/Rent.routes'));

app.set('view engine', 'hbs');


app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    extname: '.hbs'
}));


module.exports = app;