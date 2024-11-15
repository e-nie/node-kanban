const express = require('express');
const routes = require('./routes');
const parseBody = require('./bodyParser');
const dbConnection = require('./dbConnection');

const app = express();
const PORT = 3001;


dbConnection();
parseBody(app);
routes(app);


app.listen(PORT, () => {
    console.log(`Example app listening on port ${ PORT }`);
});

