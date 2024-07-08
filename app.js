const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const port = 3000;
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is Listening on port ${port} `));
  } catch (error) {
    console.log(error);
  }
};

start();
