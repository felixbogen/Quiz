const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;
let server;

//middleware config

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));
app.use(bodyParser.json({ limit: "20mb" }));

app.use('/api/users/', userRoutes)

mongoose
  .connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database Connection Established 😀"))
  .catch((er) => console.log("Error Connection to mongoose instance", er));

server = app.listen(PORT, () => {
  console.log(`node server listening on port ${PORT}`);
});
