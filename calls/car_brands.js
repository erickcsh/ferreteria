var conf = require("../conf");
var mysqlLib      = require('mysql');
var mysql = mysqlLib.createConnection({
  host     : conf.host,
  user     : conf.username,
  password : conf.password,
  database : conf.database
});

module.exports = {
  getCars: getCars,
  getCar: getCar,
  createCar: createCar,
  deleteCar: deleteCar,
  updateCar: updateCar,
  getCarBrands: getCarBrands,
  getCarBrand: getCarBrand,
  createCarBrand: createCarBrand,
  deleteCarBrand: deleteCarBrand,
  updateCarBrand: updateCarBrand,
  getCarModels: getCarModels,
  getCarModel: getCarModel,
  createCarModel: createCarModel,
  deleteCarModel: deleteCarModel,
  updateCarModel: updateCarModel
};

function getCars(callback, errorCallback) {
  mysql.query('CALL usp_ObtenerFlotilla()', function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getCar(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerVehiculoFlotilla(?)', [id], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function createCar(Car, callback, errorCallback) {
  mysql.query('CALL usp_InsertarFlotilla(?, ?, ?, ?, ?)', [Car.placa, Car.IdModelo, Car.anno, undefined, 0], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function deleteCar(id, callback, errorCallback) {
  mysql.query('CALL usp_EliminarFlotilla(?)', [id], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function updateCar(Car, callback, errorCallback) {
  mysql.query('CALL usp_ModificarFlotilla(?, ?, ?, ?, ?)', [Car.Placa, Car.IdModelo, Car['Año'], undefined, 0], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getCarBrands(callback, errorCallback) {
  mysql.query('CALL usp_ObtenerMarcasCarros()', function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getCarBrand(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerMarcaCarro(?)', [id], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function createCarBrand(CarBrand, callback, errorCallback) {
  mysql.query('CALL usp_InsertarMarcaCarro(?)', [CarBrand.nombre], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function deleteCarBrand(id, callback, errorCallback) {
  mysql.query('CALL usp_EliminarMarcaCarro(?)', [id], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function updateCarBrand(CarBrand, callback, errorCallback) {
  mysql.query('CALL usp_ModificarMarcaCarro(?, ?)', [CarBrand.idMarcaCarro, CarBrand.nombre], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getCarModels(callback, errorCallback) {
  mysql.query('CALL usp_ObtenerModelosCarros()', function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getCarModel(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerModeloCarro(?)', [id], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function createCarModel(CarModel, callback, errorCallback) {
  mysql.query('CALL usp_InsertarModeloCarro(?, ?)', [CarModel.nombre, CarModel.NombreMarca], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function deleteCarModel(id, callback, errorCallback) {
  mysql.query('CALL usp_EliminarModeloCarro(?)', [id], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function updateCarModel(CarModel, callback, errorCallback) {
  mysql.query('CALL usp_ModificarModeloCarro(?, ?, ?)', [CarModel.idModelo, CarModel.idMarcaCarro, CarModel.nombre], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}


