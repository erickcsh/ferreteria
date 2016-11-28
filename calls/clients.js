var conf = require("../conf");
var mysqlLib      = require('mysql');
var mysql = mysqlLib.createConnection({
  host     : conf.host,
  user     : conf.username,
  password : conf.password,
  database : conf.database
});

module.exports = {
  getClients: getClients,
  getClient: getClient,
  createClient: createClient,
  deleteClient: deleteClient,
  updateClient: updateClient,
  login: login
};

function getClients(callback, errorCallback) {
  mysql.query('CALL usp_ObtenerClientes()', function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function getClient(id, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerCliente(?)', [id], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function createClient(Client, callback, errorCallback) {
  mysql.query('CALL usp_InsertarClientes(?, ?, ?, ?, ?, ?, POINT(?, ?))',
              [Client.cedula, Client.nombre, Client.apellidoP, Client.apellidoM,
               Client.correo, Client.numero,  Client.lat, Client.lon], function(err, rows) {
    if (err) {
      errorCallback(err);
    } else {
      mysql.query('CALL usp_InsertarUsuario(?, ?, ?, ?)', [Client.correo, 'password', 0, Client.cedula], function(err, rows) {
        if (err) {
          errorCallback(err);
        } else {
          callback(rows);
        }
      });
    }
  });
}

function deleteClient(id, callback, errorCallback) {
  mysql.query('CALL usp_EliminarClientes(?)', [id], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function updateClient(Client, callback, errorCallback) {
  mysql.query('CALL usp_ModificarClientes(?, ?, ?, ?, ?, ?)', [Client.cedula, Client.nombre,
              Client.apellidoP, Client.apellidoM, Client.correo, Client.numero], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}

function login(auth, callback, errorCallback) {
  mysql.query('CALL usp_ObtenerUsuario(?, ?)', [auth.username, auth.password], function(err, rows, a) {
    if (err) {
      errorCallback(err);
    } else {
      callback(rows);
    }
  });
}
