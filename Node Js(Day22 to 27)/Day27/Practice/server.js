let express = require('express');
const res = require('express/lib/response');
let app = express();
let http = require('http').Server(app);
let socketio = require('socket.io');
let io = socketio(http);
app.get("/",(req, res)=>{
    res.sendFile(__dirname +'/index.html');

})
io.on('connection', (socket)=>{
    console.log('Connected...')
    socket.on("msg",(data)=>{
        console.log(`client send ${data}`)
    });
    socket.emit('obj','hello i am server');
});
http.listen(3000, ()=>{
    console.log('server is running on port 3000')
});