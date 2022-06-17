const express = require("express");
const helmet = require("helmet");
const nocache = require("nocache");
var app = express();
app.use(helmet());
app.use(nocache());

app.get("/", function (req, res) {
    res.send("hello world");
});

app.listen(3000, () => {console.log("Listening on port 3000")});
