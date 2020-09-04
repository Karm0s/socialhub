<template>
<v-main>
  <HeaderComponent/>
  <PostsComponent/>
  <v-divider></v-divider>
  <AddPost/>
</v-main>
</template>

<script>
import HeaderComponent from "../components/layout/HeaderComponent";
import PostsComponent from "../components/layout/PostsComponent";
import AddPost from "../components/layout/AddPost";

export default {
  name: 'ForumPage',
  components: {
    HeaderComponent,
    PostsComponent,
    AddPost
  },
};
</script>

<style></style>
