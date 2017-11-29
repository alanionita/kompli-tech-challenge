const express = require('express');
const routes = require('./routers/router');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);
app.listen(process.env.PORT || '8081');

module.exports = app;
