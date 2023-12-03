import { createRouter, createWebHistory } from "vue-router";
import appRoutes from "./app/routes/appRoutes.js";
import authRoutes from "./auth/authRoutes.js";
import Layout from "./app/layout/Layout.vue";
import { isUserAuthenticated } from "./auth/composables.js";

const LogIn = () => import("./auth/pages/login/LogIn.vue");
const NotFound = () => import("./app/pages/extra/NotFound.vue");
console.log(appRoutes.options.routes);


const routes = [
  {
    //before navigate to any router rather than home check token and auth
    path: "/",
    component: Layout,
    name: Layout,
    children: appRoutes.options.routes,
    beforeEnter: (to, from, next) => {
   //before entering any app page rather than home check 
      const isAuthenticated = isUserAuthenticated();
      if (to.name !== "home") {
        // if token doesn't exist or altered -> login
        if (isAuthenticated === false) {
          localStorage.setItem("destination", to.name);
          //redirect in home and delete it
          next({ name: "login" });
        
        } else {
          console.log("user autheticated ");
  
        }
      } else {
        // console.log("befor each displayz home route");
      }
      next();
    },

    //children: appRoutes,
  },
  {
    path: "/login",
    component: LogIn,
    name: LogIn,
    children: authRoutes.options.routes,
    beforeEnter: ((to, from, next) => {
      const isAuthenticated = isUserAuthenticated();
      if (isAuthenticated) {
        // console.log(isAuthenticated)
       next({ name: "home" });
      }
       next()
    })
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to,from,savedPosition) {
    return savedPosition || {top:0 ,behavior:'smooth'}
  }
});

export default router;
