const express = require('express');
const app = express();
const path = require('path');
const port = 1337;


var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
   res.render('homepage', {title: 'Homepage', stylesheet: '/css/homepage.css', javascript: '/js/homepage.js'});
});
app.get('/homepage', function(req, res) {
   res.render('homepage', {title: 'Homepage', stylesheet: '/css/homepage.css', javascript: '/js/homepage.js'});
});
app.get('/about', function(req, res) {
   res.render('about', {title: 'About', stylesheet: '/css/about.css', javascript: '/js/about.js'});
});
app.get('/feed', function(req, res) {
    res.render('feed', {title: 'Feed', stylesheet: '/css/feed.css', javascript: '/js/feed.js'});
});
app.get('/services', function(req, res) {
    res.render('services', {title: 'Services', stylesheet: '/css/services.css', javascript: '/js/services.js'});
});
app.get('/contact', function(req, res) {
    res.render('contact', {title: 'Contact', stylesheet: '/css/contact.css', javascript: '/js/contact.js'});
});


// 404 page
app.use(function(req, res) {
   res.status(404);
   res.render('404');
});


// 500 page
app.use(function(req, res, next) {
   res.status(500);
   res.render('500');
});



app.listen(port, function() {
   console.log('Server listening on port ' + port);
});
