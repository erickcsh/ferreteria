var conf = require("../conf");
var mysqlLib      = require('mysql');
var mysql = mysqlLib.createConnection({
  host     : conf.host,
  user     : conf.username,
  password : conf.password,
  database : conf.database
});

module.exports = {
  getBrands: getBrands,
  getBrand: getBrand,
  createBrand: createBrand,
  deleteBrand: deleteBrand,
  updateBrand: updateBrand
};

function getBrands(callback, errorCallback) {
  mysql.query('CALL usp_ObtenerMarcas()', function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getBrand(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerMarca(?)', [id], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function createBrand(Brand, callback, errorCallback) {
  mysql.query('CALL usp_InsertarMarcas(?)', [Brand.nombre], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function deleteBrand(id, callback, errorCallback) {
  mysql.query('CALL usp_EliminarMarca(?)', [id], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function updateBrand(Brand, callback, errorCallback) {
  mysql.query('CALL usp_ModificarMarca(?, ?)', [Brand.idMarca, Brand.nombre], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

