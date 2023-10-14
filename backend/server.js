const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

require('dotenv').config;

const app  = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});