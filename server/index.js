const app = require('express')()
const server = require('http').createServer(app);
const io = require('socket.io')(server, {cors: {origin: 'https://becarealchatfrontend.onrender.com'}})

const PORT = 3001;

io.on('connection', socket => {
    console.log("Usuário Conectado", socket.id);

    socket.on('disconnect', reason => {
        console.log('Usuário desconectado'. socket.id);
    });

    socket.on('set_username', username => {
        //a propriedade date é do socket e permite guardar diversas informações
        socket.data.username = username;
    })

    socket.on('message', text => {
        io.emit('receive_message', {
            text,
            authorId: socket.id,
            author: socket.data.username
        })
    })
})

server.listen(PORT, () => console.log("Server running... "))