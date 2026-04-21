const { PeerServer } = require('peer');

const PORT = process.env.PORT || 3000;

const server = PeerServer({
  port: PORT,
  path: '/peerjs',
  key: 'seestatus'
});

console.log(`PeerJS server running on port ${PORT}`);
console.log(`Path: /peerjs`);
console.log(`Key: seestatus`);
