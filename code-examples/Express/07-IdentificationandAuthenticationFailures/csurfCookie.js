var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var bodyParser = require("body-parser");
var express = require("express");
const app = express();
const port = 3000;

// setup route middlewares
var csrfProtection = csrf({ cookie: { httpOnly: true, secure: true } });
app.use(cookieParser());
app.use(csrfProtection);

app.all("/", function (req, res) {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.send("index");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
