import Vue from "vue";
import Router from "vue-router";

// routes
import AuthPage from "./pages/AuthPage.vue";
import ChatPage from "./pages/ChatPage.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "auth",
      component: AuthPage
    },
    {
      path: "/chat",
      name: "chat",
      component: ChatPage
    }
  ]
});
