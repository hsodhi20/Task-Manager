const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const port = process.env.PORT || 3000;

const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middle-ware/not-found");
const errorHandlerMiddleware = require("./middle-ware/error-handler");

app.use(express.json());
app.use(express.static("./public"));
app.use(errorHandlerMiddleware);
app.use("/api/v1/tasks", tasks);
app.use(notFound);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is Listening on port ${port} `));
  } catch (error) {
    console.log(error);
  }
};

start();
