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
      if (from.name != "home") {
        console.log("from.name", from.name);
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
        next();
      }
      next();
      return false;
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
router.beforeEach((to) => {
  console.log('imma running ',to.name)
  // if (to.name !== 'home') { 
  //   console.log('shit login ',to.name)
  // return '/login'
  // }
  // else {
  //   console.log("nothing at all")
  // }
})
export default router;
