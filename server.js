const db = require("./db/connection");
const express = require("express");
const inquirer = require("inquirer");
const cTable = require('console.table');
var https = require('https');

const ask = require("./app");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", apiRoutes);

// Err 404
app.use((req, res) => {
  res.status(404).end();
});

// Starts server after database conn
db.connect((err) => {
  if (err) throw err;
  app.listen(PORT, () => {
  });
});

ask.displayPic();

const run = () => {

ask
  .promptMenu()
  .then((data) => ask.handleQuery(data))
  .then(() => run())
 
};

run();