<template>
  <div class="chatbot-wrapper">
    <ul>
      <li v-for="thread in chatbotThreads" :key="thread.val" v-bind:class="thread.source + '-li'">
        <message-wrapper v-bind:chatbotThread="thread"></message-wrapper>
      </li>
    </ul>
  </div>
</template>

<script>
import MessageWrapper from './MessageWrapper.vue'
export default {
  components: { MessageWrapper },
  name: 'chat-bot',
  props: {
    chatbotThreads: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chatbot-wrapper {
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    color: #ffffff;
    margin: 10px;
    display: block;
  }
  .user-li {
    text-align: left;
  }
  .server-li {
    text-align: right;
  }
}
</style>
