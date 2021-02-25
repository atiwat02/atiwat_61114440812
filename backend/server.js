const express = require('express');
const data = require('./data');
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
app.get('/api/data', (req, res) => {
    res.send(data);

});

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port${port}...`) );