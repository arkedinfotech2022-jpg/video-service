const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();
const PORT = process.env.PORT || 3000;

// Create PeerJS server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
  path: '/peerjs',
  key: 'seestatus'
});

app.use('/peerjs', peerServer);

// Test route
app.get('/', (req, res) => {
  res.send('PeerJS Server is running!');
});

console.log(`PeerJS available at: /peerjs`);
