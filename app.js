// import api module 
const result = require('./api');

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
// creating  our server

app.get('/', (req, res) => {
    res.send('Home page ')
})

app.get('/game/start', (req, res) => {
    api = JSON.stringify(result);
    res.header("Content-Type", 'application/json');
    res.send(api);
})

app.listen(port, () => {
    console.log("your game is on  http://127.0.0.1:8000/game/api");
})