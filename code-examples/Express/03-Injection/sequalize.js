var express = require("express");
const { Sequelize } = require("sequelize");

var app = express();

const sequelize = new Sequelize("newchema", "root", "password", {
    dialect: "mysql",
    host: "localhost",
});
sequelize.authenticate();

const Book = sequelize.define(
    "Book",
    {
        title: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
    },
    { freezeTableName: true, timestamps: false, createdAt: false }
);

app.get("/normal", function (req, res, next) {
    Book.findAll({ where: { title: "' OR 1=1 --" } }).then((result) => {
        res.send(result);
    });
});

app.get("/raw", function (req, res, next) {
    let input = "' OR 1=1";
    sequelize
        .query("SELECT * FROM user WHERE title='" + input)
        .then((result) => {
            res.send(result);
        });
});

app.get("/rawSecure", function (req, res, next) {
    let input = "' OR 1=1";
    sequelize
        .query("SELECT * FROM user WHERE title= $1", { bind: [input] })
        .then((result) => {
            res.send(result);
        });
});

app.listen(3000, function () {
    console.log("listening on 3000");
});
