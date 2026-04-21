const express = require('express');
const { PeerServer } = require('peer');

const app = express();
const PORT = process.env.PORT || 3000;

// Create PeerJS server
const peerServer = PeerServer({
  port: PORT,
  path: '/peerjs',
  key: 'seestatus'
});

// Add a test route
app.get('/', (req, res) => {
  res.send('PeerJS Server is running!');
});

app.get('/peerjs', (req, res) => {
  res.send('PeerJS endpoint is active');
});

console.log(`Server running on port ${PORT}`);
