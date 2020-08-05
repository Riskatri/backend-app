const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const UserController = require("../controller/UserController");
const {
  searchUserParamSchema,
  insertUserParamSchema,
  updateUserParamSchema,
  deleteUserParamSchema,
} = require("../schema/userSchema");

router
  .route("/")
  .get(celebrate({ query: searchUserParamSchema }), UserController.doSearchUser)
  .post(celebrate({ body: insertUserParamSchema }), UserController.doInsertUser)
  .put(
    celebrate({
      body: updateUserParamSchema,
    }),
    UserController.doUpdateUser
  )
  .delete(
    celebrate({
      query: deleteUserParamSchema,
    }),
    UserController.doDeleteUser
  );

module.exports = router;
