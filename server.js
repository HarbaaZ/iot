const express = require('express');
const app = express();
var cors = require('cors');
var path = require('path');
require('dotenv').config({ path: path.resolve(__dirname + '/config/.env') });
const connectDatabase = require('./config/database');
const port = 8000;

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDatabase();

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});