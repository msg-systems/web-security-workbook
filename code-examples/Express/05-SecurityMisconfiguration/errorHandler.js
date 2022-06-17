var express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
    // Promise that sometimes fails
    const myPromise = new Promise((resolve, reject) => {
        var random = Math.floor(Math.random() * Math.floor(100));
        console.log(random);
        if (50 < random) {
            resolve("Promise is resolved successfully.");
        } else {
            reject("Promise is rejected");
        }
    });

    myPromise
        .then(() => {
            res.send("Hello World");
        })
        .catch(next);
});

// Global error handler
app.use((error, req, res, next) => {
    return res.status(500).send(error);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
