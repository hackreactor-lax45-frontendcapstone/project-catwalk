const express = require('express');
const path = require('path');
const port = 8000;

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', (req, res) => {
  res.sendStatus(200);
})

app.listen(port, () => console.log(`Server connected on port ${port}`));