<template>
  <v-container>
    hello
    <ChatMessage/>
  </v-container>
</template>

<script>
import ChatMessage from "../ui/ChatMessage";

export default {
  name: "ChatArea",
  components: {
    ChatMessage
  }
};
</script>

<style></style>
