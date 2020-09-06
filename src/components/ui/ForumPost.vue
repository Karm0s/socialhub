<template>
  <v-card elevation="3" dark class="mb-2 mx-auto px-4" min-height="200px">
      <v-container fluid>
        <v-row>
          <v-cols>
            <div class="overline mb-4">{{ username }}</div>
          </v-cols>
        </v-row>
        <v-row>
          <v-cols>
            <div class="px-5 pb-2 post-message">{{ message }}</div>
          </v-cols>
        </v-row>

        <v-spacer ></v-spacer>

        <v-row justify="end">
          <v-cols>
            <div class="text-right grey--text">{{ publish_date }}</div>
          </v-cols>
        </v-row>
      </v-container>
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

<style scoped>
.post-message{
  min-height: 150px;
}
</style>
