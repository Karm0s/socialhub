<template>
  <v-container>
    <v-list class="mb-2">
      <div v-for="message in getPosts" :key="message.id">
        <ForumPost :username="message.username" :message="message.content"/>
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
  created(){
    this.loadPosts();
  },
  computed: mapGetters(['getPosts']),
  components: {
    ForumPost
  },
  methods: mapActions(['loadPosts'])
};
</script>

<style>
.v-list{
  overflow-y:auto;
  max-height: 75vh;
}
</style>
