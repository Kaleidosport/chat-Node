 //login
 socket.on('new user', (data) => { 
    socket.nickname = data;
    nicknames.push(socket.nickname);
    console.log(nicknames);
    upDateNicknames();           
});

function upDateNicknames() {
    io.sockets.emit('usernames', nicknames);
};