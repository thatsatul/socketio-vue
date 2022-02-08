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
  }

  subscribe(eventName, fn) {
    this.socket.on(eventName, data => {
      fn(data);
    })
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
