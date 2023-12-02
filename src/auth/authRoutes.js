import { createRouter, createWebHistory } from "vue-router";
import logIn from "./pages/login/logIn.vue";
const routes = [
  //array of objects
  {
    path: "/login",
    name: "login",
    component: logIn,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
