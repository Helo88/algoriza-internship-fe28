import { createRouter, createWebHistory } from "vue-router";
import { storeToRefs } from "pinia";
//store
import { useHotelsStore } from '../store.js'
import Layout from "../layout/Layout.vue";
import Home from "../pages/home/Home.vue";
import NotFound from '../pages/extra/NotFound.vue'

 
const Hotels = () => import("../pages/hotels/Hotels.vue");
const Hotel = () => import("../pages/hotelDetails/Hotel.vue");
const Trips = () => import("../pages/trips/Trips.vue");
const Checkout =()=>import("../pages/checkout/Checkout.vue")
import { isUserAuthenticated } from "../../auth/composables.js";


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    beforeEnter: (to, from, next) => {
      //before entering home delte search data
      const hotelsDataStore = useHotelsStore();
      const { searchHotelsData } = storeToRefs(hotelsDataStore);
      const { updatehotelsSearchState } = useHotelsStore();
      if (
        from.name != "home" ||
        from.name != "discover" ||
        from.name != "about" ||
        from.name != "contact" ||
        from.name != "about" ||
        from.name != "activities"
      ) {
        localStorage.removeItem("id");
        localStorage.removeItem("cityName");
        localStorage.removeItem("inDate");
        localStorage.removeItem("outDate");
        localStorage.removeItem("rooms");
        localStorage.removeItem("guests");
        localStorage.removeItem("inDateFormatted");
        localStorage.removeItem("outDateFormatted");
        localStorage.removeItem("page");
        localStorage.removeItem("totalresults");
        updatehotelsSearchState();
      }
      next();
   
    },
  },
  {
    path: "/discover",
    name: "discover",
    component: Home,
  },
  {
    path: "/contact",
    name: "contact",
    component: Home,
  },
  {
    path: "/activities",
    name: "activities",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: Home,
  },
  {
    path: "/hotels",
    name: "hotels",
    component: Hotels,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = isUserAuthenticated();
      // console.log(isAuthenticated)
      if (isAuthenticated === false) {
        localStorage.setItem("destination", to.name);
        //redirect in home and delete it
        next({ name: "login" });
      } else {
        next()
      }
    }
  },
  {
    path: "/hotel/:id/:rate/:count",
    name: "hotel",
    component: Hotel,
    props: true,
  },
  {
    path: "/trips",
    name: "trips",
    component: Trips,
  },
  {
    path: "/checkout/:name/:rate/:count",
    name: "checkout",
    component: Checkout,
    props:true
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach((to) => {
//    //before entering any app page rather than home check 
//     console.log(" kickoff app routes ",to.name);
//       // const isAuthenticated = isUserAuthenticated();
   
//   // if (to.name !== "home") {
//   //   const isAuthenticated = isUserAuthenticated();
//   //      console.log(isAuthenticated);
//   //   // if token doesn't exist or altered -> login
//   //   if (isAuthenticated === false) {
//   //     console.log("get in app ");
//   //     localStorage.setItem("destination", to.name);
//   //     //redirect in home and delete it
//   //     next({ name: "login" });
//   //   }
//   // }
//   //       else {
//   //         next()
//   //       }
// })
export default router;
