<template>
<v-main>
  <HeaderComponent/>
  <PostsComponent/>
</v-main>
</template>

<script>
import HeaderComponent from "../components/layout/HeaderComponent";
import PostsComponent from "../components/layout/PostsComponent";

export default {
  name: 'ForumPage',
  components: {
    HeaderComponent,
    PostsComponent
  },
};
</script>

<style></style>
