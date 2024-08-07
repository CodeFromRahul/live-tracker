const express = require("express")
const app = express()
const http = require("http")
const socketio = require("socket.io")
const server = http.createServer(app)
const io = socketio(server)
const path = require("path")




app.set("view engine","ejs")
app.use(express.static('public'));


io.on("connection",function(socket){
    socket.on("send-location",function (data){
io.emit("recieve-location",{id:socket.id,...data});
    });
    // console.log("socket")
    })
    

app.get("/",(req,res)=>{
  
res.render("index")
})

server.listen(3000)