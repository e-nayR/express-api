
require("dotenv").config();
 
const port = process.env.PORT;
const express = require('express'); 
const app = express();

const routerAuth = require("./routes/users");
const {middlewareAuth} = require("./middleware/auth");
const routerTasks = require("./routes/tasks");

app.use(express.json());

app.use("/tasks", middlewareAuth , routerTasks)
app.use("/", routerAuth)

//inicia o servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})