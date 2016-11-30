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
  updateProduct: updateProduct,
  getHQProducts: getHQProducts,
  createHQProduct: createHQProduct,
  bill: bill,
  getPayments: getPayments,
  getBills: getBills,
  getBill: getBill,
  getBillProducts: getBillProducts,
  search: search
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
  mysql.query('CALL usp_ModificarProducto(?, ?, ?, ?, ?, ?, ?, ?)', [product.idProducto, product.codigoProducto, product.descripcion,
              product.utilidad, product.aspectosTecnicos, product.precioVenta, product.precioVenta, product.idMarca], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getHQProducts(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerInventarioXSede(?)', [id], function(err, rows) {
    if (err) {
      console.log(err);
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function createHQProduct(product, callback, errorCallback) {
  mysql.query('CALL usp_InsertarInventarioXSedes(?, ?, ?)', [product.nombreProducto, product.idPasillo, product.cantidad], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function bill(product, callback, errorCallback) {
  mysql.query('CALL usp_InsertarPedido(?, ?, ?, ?, ?, ?)', [product.cedCliente, product.cedEmpleado, product.nombreProducto,
              product.nombreSede, product.idPasillo, product.cantidad], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getBills(callback, errorCallback) {
  mysql.query('CALL usp_ObtenerPedidos()', function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getBill(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerPedido(?)', [id], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getBillProducts(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerProductosXPedido(?)', [id], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getPayments(callback, errorCallback) {
  mysql.query('CALL usp_ObtenerFacturas()', function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function search(id, x, y, callback, errorCallback) {
  mysql.query('CALL usp_BuscarProductoSedeMasCercana(?, POINT(?, ?))', [id, x, y], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}
