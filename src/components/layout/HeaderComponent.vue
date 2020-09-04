<template>
  <v-app-bar dark class="px-3">
    <v-toolbar-title>
      SocialHub Forum
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="logOut">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "HeaderComponent",
  methods: {
    ...mapActions(['signOff']),
    logOut(){
      this.signOff().then(() => {
        this.$router.push({name: 'auth'});
      });
    }
  }
};
</script>

<style></style>
