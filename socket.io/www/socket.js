const socket = io.connect();
const button = document.getElementById('send-btn');
button.onclick = () => {
    socket.emit('foo','hello');
    console.log(button)
}