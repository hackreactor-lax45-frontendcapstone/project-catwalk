const express = require('express');
const path = require('path');
const port = 8000;

const router = require('./router');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

app.listen(port, () => console.log(`Connected on http://localhost:${port}`));