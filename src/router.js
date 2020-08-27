import Vue from "vue";
import Router from "vue-router";

// routes
import LoginPage from "./pages/LoginPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginPage
    }
  ]
});
