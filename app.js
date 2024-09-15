const express = require('express')
const dotenv = require('dotenv')

// initializing socket.io that runs on the http server so we need http server
const socketio = require('socket.io')
const http = require('http')
const path = require('path')
dotenv.config()

const app = express()

// making the server using the http
const server = http.createServer(app)
// calling the socketio function
const io = socketio(server)

app.get("/" , (req,res)=>{ 
    // res.render("index")
    res.send("index")
})

app.listen(process.env.PORT , ()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})