var express = require("express");
var loglevel = require("loglevel");
var tracer = require("tracer").console();
const pino = require("pino")();
var morgan = require("morgan");
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf, simple } = format;
var bunyan = require("bunyan").createLogger({ name: "myapp" });

var app = express();

app.use(morgan());

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

const winston = createLogger({
    format: format.combine(timestamp(), myFormat),
    transports: [new transports.Console()],
});

app.get("/", function (req, res) {
    console.log("Loglevel");
    loglevel.error("hello world");
    console.log("");

    console.log("Pino");
    pino.info("hello world");
    console.log("");

    console.log("tracer");
    tracer.info("hello world");
    console.log("");

    console.log("winston");
    winston.log("hello world", "winston");
    console.log("");

    console.log("bunyan");
    bunyan.info("hello world");
    console.log("");

    res.send("hello world");
});

app.listen(3000);
