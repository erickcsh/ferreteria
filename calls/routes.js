var conf = require("../conf");
var mysqlLib      = require('mysql');
var mysql = mysqlLib.createConnection({
  host     : conf.host,
  user     : conf.username,
  password : conf.password,
  database : conf.database
});

module.exports = {
  getRoutes: getRoutes,
  getRoute: getRoute,
  getRoutePositions: getRoutePositions
};

function getRoutes(callback, errorCallback) {
  mysql.query('CALL usp_ObtenerRutas()', function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getRoute(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerGananciasXRuta(?)', [id], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getRoutePositions(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerUbicacionXRuta(?)', [id], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

