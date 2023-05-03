var express = require('express');
var app = express();
images = [{image:"/images/chatBg.jpg"}];


// set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/images/message.png', express.static('./images/message.png'));

// use res.render to load up an ejs view file

// front page
app.get('/', function(req, res) {
  res.render('front');
});
// main page
app.get('/sample', function(req, res) {
  res.render('sample');
});
// signup page
app.get('/signup', function(req, res) {
  res.render('signup');
});
// login page
app.get('/login', function(req, res) {
  res.render('login');
});

app.listen(8080);
console.log('Server is listening on port 8080');

