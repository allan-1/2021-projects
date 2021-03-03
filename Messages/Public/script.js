const chartForm = document.getElementById('chat-form');
const chatMssg = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users')
// get username and room from URL using qs
const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
})
const socket = io();
// join chatroom
socket.emit('joinRoom', { username, room })

// get room and users 
socket.on('roomusers', ({ room, users }) => {
    outputRoomName(room);
    outputUsers(users)
})

// message from server
socket.on('message', message => {
    outputMessage(message)

    // scroll down on new message
    chatMssg.scrollTop = chatMssg.scrollHeight;
})

// message submit
chartForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // getting the input message
    const msg = e.target.elements.msg.value;
    // emmiting a message to a server
    socket.emit('chat', msg);

    // clear input
    e.target.elements.msg.value = ''
    e.target.elements.msg.focus()
})

// output message to dom
function outputMessage(mssg) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${mssg.username} <span>${mssg.time}</span></p>
            <p class="text">
            ${mssg.text}
            </p>`
    document.querySelector('.chat-messages').appendChild(div)
}

// add roomname to dom
function outputRoomName(room) {
    roomName.innerText = room
}
// adds userlist to dom
function outputUsers(users) {
    userList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
    `
}