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
  updateHeadquarter: updateHeadquarter
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
  console.log(Headquarter);
  var a = mysql.query('CALL usp_InsertarSede(?, POINT(?))', [Headquarter.nombre, Headquarter.point], function(err, rows) {
    if (err) {
      console.log(err);
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
  console.log(a.msql);
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
