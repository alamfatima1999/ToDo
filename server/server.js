const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());

//Middlewares
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

const port = 3001;
require("dotenv/config");

app.get("/", (req, res) => {
  res.send("Hello");
});

// app.listen(port, () => {
//   console.log(`Server is running on  port ${port}`);
// });

const dbConfig = require("./config/database.config.js");

//If we want to use mongoose in different position inside the codes it must be viewed as global mode, that's why we need to set mongoose as :
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });


  const todoRoutes = require("./routes/todoRoute.js");
  const activeTasksRoutes = require("./routes/activeTasksRoute.js");
  const completedTasksRoutes = require("./routes/completedTasksRoute.js");
  
//Route
app.use("/api/todos", todoRoutes);
app.use("/api/activeTasks", activeTasksRoutes);
app.use("/api/completedTasks", completedTasksRoutes);

