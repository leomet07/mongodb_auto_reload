// app.js
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);
var db = require("./db")
const api_routes = require("./routes/api");
const bodyParser = require("body-parser");

app.use(express.static("public"));


app.use(bodyParser.json());

// initiliaze routes
app.use("/api", api_routes);


let subscribers = []
io.on("connection", async function (client) {
    console.log("Client connected...", client.id);
    subscribers.push(client.id)



    client.on("join", async function (data) {
        console.log("Received from client: " + JSON.stringify(data))



        //client.emit("data", text);
        //io.sockets.socket(client.id).emit("data", text)
        send_data(client.id)



    });
});

async function send_data(id) {
    console.log("send_data called")
    text = await db.read()
    io.to(id).emit('data', text)

}
module.exports = {
    subscribers: subscribers,
    send_data: send_data

}

server.listen(4200);