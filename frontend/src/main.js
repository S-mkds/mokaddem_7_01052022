import { createApp } from "vue";
import BootstrapVue3 from "bootstrap-vue-3";
import App from "./App.vue";
import router from "./router/router";
import "bootstrap/dist/css/bootstrap.css";
import store from "./store/store";

const app = createApp(App);
app.use(BootstrapVue3);
app.use(router);
app.use(store);
app.mount("#app");
