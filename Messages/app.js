const http = require('http');
const express = require('express');
const app = express()
const server = http.createServer(app)
const socket = require('socket.io');
const io = socket(server)
const port = process.env.PORT || 3000;
const formatMessage = require('./utils/messages')
const {userJoin, getCurrentUser, userLeave, getRoomUsers} = require('./utils/users')
const botname = 'ChatCord bot'

app.use(express.static('Public'))

io.on('connection', socket => {
  socket.on('joinRoom', ({ username, room }) => {
    const user = userJoin(socket.id, username, room)
    socket.join(user.room)

      // welcome a current user
      socket.emit('message', formatMessage(botname, 'Welcome to chatcord'))
      // broadcast when a user connects
    socket.broadcast.to(user.room).emit('message', formatMessage(botname, `${user.username} has joined the chat`))
    // SEND users and room info
    io.to(user.room).emit('roomusers', {
      room: user.room,
      users: getRoomUsers(user.room)
    })
  })
  // listen on chat message
  socket.on('chat', msg => {
    const user = getCurrentUser(socket.id)
    // sending the message back to client
    io.to(user.room).emit('message', formatMessage(user.username, msg))
  })
  // when there is a disconnect
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit('message', formatMessage(botname, `${user.username} has left the chat`))
    }
    io.to(user.room).emit('roomusers', {
      room: user.room,
      users: getRoomUsers(user.room)
    })
  })
})

server.listen(port, () => {
  console.log(`Server runing on ports: ${port}`)
})
