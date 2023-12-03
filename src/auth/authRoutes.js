import { createRouter, createWebHistory } from "vue-router";
import LogIn from "./pages/login/LogIn.vue";

const routes = [
  //array of objects
  {
    path: "/login",
    name: "login",
    component: LogIn,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
