javascript:
var q = document.createElement('script');
q.src = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.0/socket.io.js';
document.body.appendChild(q);
// ENTER, THEN PASTE THIS IN 
javascript:
var socket = io.connect('https://evening-wave-36315.herokuapp.com/');
socket.emit('apiMsg', prompt('What is your nickname?') || "this user failed to put a name", prompt('What is your message') || "this user failed to put a message");
socket.on('good', function(){
    alert("Message was sent");
});
