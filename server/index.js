const express = require('express');
const path = require('path');
const Router = express.Router();
const port = 8000;

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Connected on http://localhost:${port}`));