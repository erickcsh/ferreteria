var express = require("express");
var products = require('./calls/products');
var headquarters = require('./calls/headquarters');
var clients = require('./calls/clients');
var employees = require('./calls/employees');
var car_brands= require('./calls/car_brands');
var backorders = require('./calls/backorders');
var departments = require('./calls/departments');

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

app.get('/api/best-headquarter/', function(request, response) {
  headquarters.getBestHeadquarter(function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

//clients
app.get('/api/clients', function(request, response) {
  clients.getClients(function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.post('/api/clients', function(request, response) {
  clients.createClient(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.get('/api/client/:id', function(request, response) {
  clients.getClient(request.params.id, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.delete('/api/client/:id', function(request, response) {
  clients.deleteClient(request.params.id, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.put('/api/client/:id', function(request, response) {
  clients.updateClient(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.post('/api/login', function(request, response) {
  clients.login(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

//employees
app.get('/api/headquarter/:idSede/employees', function(request, response) {
  employees.getEmployees(request.params.idSede, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.post('/api/employees', function(request, response) {
  employees.createEmployee(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.get('/api/employee/:id', function(request, response) {
  employees.getEmployee(request.params.id, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.delete('/api/employee/:id', function(request, response) {
  employees.deleteEmployee(request.params.id, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.put('/api/employee/:id', function(request, response) {
  employees.updateEmployee(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.get('/api/headquarter/:idSede/best-employee', function(request, response) {
  employees.getEmployees(request.params.idSede, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

//employee_type
app.get('/api/employee_types', function(request, response) {
  employees.getEmployeeTypes(function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.post('/api/employee_types', function(request, response) {
  employees.createEmployeeType(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.get('/api/employee_type/:id', function(request, response) {
  employees.getEmployeeType(request.params.id, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.delete('/api/employee_type/:id', function(request, response) {
  employees.deleteEmployeeType(request.params.id, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.put('/api/employee_type/:id', function(request, response) {
  employees.updateEmployeeType(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

//car_brands
app.get('/api/car_brands', function(request, response) {
  car_brands.getCarBrands(function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.post('/api/car_brands', function(request, response) {
  car_brands.createCarBrand(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.get('/api/car_brand/:id', function(request, response) {
  car_brands.getCarBrand(request.params.id, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.delete('/api/car_brand/:id', function(request, response) {
  car_brands.deleteCarBrand(request.params.id, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.put('/api/car_brand/:id', function(request, response) {
  car_brands.updateCarBrand(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

//car_models
app.get('/api/car_models', function(request, response) {
  car_brands.getCarModels(function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.post('/api/car_models', function(request, response) {
  car_brands.createCarModel(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.get('/api/car_model/:id', function(request, response) {
  car_brands.getCarModel(request.params.id, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.delete('/api/car_model/:id', function(request, response) {
  car_brands.deleteCarModel(request.params.id, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.put('/api/car_model/:id', function(request, response) {
  car_brands.updateCarModel(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

//backorders
app.get('/api/backorders', function(request, response) {
  backorders.getBackorders(function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.post('/api/backorders', function(request, response) {
  backorders.createBackorder(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.get('/api/backorder/:id', function(request, response) {
  backorders.getBackorder(request.params.id, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.delete('/api/backorder/:id', function(request, response) {
  backorders.deleteBackorder(request.params.id, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.put('/api/backorder/:id', function(request, response) {
  backorders.updateBackorder(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

//departments
app.get('/api/headquarter/:idSede/departments', function(request, response) {
  departments.getDepartments(request.params.idSede, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.post('/api/departments', function(request, response) {
  departments.createDepartment(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.get('/api/department/:id', function(request, response) {
  departments.getDepartment(request.params.id, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.delete('/api/department/:id', function(request, response) {
  departments.deleteDepartment(request.params.id, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

app.put('/api/department/:id', function(request, response) {
  departments.updateDepartment(request.body, function (rows) {
    response.json(rows)
  }, function (err) {
    response.status(500).send({ error: err })
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
