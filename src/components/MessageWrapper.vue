<template>
  <div class="message-wrapper">
    <message-bubble :chatbotThread="chatbotThread"></message-bubble>
    <button-list :chatbotThread="chatbotThread"></button-list>
  </div>
</template>

<script>
import MessageBubble from './MessageBubble.vue';
import ButtonList from './ButtonList.vue';
export default {
  components: { MessageBubble, ButtonList },
  name: 'message-wrapper',
  props: {
    chatbotThread: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .message-wrapper {
    display: block;
    text-align: left;
  }
</style>
