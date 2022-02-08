<script>
// see vue-socketio-node in js_scripts
import SocketioService from './services/socketio.service.js';
import Chatbot from './components/Chatbot.vue';

export default {
  name: 'App',
  components: {
    Chatbot
  },
  created() {
    SocketioService.setupSocketConnection();
    SocketioService.subscribe('serverResponse', this.receiveEvent);
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },
  data() {
    return {
      mssgThread: [],
      userInp: '',
      fetchingNewData: false
    };
  },
  methods: {
    sendEvent() {
      this.fetchingNewData = true;
      const newUserThread = {
        mssg: 'From client',
        val: this.userInp,
        source: 'user'
      }
      this.mssgThread.push(newUserThread);
      SocketioService.socketEmit('clientInput', newUserThread);
    },
    receiveEvent(thread) {
      console.log(thread);
      this.fetchingNewData = false;
      this.mssgThread.push(thread);
      console.log('Mssg thread : ', this.mssgThread);
    }
  }
}
</script>
<template>
  <main>
    <div class="chat-section">
      <Chatbot v-bind:chatbotThread="mssgThread"></Chatbot>
    </div>
    <div class="user-bottom">
      <div v-if="fetchingNewData" class="fetchingNewData">Waiting ... </div>
      <input type="text" v-model="userInp" class="userTextField"/>
      <button v-on:click="sendEvent">Send</button>
    </div>
  </main>
</template>

<style>
  body {
    margin: 0;
    box-sizing: border-box;
  }
  #app {
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  main {
    padding: 12px;
    max-width: 480px;
    border: 1px solid #e8e1e1;
    margin: auto;
    background: #f4efef;
    min-height: 600px;
    position: relative;
    min-width: 380px;
  }
  .userTextField {
    display: inline-block;
    width: 76%;
    margin-right: 10px;
    height: 17px;
    border: 1px solid green;
    padding: 10px;
    border-radius: 12px;
  }
  .user-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .fetchingNewData {
    text-align: center;
    margin-bottom: 10px;
  }
  .chat-section {
    max-height: 500px;
    overflow: scroll;
  }
</style>
