const express = require("express");
const mysql = require("mysql");
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./config/dbConnection.js");
const dotenv = require("dotenv").config();

connectDb();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
