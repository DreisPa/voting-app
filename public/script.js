const socket = io();

document.getElementById('yesButton').addEventListener('click', () => {
    socket.emit('vote', 'yes');
});

document.getElementById('noButton').addEventListener('click', () => {
    socket.emit('vote', 'no');
});

socket.on('updateVotes', (votes) => {
    document.getElementById('yesVotes').innerText = votes.yes;
    document.getElementById('noVotes').innerText = votes.no;
});

