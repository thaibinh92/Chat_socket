var express = require('express');
var app = express();
app.use(express.static("./public"));
app.set('view engine','ejs');
app.set('views','./views');
var server  = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000);

arrUsers=[];

io.on('connection',function(socket){
    console.log('co nguoi ket noi: '+ socket.id);

    // socket.on('disconnect',function(){
    //     console.log(socket.id + 'Ngat ket noi');
    // })
     socket.on('client-send-username',function(data){
         if(arrUsers.indexOf(data)>=0){
             socket.emit('server-send-dki-thatbai');
         }else{
             arrUsers.push(data);
             socket.Username=data;
             socket.emit('server-send-dki-thanhcong',data);
             io.sockets.emit('server-send-danhsach-user', arrUsers)
         }
        // io.sockets.emit('server-send-data',data)
    });

    socket.on('logout',function(){
        arrUsers.splice(
            arrUsers.indexOf(socket.Username),1
        )

        socket.broadcast.emit('server-send-danhsach-user',arrUsers);
        
    });

    socket.on('client-send-message',function(data){
        io.sockets.emit('server-send-message',{username:socket.Username,nd:data})
        
    });

    socket.on('toi-dang-go-chu',function(data){
        var message = socket.Username + 'dang go chu'
        io.sockets.emit('ai-do-dang-go-chu',message);
        
    });
    socket.on('toi-dung-go-chu',function(data){
        io.sockets.emit('ai-do-dung-go-chu');
        
    });

});

app.get('/',function (req, res) {
    res.render('trangchu')
})