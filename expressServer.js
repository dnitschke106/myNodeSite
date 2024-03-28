const express = require('express'); 
const app = express(); 
const port = 1337; 
const dir = __dirname + '/public/'; 

app.use(express.static('public')); 

app.get('/', function(request, response){
    response.sendFile(dir + 'homepage.html');
}); 

app.get('/homepage', function(request, response){
    response.sendFile(dir + 'homepage.html');
}); 

app.get('/about', function(request, response){
    response.sendFile(dir + 'about.html');
}); 

app.get('/feed', function(request, response){
    response.sendFile(dir + 'feed.html');
}); 

app.get('/services', function(request, response){
    response.sendFile(dir + 'services.html');
}); 

app.get('/contact', function(request, response){
    response.sendFile(dir + 'contact.html');
}); 

app.get('/*', function(request, response){
    response.sendFile(dir + '404.html');
}); 

app.listen(port, function(){
    console.log('Listening on http://localhost:' + port + " press ctrl+c to quit..."); 
});