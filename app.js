// import our created api module from index.js file
const result = require('./index');

// creating  our server
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Home page ')
})

// our main get request
app.get('/game/start', (req, res) => {
    api = JSON.stringify(result);
    //set the Content-Type to application/json
    res.header("Content-Type", 'application/json');
    res.send(api);
})

// listening 
app.listen(port, () => {
    console.log("your game is running on http://127.0.0.1:8000/game/start");
})