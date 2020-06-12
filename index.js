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
var connect = require("./db")
const api_routes = require("./routes/api");
const bodyParser = require("body-parser");

app.use(express.static("public"));


app.use(bodyParser.json());

// initiliaze routes
app.use("/api", api_routes);
io.on("connection", async function (client) {
    console.log("Client connected...");

    client.on("join", async function (data) {
        console.log(data)
        let text = await connect()
        client.emit("data", text);
    });
});
server.listen(4200);