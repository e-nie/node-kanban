const bodyParser = require('body-parser');

function parseBody(app) {

// parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
    app.use(bodyParser.json());
}

module.exports = parseBody;
