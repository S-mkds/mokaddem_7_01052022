import { createRouter, createWebHistory } from "vue-router";

import Login from "../pages/Login.vue";
import signIn from "../pages/signIn.vue";
import Forum from "../pages/Forum.vue";
import contact from "../pages/Contact.vue";

const routes = [
  { path: "/fil-actu", component: Forum },
  { path: "/", component: Login },
  { path: "/signIn", component: signIn },
  { path: "/contact", component: contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
