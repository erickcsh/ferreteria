var conf = require("../conf");
var mysqlLib      = require('mysql');
var mysql = mysqlLib.createConnection({
  host     : conf.host,
  user     : conf.username,
  password : conf.password,
  database : conf.database
});

module.exports = {
  getEmployees: getEmployees,
  getEmployee: getEmployee,
  createEmployee: createEmployee,
  deleteEmployee: deleteEmployee,
  updateEmployee: updateEmployee,
  getBestEmployee: getBestEmployee,
  getEmployeeTypes: getEmployeeTypes,
  getEmployeeType: getEmployeeType,
  createEmployeeType: createEmployeeType,
  deleteEmployeeType: deleteEmployeeType,
  updateEmployeeType: updateEmployeeType
};

function getEmployees(idSede, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerPlantillaXSede(?)', [idSede], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getEmployee(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerEmpleado(?)', [id], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function createEmployee(employee, callback, errorCallback) {
  mysql.query('CALL usp_InsertarEnPlantilla(?, ?, ?, ?, ?, ?)',
              [employee.cedula, employee.nombre, employee.apellidoP, employee.apellidoM,
               employee.nombreSede, employee.nombreTipoE], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      mysql.query('CALL usp_InsertarUsuario(?, ?, ?, ?)', [employee.cedula, 'password', 1, employee.cedula], function(err, rows) {
        if (err) {
          errorCallback(err);
        } else {
          callback(rows);
        }
      });
    }
  });
}

function deleteEmployee(id, callback, errorCallback) {
  mysql.query('CALL usp_EliminarEnPlantilla(?)', [id], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function updateEmployee(employee, callback, errorCallback) {
  mysql.query('CALL usp_ModificarEnPlantilla(?, ?, ?, ?, STR_TO_DATE(?, \'%d/%m/%Y\'), ?, ?, ?)', [employee.cedula, employee.nombre, employee.apellidoP,
              employee.apellidoM, employee.fechaContratado, 1, employee.idSede, employee.idTipoEmpleado], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}
function getBestEmployee(idSede, callback, errorCallback) {
  getEmployee(idSede, function (rows) {
    mysql.query('CALL usp_EmpleadoMasVentasXSede(?)', [rows[0][0].nombre], function(err, rows, a) {
      if (err) {
        errorCallback(err);
      } else {
        callback(rows);
      }
    });
  }, function (err) {
    errorCallback(err);
  });
}

function getEmployeeTypes(callback, errorCallback) {
  mysql.query('CALL usp_ObtenerTiposEmpleado()', function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getEmployeeType(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerTipoEmpleado(?)', [id], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function createEmployeeType(employee, callback, errorCallback) {
  mysql.query('CALL usp_InsertarTipoEmpleado(?)', [employee.nombre], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function deleteEmployeeType(id, callback, errorCallback) {
  mysql.query('CALL usp_EliminarTipoEmpleado(?)', [id], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function updateEmployeeType(employee, callback, errorCallback) {
  mysql.query('CALL usp_ModificarTipoEmpleado(?, ?)', [employee.idTipoEmpleado, employee.nombre], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

