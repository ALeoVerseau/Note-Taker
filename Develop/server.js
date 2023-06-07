const express = require("express");
const path = require("path");
const fs = require("fs");
const indexRoutes = require("./routes/indexRoutes")
const apiRoutes = require("./routes/apiRoutes")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use("/", indexRoutes);
app.use("/api", apiRoutes);




app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
