import * as http from 'http';

const listenOn = 'http://localhost:8124';

const server = http.createServer();

server.on('request', (req, res) => {
    console.log(
        `${new Date().toISOString()}
        ${req.method} ${req.url} HTTP/${req.httpVersion}`
    ); 
    let url = new URL(req.url, listenOn);

    if(url.pathname === '/'){
        homePage(req, res);
    }
    else if(url.pathname === 'about') {
        about(req, res);
    }
    else if(url.pathname === 'contact') {
        contact(req, res);
    }
    else{
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('bad URL ${req.url}');
    }
});

function homePage(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`<!DOCTYPE html>
    <html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <h1>Hello World</h1>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </body>
    </html>`);
}

function about(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`<!DOCTYPE html>
    <html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <h1>This is the about page</h1>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </body>
    </html>`);
}

function contact(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`<!DOCTYPE html>
    <html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <h1>This is the contact page</h1>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </body>
    </html>`);
}

server.listen(new URL(listenOn).port);
console.log(`Listening to ${listenOn}`);