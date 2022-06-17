const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    dbName: "Test",
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {});

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
});

const Book = mongoose.model("Book", bookSchema);

//Post Request --> Body as JSON: {"title" : " ' || 'a'=='a"}
app.post("/whereInjectionUnsanitized", function (req, res) {
    let title = req.body.title;
    let unsanitizedQuery = { $where: `this.title == '${title}'` };

    Book.find(unsanitizedQuery, function (err, docs) {
        console.log(docs);
        res.send(docs);
    });
});

// Post Request --> Body as JSON: { 	"title" : {"$ne": ""}}
app.post("/operatorInjectionUnsanitized", function (req, res) {
    let title = req.body.title;
    Book.find({ title: title }, function (err, docs) {
        console.log(docs);
        res.send(docs);
    });
});

app.listen(3000, function () {
    console.log("listening on 3000");
});
