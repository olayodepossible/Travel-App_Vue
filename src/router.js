import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/brazil",
      name: "brazil",
      component: () =>
        //Lazy Loading
        import(/* webpackChunkName: "brazil" */ "./views/Brazil.vue"),
    },
    {
      path: "/hawai",
      name: "hawai",
      component: () =>
        import(/* webpackChunkName: "hawai" */ "./views/Hawai.vue"),
    },
    {
      path: "/panama",
      name: "panama",
      component: () =>
        import(/* webpackChunkName: "panama" */ "./views/Panama.vue"),
    },
    {
      path: "/jamaica",
      name: "jamaica",
      component: () =>
        import(/* webpackChunkName: "jamaica" */ "./views/Jamaica.vue"),
    },
    {
      path: "/details/:id",
      name: "DestinationDetails",
      component: () =>
        import(
          /* webpackChunkName: "DestinationDetails" */ "./views/DestinationDetails"
        ),
    },
  ],
});
