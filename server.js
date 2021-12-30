const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/test', (req, res) => {
    res.json({ message: "Hello from the server!" });
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Backend server started on port ${port}`));