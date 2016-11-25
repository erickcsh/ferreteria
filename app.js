var express = require("express");
var products = require('./calls/products');
var headquarters = require('./calls/headquarters');

var app = express();
app.use(express.logger());

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/app');
  //app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/app'));
  app.use('/node_modules', express.static(__dirname + '/node_modules'));
  app.use('/bower_components', express.static(__dirname + '/bower_components'));
  app.use(app.router);
  app.engine('html', require('ejs').renderFile);
});

app.get('/', function(request, response) {
  response.render('index.html')
});

//products
app.get('/api/products', function(request, response) {
  products.getProducts(function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.post('/api/products', function(request, response) {
  products.createProduct(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.get('/api/product/:id', function(request, response) {
  products.getProduct(request.params.id, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.delete('/api/product/:id', function(request, response) {
  products.deleteProduct(request.params.id, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.put('/api/product/:id', function(request, response) {
  products.updateProduct(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

//headquarters
app.get('/api/headquarters', function(request, response) {
  headquarters.getHeadquarters(function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.post('/api/headquarters', function(request, response) {
  headquarters.createHeadquarter(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.get('/api/headquarter/:id', function(request, response) {
  headquarters.getHeadquarter(request.params.id, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
