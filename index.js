const winston = require('winston');
const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(express.static('public'));

app.use(helmet());
app.set('view engine','pug');
app.set('views','./views'); //default

require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));