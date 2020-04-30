import Vue from "vue";
import VueRouter from "vue-router";
//import Details from "../views/Details.vue";
//import Home from "../views/Home.vue";
import AllShows from "../components/AllShows.vue";
import ShowDetails from "../components/ShowDetails.vue";
Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "all-shows",
    component: AllShows
  },
  {
    path: "/details/:id",
    name: "show-details",
    component: ShowDetails
  }
];
const router = new VueRouter({
  mode: "history",
  routes
});

export default router;