<template>
<v-main>
  <HeaderComponent/>
  <ChatArea/>
</v-main>
</template>

<script>
import HeaderComponent from "../components/layout/HeaderComponent";
import ChatArea from "../components/layout/ChatArea";

export default {
  name: 'ChatPage',
  components: {
    HeaderComponent,
    ChatArea
  },
};
</script>

<style></style>
