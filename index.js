var app = require('express')(),
    morgan = require('morgan'),
    port = process.env.NODE || 3000,
    bodyParser = require('body-parser');

// configuration
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));

// Set GET routes
app.get("/", function(req, res) {
    res.send(" I am the root");
});

app.get("/about", function(req, res) {
  res.send(" I am the about page");
});

app.get("/greeting", function(req, res) {
    res.sendFile(__dirname + '/greeting.html');
});

app.post("/greeting", function(req, res) {
    res.json({mesage: "Hello " + req.body.name + ", how are you today?"});
});

// Start the server
app.listen( port, function() {
    console.log("starting server on the http://localhost:" + port);
});