var socket = io.connect("http://192.168.7.36:4200");
socket.on("connect", function (data) {
    socket.emit("join", "Hello World from client");
});

socket.on("data", function (message) {
    console.log(message);
    document.getElementById("message").innerHTML = JSON.stringify(message);
});
