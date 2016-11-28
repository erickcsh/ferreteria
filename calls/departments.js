var conf = require("../conf");
var mysqlLib      = require('mysql');
var mysql = mysqlLib.createConnection({
  host     : conf.host,
  user     : conf.username,
  password : conf.password,
  database : conf.database
});

module.exports = {
  getDepartments: getDepartments,
  getDepartment: getDepartment,
  createDepartment: createDepartment,
  deleteDepartment: deleteDepartment,
  updateDepartment: updateDepartment
};

function getDepartments(idSede, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerDepartamentoXSede(?)', [idSede], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getDepartment(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerDepartamento(?)', [id], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function createDepartment(department, callback, errorCallback) {
  mysql.query('CALL usp_InsertarDepartamento(?, ?)',
              [department.nombre, department.NombreSede], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function deleteDepartment(id, callback, errorCallback) {
  mysql.query('CALL usp_EliminarDepartamento(?)', [id], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function updateDepartment(department, callback, errorCallback) {
  mysql.query('CALL usp_ModificarDepartamento(?, ?, ?, ?)', [department.idDepartamento, department.idSede, department.Departamento, undefined], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

