<template>
  <div>
    <ul>
      <li v-for="thread in chatbotThread" :key="thread.val" v-bind:class="thread.source + '-li'">
        <div v-bind:class="thread.source">
          <span v-if="thread.source === 'user'">Input {{ thread.val }}</span>
          <span v-else>{{ thread.val }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'chat-bot',
  props: {
    chatbotThread: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  .user {
    padding: 20px 20px;
    background: #cc6c6c;
    display: inline-block;
    margin-left: auto;
    min-width: 50%;
    max-width: 70%;
    border-radius: 39px;
    border: 1px solid #ddd4d4;
    min-height: 54px;
    text-align: left;
  }
  .server {
    padding: 20px 20px;
    background: #709470;
    display: inline-block;
    margin-left: auto;
    min-width: 50%;
    max-width: 70%;
    border-radius: 39px;
    border: 1px solid #ddd4d4;
    min-height: 54px;
    text-align: left;
  }
</style>
