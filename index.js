// Core Libs
const express = require('express');
const app = express();

// Utils
const logger = require('./utils/logger');


app.listen(3000, () => {
    logger.info('Listening on port 3000');
});