const {
  selectUser,
  insertUser,
  updateUser,
  deleteUser,
} = require("../../src/model/User");

class UserController {
  async doSearchUser(req, res) {
    const param = req.query;
    try {
      const result = await selectUser(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchUser", err);
    }
  }
  async doInsertUser(req, res) {
    const param = req.body;
    try {
      const result = await insertUser(param, param.createBy);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertUser", err);
    }
  }
  async doUpdateUser(req, res) {
    const param = req.body;
    try {
      const result = await updateUser(param, param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateUser", err);
    }
  }

  async doDeleteUser(req, res) {
    const param = req.query;
    try {
      const result = await deleteUser(param.id);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteUser", err);
    }
  }
}
module.exports = new UserController();
