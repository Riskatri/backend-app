var db = require("../../src/helper/DBUtil");

const insertUser = async (param, createdBy) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO tb_m_user " +
      " (id,name,email,password,created_dt,created_by,updated_dt,updated_by) " +
      " VALUES " +
      " ? ";
    let dt = new Date();
    var values = [
      [
        param.id,
        param.name,
        param.email,
        param.password,
        dt,
        createdBy,
        dt,
        createdBy,
      ],
    ];

    db.query(sql, [values], function (err, result) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const selectUser = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM tb_m_user where id = ?";
    var sql_var = [param.id];
    db.query(sql, sql_var, function (err, rows, fields) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const updateUser = async (param, id) => {
  return new Promise(function (resolve, reject) {
    let sql = " UPDATE tb_m_user set name = ?, email = ? where id = ? ";
    var sql_var = [param.name, param.email, id];
    db.query(sql, sql_var, function (err, result) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const deleteUser = async (id) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM tb_m_user where id = ? ";
    var sql_var = [id];
    db.query(sql, sql_var, function (err, result) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = { insertUser, selectUser, updateUser, deleteUser };
