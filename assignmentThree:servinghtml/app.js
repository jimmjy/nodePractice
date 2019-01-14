const path = require('path');

const express = require('express');

const pageOne = require('./routes/pageOne');
const pageTwo = require('./routes/pageTwo');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(pageOne);
app.use(pageTwo);

app.listen(3100);
