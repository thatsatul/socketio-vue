import { io } from 'socket.io-client';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT, {
      auth: {
        token: 'abc'
      }
    });
    this.socket.on('welcome', data => {
      console.log(data);
    });
  }

  socketEmit(eventName, data) {
    this.socket.emit(eventName, data);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();
