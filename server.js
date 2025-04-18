// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static("public"));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
res.render('pages/index');
});

// login page
app.get('/login', function(req, res) {
res.render('pages/login');
});

// register page
app.get('/register', function(req, res) {
res.render('pages/register');
});

//Manajemen
app.get('/pengeluaran', function(req, res) {
res.render('pages/pengeluaran');
});

// pendapatan
app.get('/pendapatan', function (req, res) {
  res.render('pages/pendapatan');
});

//tagihan
app.get('/tagihan', function (req, res) {
  res.render('pages/tagihan');
})

//cicilan
app.get('/cicilan', function (req, res) {
  res.render('pages/cicilan');
})
app.listen(3000);
console.log("Server is running on http://localhost:3000");