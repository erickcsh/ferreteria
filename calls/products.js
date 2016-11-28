var conf = require("../conf");
var mysqlLib      = require('mysql');
var mysql = mysqlLib.createConnection({
  host     : conf.host,
  user     : conf.username,
  password : conf.password,
  database : conf.database
});

module.exports = {
  getProducts: getProducts,
  getProduct: getProduct,
  createProduct: createProduct,
  deleteProduct: deleteProduct,
  updateProduct: updateProduct
};

function getProducts(callback, errorCallback) {
  mysql.query('CALL usp_ObtenerProductos()', function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getProduct(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerProducto(?)', [id], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function createProduct(product, callback, errorCallback) {
  mysql.query('CALL usp_InsertarProducto(?, ?, ?, ?, ?, ?, ?, ?)', [product.codigo, product.nombre, product.descripcion,
              product.utilidad, product.aspectosTecnicos, product.precioVenta, product.precioVenta, product.NombreMarca], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function deleteProduct(id, callback, errorCallback) {
  mysql.query('CALL usp_EliminarProducto(?)', [id], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function updateProduct(product, callback, errorCallback) {
  mysql.query('CALL usp_ModificarProducto(?, ?, ?, ?, ?, ?, ?)', [product.idProducto, product.descripcion,
              product.utilidad, product.aspectosTecnicos, product.precioVenta, product.precioVenta, product.idMarca], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}
