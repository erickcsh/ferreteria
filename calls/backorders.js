var conf = require("../conf");
var mysqlLib      = require('mysql');
var mysql = mysqlLib.createConnection({
  host     : conf.host,
  user     : conf.username,
  password : conf.password,
  database : conf.database
});

module.exports = {
  getBackorders: getBackorders,
  getBackorder: getBackorder,
  createBackorder: createBackorder,
  deleteBackorder: deleteBackorder,
  updateBackorder: updateBackorder
};

function getBackorders(idSede, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerBackorders()', function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getBackorder(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerBackorder(?)', [id], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function createBackorder(backorder, callback, errorCallback) {
  mysql.query('CALL usp_InsertarBackorder(?, ?, ?, ?, ?, ?)',
              [backorder.cedula, backorder.nombre, backorder.apellidoP, backorder.apellidoM,
               backorder.nombreSede, backorder.nombreTipoE], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function deleteBackorder(id, callback, errorCallback) {
  mysql.query('CALL usp_EliminarBackorder(?)', [id], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function updateBackorder(backorder, callback, errorCallback) {
  mysql.query('CALL usp_ModificarEnPlantilla(?, ?, ?, ?, STR_TO_DATE(?, \'%d/%m/%Y\'), ?, ?, ?)', [backorder.cedula, backorder.nombre, backorder.apellidoP,
              backorder.apellidoM, backorder.fechaContratado, 1, backorder.idSede, backorder.idTipoEmpleado], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

