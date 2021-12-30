const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json())

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build/index.html'));
// });

app.get('/api/test', (req, res) => {
    res.json({ message: "Hello from the server!" });

})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Backend server started on port ${port}`));