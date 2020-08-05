// require("dotenv").config();
// const { db } = require("./src/helper/DBUtil");
// const {
//   selectUser,
//   insertUser,
//   updateUser,
//   deleteUser,
// } = require("./src/model/User");

// console.log(process.env.APP_NAME);

// async function test() {
//   //   var param = {
//   //     id: 4,
//   //   };
//   //   let data = await selectUser(param);
//   //   console.log(data);
//   var id = "4";
//   let result = await deleteUser(id);
//   console.log(result);
// }

// // async function insert() {
// //   var param = {
// //     id: 1,
// //     name: "Riska",
// //     email: "riska@email.com",
// //     password: "12345678",
// //   };
// //   var createdBy = "tester";
// //   let result = await insertUser(param, createdBy);
// //   console.log(result);
// // }
// // async function update() {
// //   var param = {
// //     name: "abas",
// //     email: "abas@gail.com",
// //   };
// //   var id = "4";
// //   let result = await updateUser(param, id);
// //   console.log(result);
// // }
// test();
// // update();
// // insert();

require("dotenv").config();
const express = require("express");
const http = require("http");
const routes = require("./src/routes");
const { errors } = require("celebrate");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.SERVER_PORT;
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// register base path '/'
app.get("/", (req, res) =>
  res.send(`${process.env.APP_NAME} - ${process.env.APP_VERSION}`)
);

//register all route under '/api/v1'
app.use("/api/v1", routes);

// register error handler from Joi->Celebrate
app.use(errors());

var httpServer = http.createServer(app);

httpServer.listen(port, () =>
  console.log(`Server started, listening on port ${port}!`)
);
