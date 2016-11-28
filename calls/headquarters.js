var conf = require("../conf");
var mysqlLib      = require('mysql');
var mysql = mysqlLib.createConnection({
  host     : conf.host,
  user     : conf.username,
  password : conf.password,
  database : conf.database
});

module.exports = {
  getHeadquarters: getHeadquarters,
  getHeadquarter: getHeadquarter,
  createHeadquarter: createHeadquarter,
  deleteHeadquarter: deleteHeadquarter,
  updateHeadquarter: updateHeadquarter,
  getBestHeadquarter: getBestHeadquarter
};

function getHeadquarters(callback, errorCallback) {
  mysql.query('CALL usp_ObtenerSedes()', function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getHeadquarter(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerSede(?)', [id], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function createHeadquarter(Headquarter, callback, errorCallback) {
  mysql.query('CALL usp_InsertarSede(?, POINT(?, ?))', [Headquarter.nombre, Headquarter.lat, Headquarter.lon], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function deleteHeadquarter(id, callback, errorCallback) {
  mysql.query('CALL usp_EliminarHeadquartero(?)', [id], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function updateHeadquarter(Headquarter, callback, errorCallback) {
  mysql.query('CALL usp_ModificarHeadquartero(?, ?, ?, ?, ?, ?)', [Headquarter.idHeadquartero, Headquarter.descripcion,
              Headquarter.utilidad, Headquarter.precio, Headquarter.precioVenta, undefined], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getBestHeadquarter(callback, errorCallback) {
  mysql.query('CALL usp_SedeMasVentas()', function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}
