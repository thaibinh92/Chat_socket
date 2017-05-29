var socket = io('http://localhost:3000');

        socket.on("server-send-dki-thatbai",function(){
           alert('User name bi trung (Dang ky khong thanh cong)')
        });
        socket.on("server-send-dki-thanhcong",function(data){
            $('#currentUser').html(data)
            $("#loginform").hide(2000);
            $("#chatForm").show(1000);
        });
        socket.on("server-send-danhsach-user",function(data){
            $('#boxContent').html('');
           data.forEach(function(element) {
                $('#boxContent').append("<div class='useronline'>"+element+"</div>")
           }, this);
        });
        socket.on("server-send-message",function(data){
            $('#listMessage').append("<div class='ms'>"+data.username+ ": "+ data.nd+ "</div>")
        });
        socket.on("ai-do-dang-go-chu",function(data){
            $('#thongbao').html(data)
        });

         socket.on("ai-do-dung-go-chu",function(data){
            $('#thongbao').html()
        });

        $(document).ready(function(){
            // $("#mrA").on('click',function(){
            //     socket.emit("client-send-data","hello");
            // })
            $("#loginform").show();
            $("#chatForm").hide();

            $('#txtMessage').focusin(function(){
                socket.emit('toi-dang-go-chu');
            })

            $('#txtMessage').focusout(function(){
                socket.emit('toi-dung-go-chu');
            })

            $("#btnRegister").on('click',function(){
                socket.emit('client-send-username',$("#txtUserName").val())
            })

            $("#btnLogout").on('click',function(){
                socket.emit('logout');
                $("#loginform").show(2000);
                $("#chatForm").hide(1000);
            })

            $("#btnSendMessage").on('click',function(){
                socket.emit('client-send-message',$("#txtMessage").val())
            })

        });