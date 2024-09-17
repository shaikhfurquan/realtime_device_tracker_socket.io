const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config()

// initializing socket.io that runs on the http server so we need http server
const socketio = require('socket.io')
const http = require('http')

const app = express()

// making the server using the http
const server = http.createServer(app)
// calling the socketio function
const io = socketio(server)


// view engine setup (ejs)
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


// Listen for a connection from the client
io.on('connection', function (socket) {
    // accepting the location from client
    socket.on("send-location", function (data) {
        // sending back to the more clients
        io.emit("receive-location", { id: socket.id, ...data })
        // console.log(data); //{ latitude: 18.5204303, longitude: 73.8567437 }
    })
    console.log('A new client connected');
    // Handle a disconnect
    socket.on("disconnect", function () {
        io.emit("user-disconnected", socket.id)
    })
});

app.get("/", (req, res) => {
    res.render("index")
})

server.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})