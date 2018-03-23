const path = require("path")
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cohort = require('./routes/cohort');

const app = express();
app.set("view engine", "ejs");

app.use(morgan("dev"));

console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")))

app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: false}));
app.use('/cohort', cohort);

const DOMAIN = "localhost";
const PORT = 3002;

app.listen(PORT, DOMAIN, () => {
  console.log(`ð» Server listenning on http://${DOMAIN}:${PORT}`);
});
