<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="12" md="10">
        <v-card elevation="0" class="mb-2">
          <v-card-title class="overline "> <h2>Write a Post</h2> </v-card-title>
          <v-list-item-content class="mx-5">
            <v-form v-model="valid" lazy-validation>
              <v-textarea
                color="black"
                class="mb-1"
                label="Content"
                v-model="content"
                :rules="contentRules"
                multiline
                required
              ></v-textarea>
              <v-btn
                color="black"
                width="100"
                :disabled="!valid"
                @click="addPost"
                class="float-right white--text"
              >
                <div v-if="!posting">
                  Post
                </div>
                <v-progress-circular size="25" width="3" v-else indeterminate>
                </v-progress-circular>
              </v-btn>
            </v-form>
          </v-list-item-content>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddPost",
  data() {
    return {
      posting: false,
      content: "",
      contentRules: [(v) => !!v || "Content can't be left empty!"],
    };
  },
  methods: {
    ...mapActions(["createPost", "loadPosts"]),
    resetForm() {
      this.content = "";
    },
    addPost() {
      this.posting = true;
      this.createPost(this.content).then(() => {
        this.loadPosts();
        this.resetForm();
        this.posting = false;
      });
    },
  },
};
</script>

<style></style>
