<template>
  <div class="message-bubble">
    <div v-bind:class="'message-bubble-' + chatbotThread.source">
      <div v-bind:class="chatbotThread.source">
        <span v-if="chatbotThread.source === 'user'">Input {{ chatbotThread.message }}</span>
        <span v-else>{{ chatbotThread.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// chatbotThread = { 
//   source: user || server,
//   val: ''
// }
export default {
  name: 'chat-bot',
  props: {
    chatbotThread: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .message-bubble {
    .message-bubble-user {
      text-align: left;
    }
    .message-bubble-server {
      text-align: right;
    }
    .user {
      padding: 14px 19px;
      background: #6f7cac;
      display: inline-block;
      border-radius: 16px;
      border: 1px solid #ddd4d4;
      min-width: 50%;
      max-width: 70%;
      text-align: left;
    }
    .server {
      padding: 14px 19px;
      background: #709470;
      display: inline-block;
      border-radius: 16px;
      border: 1px solid #ddd4d4;
      min-width: 50%;
      max-width: 70%;
      text-align: left;
    }
  }
</style>
