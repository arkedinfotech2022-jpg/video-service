const { PeerServer } = require('peer');
const PORT = process.env.PORT || 3000;

PeerServer({ port: PORT, path: '/peerjs', key: 'seestatus' });
console.log(`PeerJS running on port ${PORT}`);
