<script>
// see vue-socketio-node in js_scripts
import SocketioService from './services/socketio.service.js';

export default {
  name: 'App',
  components: {},
  created() {
    SocketioService.setupSocketConnection();
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
  methods: {
    sendEvent() {
      SocketioService.socketEmit('hello', 'world1');
    }
  }
}
</script>
<template>
  <button v-on:click="sendEvent">Send</button>
</template>
