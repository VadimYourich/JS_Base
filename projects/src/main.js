import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createHead } from "@vueuse/head";

import "./assets/styles/style.scss";

createApp(App).use(store).use(router).use(createHead()).mount("#app");
