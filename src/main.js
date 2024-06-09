import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
/* https://v15.vuetifyjs.com/ko/getting-started/quick-start/ */
createApp(App).use(store).use(router).use(Vuetify).mount("#app");
