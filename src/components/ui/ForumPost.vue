<template>
  <v-card elevation="3" dark class="mb-2">
    <v-list-item two-line>
      <v-list-item-content>
        <div class="overline mb-2">{{ username }}</div>
        <div class="px-5 pb-2">{{ message }}</div>
        <div class="text-right grey--text">{{ publish_date }}</div>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "ForumPost",
  props: ["username", "message", "created_at"],
  computed: {
    publish_date(){
      let datetime = new Date(this.created_at);
      let formatter = new Intl.DateTimeFormat('fr-fr', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        fractionalSecondDigits: 3,
        hour12: true,
        timeZone: 'UTC'
      });
      console.log(formatter.format(datetime));
      return formatter.format(datetime);
    } 
  },
};
</script>

<style></style>
