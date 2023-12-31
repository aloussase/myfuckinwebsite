import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./components/Home.vue";
import Post from "./components/Post.vue";
import EditPost from "./components/EditPost.vue";
import CreatePost from "./components/CreatePost.vue";
import Login from "./components/Login.vue";

function ensureLoggedIn(authService) {
  return function (to, _from) {
    if (authService.user === null) {
      localStorage.setItem("route.to", JSON.stringify(to));
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
      { path: "/posts/new", component: CreatePost },
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
