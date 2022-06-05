import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import signUp from "../views/SignUp.vue";
import Forum from "../views/Forum.vue";
import contact from "../views/Contact.vue";
import Profil from "../views/profil.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/signUp", component: signUp },
  { path: "/forum", component: Forum },
  { path: "/contact", component: contact },
  { path: "/profil", component: Profil },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
