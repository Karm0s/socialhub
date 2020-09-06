<template>
  <v-container>
    <v-list class="mb-2">
      <div v-for="message in getPosts" :key="message.id">
        <ForumPost :username="message.username" :message="message.content" :created_at="message.created_at"/>
        <v-divider class="my-4"/>
      </div>
    </v-list>
  </v-container>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import ForumPost from "../ui/ForumPost";

export default {
  name: "PostsComponent",
  data(){
    return {};
  },
  created(){
    this.loadPosts();
    this.interval = setInterval(() => this.loadPosts(), 10*1000);
  },
  computed: mapGetters(['getPosts']),
  components: {
    ForumPost
  },
  methods: mapActions(['loadPosts'])
};
</script>

<style>
/* .v-list{
  overflow-y:auto;
  max-height: 75vh;
} */
</style>
