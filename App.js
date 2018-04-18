// const app = require('express')();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const routes = require('./Route');
routes(app);


app.listen(3000, () => console.log('Server is running on port 3000'));
