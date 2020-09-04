<template>
  <v-container>
    <v-card elevation="0" dark class="mb-2">
      <v-card-title>Write a Post</v-card-title>
      <v-list-item-content class="mx-5">
        <v-form v-model="valid" lazy-validation>
          <v-textarea
            class="mb-1"
            label="Content"
            v-model="content"
            :rules="contentRules"
            multiline
            required
          ></v-textarea>
          <v-btn color="primary" :disabled="!valid" @click="addPost" class="float-right">
            Post
          </v-btn>
        </v-form>
      </v-list-item-content>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "AddPost",
  data(){
    return {
      valid: true,
      content: "",
      contentRules: [
        v => !!v || "Content can't be left empty!"
      ],
    };
  },
  methods: {
    ...mapActions(['createPost']),
    resetForm(){
      this.content = '';
    },
    addPost(){
      this.createPost(this.content).then(() => {
        console.log("reload posts now, later of course.");
        this.resetForm();
      });
    }
  }
};
</script>

<style></style>
