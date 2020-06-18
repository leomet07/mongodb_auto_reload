const express = require("express");
const router = express.Router();
var db = require("../db");


function message_written() {
    const index = require("../index");
    console.log("Index: ", index);
    const subscribers = index.subscribers;



    for (subscriber of subscribers) {
        console.log("\n\n" + subscriber + " \n\n ");
        index.send_data(subscriber);
    }

}

// get a list of ninjas from db
router.get("/ninjas", function (req, res, next) {
    res.send({
        type: "GET",
    });
});

// add a new nija to db
router.post("/post", function (req, res, next) {
    console.log(req.body);
    db.write_message(req.body.text);
    message_written();
    res.send({
        type: "POST",
        value: req.body,
    });
});

// update a ninja in the db
router.put("/ninjas/:id", function (req, res, next) {
    res.send({
        type: "PUT",
    });
});

router.delete("/ninjas/:id", function (req, res, next) {
    res.send({
        type: "DELETE",
    });
});

module.exports = router;