const express = require("express");
const router = express.Router();

// get a list of ninjas from db
router.get("/ninjas", function (req, res, next) {
    res.send({
        type: "GET"
    })

});

// add a new nija to db
router.post("/ninjas", function (req, res, next) {
    //console.log(req.body);
    res.send({
        type: "POST"
    })


});

// update a ninja in the db
router.put("/ninjas/:id", function (req, res, next) {
    res.send({
        type: "PUT"
    })

});

router.delete("/ninjas/:id", function (req, res, next) {
    res.send({
        type: "DELETE"
    })
});

module.exports = router;