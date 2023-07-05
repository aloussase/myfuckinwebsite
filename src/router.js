import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./components/Home.vue";
import Post from "./components/Post.vue";
import EditPost from "./components/EditPost.vue";
import Login from "./components/Login.vue";

function ensureLoggedIn(authService) {
  return function (_to, _from) {
    if (authService.user === null) {
      return "/login";
    }
    return true;
  };
}

export default function router(authService) {
  if (!authService) {
    throw new Error(`authService is ${typeof authService}`);
  }

  return createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: "/", component: Home },
      { path: "/login", component: Login },
      { path: "/posts/:id", component: Post, props: true },
      {
        path: "/posts/:id/edit",
        component: EditPost,
        props: true,
        beforeEnter: ensureLoggedIn(authService),
      },
    ],
  });
}
