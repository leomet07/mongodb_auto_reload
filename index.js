/*
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/express_mongo_ninja', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.Promise = global.Promise


Ninja.find({}).then(function (ninjas) {
    res.send(ninjas)
})
*/



// app.js
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);
let connect = require("./db")



app.use(express.static("public"));

io.on("connection", async function (client) {
    console.log("Client connected...");

    client.on("join", async function (data) {
        console.log(data)
        let text = await connect()
        client.emit("data", text);
    });
});
server.listen(4200);