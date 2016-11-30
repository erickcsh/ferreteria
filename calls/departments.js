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
  updateDepartment: updateDepartment,
  addDepartmentExpert: addDepartmentExpert,
  getHalls: getHalls,
  getHeadquarterHalls: getHeadquarterHalls,
  getHall: getHall,
  getHallOrder: getHallOrder,
  createHall: createHall,
  deleteHall: deleteHall,
  updateHall: updateHall,
  getShelfs: getShelfs,
  getShelf: getShelf,
  createShelf: createShelf,
  deleteShelf: deleteShelf,
  updateShelf: updateShelf
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

function addDepartmentExpert(department, callback, errorCallback) {
  mysql.query('CALL usp_ModificarDepartamento(?, ?, ?, ?)', [department.idDepartamento, undefined, undefined, department.cedEmpleado], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getHalls(idDepartamento, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerPasilloXDepartamento(?)', [idDepartamento], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getHeadquarterHalls(idSede, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerPasilloXSede(?)', [idSede], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getHall(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerPasillo(?)', [id], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getHallOrder(data, callback, errorCallback) {
  mysql.query('CALL usp_AcomodarProductosXSedeXDepartamentoXPasillo(?, ?, ?)', [data.idSede, data.idDepartamento, data.idPasillo], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function createHall(hall, callback, errorCallback) {
  mysql.query('CALL usp_InsertarPasillo(?, ?, ?)',
              [hall.idDepartamento, hall.numero, hall.nombre], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function deleteHall(id, callback, errorCallback) {
  mysql.query('CALL usp_EliminarPasillo(?)', [id], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function updateHall(hall, callback, errorCallback) {
  mysql.query('CALL usp_ModificarPasillo(?, ?, ?, ?)', [hall.idPasillo, hall.idDepartamento, hall.numero, hall.nombre], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getShelfs(idPasillo, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerEstantesXPasillo(?)', [idPasillo], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getShelf(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerEstante(?)', [id], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function createShelf(shelf, callback, errorCallback) {
  mysql.query('CALL usp_InsertarEstante(?, ?, ?)',
              [shelf.idPasillo, shelf.cantidadEstantes, shelf.pisos], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function deleteShelf(id, callback, errorCallback) {
  mysql.query('CALL usp_EliminarEstante(?)', [id], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function updateShelf(shelf, callback, errorCallback) {
  mysql.query('CALL usp_ModificarEstante(?, ?, ?, ?)', [shelf.idEstante, shelf.idPasillo, shelf.cantidadEstantes, shelf.pisos], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

