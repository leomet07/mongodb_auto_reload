var socket = io.connect("http://192.168.7.36:4200");
socket.on("connect", function (data) {
    socket.emit("join", "Hello World from client");
});

let global_data = {}
socket.on("data", function (message) {
    console.log(message);
    global_data = message
    document.getElementById("message").innerHTML = JSON.stringify(global_data);
});

socket.on("update", function (message) {
    console.log(message);
    global_data.push(message)
    document.getElementById("message").innerHTML = JSON.stringify(global_data);
});