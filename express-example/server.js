const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// GET http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// POST http://localhost:3000/
app.post('/', (req, res) => {
    res.send('This is a post request to /');
});

// PUT http://localhost:3000/
app.put('/', (req, res) => {
    res.send('This is a put request to /');
});

// DELETE http://localhost:3000/
app.delete('/', (req, res) => {
    res.send('This is a delete request to /');
});


// GET http://localhost:3000/about
app.get('/about', (req, res) => {
    res.send('This is the about endpoint');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});