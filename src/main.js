import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/firestore";

import router from "./router.js";
import Config from "./config.js";
import FirebasePostService from "./services/firebasePostService.js";
import FirebaseAuthService from "./services/firebaseAuthService.js";

const firebaseApp = initializeApp(Config.instance.firebaseConfig);
const authService = new FirebaseAuthService(firebaseApp);

createApp(App)
  .provide("services.posts", new FirebasePostService(firebaseApp))
  .provide("services.auth", authService)
  .use(router(authService))
  .mount("#app");
