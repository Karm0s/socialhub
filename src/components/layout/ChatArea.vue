<template>
  <v-container>
    <v-list class="mb-2">
      <div v-for="message in messages" :key="message.id">
        <ChatMessage :username="message.username" :message="message.content"/>
      </div>
    </v-list>
  </v-container>
</template>

<script>
import ChatMessage from "../ui/ChatMessage";

export default {
  name: "ChatArea",
  data(){
    return {
      messages: [
        {
          id: 0,
          username: 'Karm0s',
          content: 'lorem'
        },
        {
          id: 1,
          username: 'Sof',
          content: 'Hello Man'
        },
        {
          id: 2,
          username: 'Karm0s',
          content: 'Zbiq'
        },
      ]
    }
  },
  components: {
    ChatMessage
  }
};
</script>

<style>
.v-list{
  overflow-y:auto;
  max-height: 75vh;
}
</style>
