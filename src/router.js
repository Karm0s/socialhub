import Vue from "vue";
import Router from "vue-router";

// routes
import AuthPage from "./pages/AuthPage.vue";
import ForumPage from "./pages/ForumPage.vue";

import store from "./store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: AuthPage,
    },
    {
      path: "/",
      alias: "/forum",
      name: "forum",
      component: ForumPage,
      beforeEnter: (to, from, next) => {
        if (!store.getters.isAuthenticated) next({ name: "auth" });
        else next();
      },
    },
  ],
});

export default router;
