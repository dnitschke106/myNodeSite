var http = require('http');
var fs = require('fs');
const PORT = 1337;


function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode){
        responseCode = 200;
    }
    fs.readFile(__dirname + path, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode, { 'Content-Type': contentType });
            res.end(data);
        }
    }
    );
}


http.createServer((req, res) => {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();


    switch (path) {
        case '':
            serveStaticFile(res, '/public/homepage.html', 'text/html');
            break;
        case '/homepage':
            serveStaticFile(res, '/public/homepage.html', 'text/html');
            break;
        case '/contact':
            serveStaticFile(res, '/public/contact.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/feed':
            serveStaticFile(res, '/public/feed.html', 'text/html');
            break;
        case '/services':
            serveStaticFile(res, '/public/services.html', 'text/html');
            break;
        case '/images/logo.png':
            serveStaticFile(res, '/public/images/logo.png', 'image/png');
            break;
        case '/images/404bottom.gif':
            serveStaticFile(res, '/public/images/404bottom.gif', 'image/gif');
            break;
        case '/images/404top_w.jpg':  
            serveStaticFile(res, '/public/images/404top_w.jpg', 'image/jpg');
            break;
        case '/images/404mid.gif':
            serveStaticFile(res, '/public/images/404mid.gif', 'image/gif');
            break;
        case '/images/brothers.jpg':
            serveStaticFile(res, '/public/images/brothers.jpg', 'image/jpg');
            break;
        case '/images/brennan.jpg':
            serveStaticFile(res, '/public/images/brennan.jpg', 'image/jpg');
            break;
        case '/images/david.jpg':
            serveStaticFile(res, '/public/images/david.jpg', 'image/jpg');
            break;
        case '/images/joe.jpg':
            serveStaticFile(res, '/public/images/joe.jpg', 'image/jpg');
            break;
        case '/images/x.png':
            serveStaticFile(res, '/public/images/x.png', 'image/png');
            break;
        case '/css/about.css':
            serveStaticFile(res, '/public/css/about.css', 'text/css');
            break;
        case '/css/contact.css':
            serveStaticFile(res, '/public/css/contact.css', 'text/css');
            break;
        case '/css/feed.css':
            serveStaticFile(res, '/public/css/feed.css', 'text/css');
            break;
        case '/css/homepage.css':
            serveStaticFile(res, '/public/css/homepage.css', 'text/css');
            break;
        case '/css/services.css':
            serveStaticFile(res, '/public/css/services.css', 'text/css');
            break;
        case '/js/about.js':
            serveStaticFile(res, '/public/js/about.js', 'text/javascript');
            break;
        case '/js/contact.js':
            serveStaticFile(res, '/public/js/contact.js', 'text/javascript');
            break;
        case '/js/feed.js':
            serveStaticFile(res, '/public/js/feed.js', 'text/javascript');
            break;
        case '/js/homepage.js':
            serveStaticFile(res, '/public/js/homepage.js', 'text/javascript');
            break;
        case '/ajax/services.js':
            serveStaticFile(res, '/public/ajax/services.js', 'text/javascript');
            break;
        case '/js/jquery-3.7.1.min.js':
            serveStaticFile(res, '/public/js/jquery-3.7.1.min.js', 'text/javascript');
            break;
        case '/ajax/calendarInfo.json':
            serveStaticFile(res, '/public/ajax/calendarInfo.json', 'application/json');
            break;   
        case '/ajax/feedInfo.html':
            serveStaticFile(res, '/public/ajax/feedInfo.html', 'text/html');
            break;    
        case '/ajax/mapInfo.xml':
            serveStaticFile(res, '/public/ajax/mapInfo.xml', 'application/xml');
            break;   
        case '/ajax/serviceButtons.html':
            serveStaticFile(res, '/public/ajax/serviceButtons.html', 'text/html');
            break;    
        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }
}).listen(PORT);


console.log('Server started on localhost:1337; press Ctrl-C to terminate....');
