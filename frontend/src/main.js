import { createApp } from "vue";
import BootstrapVue3 from "bootstrap-vue-3";
import App from "./App.vue";
import router from "./router/router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import store from "./store/store";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const app = createApp(App);
app.use(BootstrapVue3);
app.use(router);
app.use(store);
app.mount("#app");
