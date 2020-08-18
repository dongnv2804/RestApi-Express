var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
const cartRouter = require("./routes/cartRoutes");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("keymaster"));
app.use(express.static(path.join(__dirname, "public")));

//session
const session = require("express-session");
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "keythegioi",
    cookie: { maxAge: 60000 * 600 },
  })
);
// connect mongodb
// 'mongodb://localhost:27017/tingmetest'
const urlPath = "mongodb://localhost:27017/shop";
mongoose.connect(
  process.env.MONGO_URL || urlPath,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => {
    console.log("connected");
  }
);
// config to frontend can call api
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/products", indexRouter);
app.use("/carts", cartRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
