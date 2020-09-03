<template>
  <v-card elevation="3" dark class="mb-2">
    <v-list-item two-line>
      <v-list-item-content>
        <div class="overline mb-2">{{ username }}</div>
        <div class="px-5 pb-2">{{ message }}</div>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "ChatMessage",
  props: ["username", "message"],
};
</script>

<style></style>
