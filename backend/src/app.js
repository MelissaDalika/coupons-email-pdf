const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//DATABASE
require('../database/db-atlas')

// SETTINGS
app.set('port', process.env.PORT || 4000);

// MIDDLEWARES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

// IMPORT ROUTES
const indexRoutes = require('./routes');

//ROUTES
app.use(indexRoutes);
app.use(express.static(path.join (__dirname, 'public')));

//REQUEST CRUD TEST 
app.get('/register', (req, res) => {
  //res.send('ok get');
  res.sendFile(path.join(__dirname,'../../frontend/public/index.html'));
});
app.post('/register', (req, res) => {
  res.send('ok post');
});

//REST API CRUD
/* app.post('/register', (req, res) => {

        const name = req.body.name,
        const surname = req.body.surname,
        const email = req.body.email,
        const city = req.body.city,
        const province = req.body.province,
        const zipCode = req.body.zipCode,
        const company = req.body.company,
        const termsConditions = req.body.termsConditions,
        const privacy = req.body.privacy,
}); */


// START SERVER
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
 });