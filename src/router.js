import Vue from "vue";
import Router from "vue-router";

// routes
import AuthPage from "./pages/AuthPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "auth",
      component: AuthPage
    }
  ]
});
