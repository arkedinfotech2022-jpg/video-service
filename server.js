const express = require('express');
const { PeerServer } = require('peer');

const app = express();
const PORT = process.env.PORT || 3000;

// Create PeerJS server - attaches to the Express app
const peerServer = PeerServer({
  port: PORT,
  path: '/peerjs',
  key: 'seestatus'
});

// Test route
app.get('/', (req, res) => {
  res.send('PeerJS Server is running!');
});

console.log(`Server running on port ${PORT}`);
console.log(`PeerJS available at: /peerjs`);
