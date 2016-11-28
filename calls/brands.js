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
  mysql.query('CALL usp_ObtenerSedes()', function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getBrand(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerSede(?)', [id], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function createBrand(Brand, callback, errorCallback) {
  mysql.query('CALL usp_InsertarSede(?, POINT(?, ?))', [Brand.nombre, Brand.lat, Brand.lon], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function deleteBrand(id, callback, errorCallback) {
  mysql.query('CALL usp_EliminarBrando(?)', [id], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function updateBrand(Brand, callback, errorCallback) {
  mysql.query('CALL usp_ModificarBrando(?, ?, ?, ?, ?, ?)', [Brand.idBrando, Brand.descripcion,
              Brand.utilidad, Brand.precio, Brand.precioVenta, undefined], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getBestBrand(callback, errorCallback) {
  mysql.query('CALL usp_SedeMasVentas()', function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}
