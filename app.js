//Express
const express = require("express");
const app = express();
//EJS setup
app.set("view engine", "ejs");
//Body-Parser setup
app.use(express.urlencoded());
//Static files setup
app.use(express.static("Public"));



const express = require(express);
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded());

