require("dotenv").config({
  path: (process.env.NODE_ENV == "test" ? ".env.test" : ".env"),
});

const port = process.env.PORT || 3001;

const express = require("express");
const app = express();

const routerAuth = require("./routes/users");
const { middlewareAuth } = require("./middleware/auth");
const routerTasks = require("./routes/tasks");

app.use(express.json());

app.use("/tasks", middlewareAuth, routerTasks);
app.use("/", routerAuth);

//inicia o servidor

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });


module.exports = app;
