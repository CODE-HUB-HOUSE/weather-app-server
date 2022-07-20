const express = require('express');
const config = require('./config');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = config.port || port;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
