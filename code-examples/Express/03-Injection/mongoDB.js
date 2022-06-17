const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const mongoSanitize = require("express-mongo-sanitize");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
// Recommended usage, disabled due to demonstration purposes 
//app.use(mongoSanitize)

// DB setup
const url = "mongodb://localhost:27017";
const dbName = "Book";
let collection;

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    collection = db.collection("Books");
});


// Post Request --> Body as JSON: { 	"title" : {"$ne": ""}}
app.post("/operatorInjectionSanitized", function (req, res) {
    mongoSanitize.sanitize(req.body); //should rather be app.use(mongoSanitize());
    let title = req.body.title;
    collection.find({ title: title }).toArray(function (err, docs) {
        console.log(docs);
        res.send(docs);
    });
});

app.post("/operatorInjectionUnsanitized", function (req, res) {
    let title = req.body.title;
    collection.find({ title: title }).toArray(function (err, docs) {
        console.log(docs);
        res.send(docs);
    });
});

// Post Request --> Body as JSON: {"title" : " ' || 'a'=='a"}
app.put("/whereInjectionUnsanitized", function (req, res) {
    let title = req.body.title;
    let unsanitizedQuery = { $where: `this.title == '${title}'` };

    collection.find(unsanitizedQuery).toArray(function (err, docs) {
        console.log(docs);
        res.send(docs);
    });
});

// Still returns all, because find receives empty query and therefore returns all
app.post("/whereInjectionSanitized", function (req, res) {
    mongoSanitize.sanitize(req.body); //should rather be app.use(mongoSanitize());  let title = req.body.title
    let sanitizedQuery = { $where: `this.title == '${title}'` };
    console.log(sanitizedQuery);
    collection.find(sanitizedQuery).toArray(function (err, docs) {
        console.log(docs);
        res.send(docs);
    });
});

app.listen(3000, function () {
    console.log("listening on 3000");
});
