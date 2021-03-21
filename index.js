const jsonfile = require('./api');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('go to the link - http://127.0.0.1:8000/game/api');
    } else if (req.url == '/game/api') {
        api = JSON.stringify(jsonfile);
        res.end(api);
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("your game is on  http://127.0.0.1:8000/game/api");
});