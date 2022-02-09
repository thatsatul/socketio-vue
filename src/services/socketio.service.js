import { io } from 'socket.io-client';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    // this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT, {
    //   auth: {
    //     token: 'abc'
    //   }
    // });
    this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
    this.socket.on('connect', function () {
      console.log("Connected to Socket.io server");
    });
    this.socket.on('connect_error', () => {
      // Write any connection errors to the console 
      console.error('Error connecting socket');
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
