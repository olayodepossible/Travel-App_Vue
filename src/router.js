import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  /*  linkExactActiveClass : "name class name" // to replace the default class from router-link */
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true,
    },
    {
      path: "/destination/:slug",
      name: "DestinationDetails",
      props: true,
      component: () =>
        //Lazy Loading
        import(
          /* webpackChunkName: "DestinationDetails" */ "./views/DestinationDetails"
        ),

      children: [
        {
          path: ":experienceSlug",
          name: "ExperienceDetails",
          props: true,
          component: () =>
            //Lazy Loading
            import(
              /* webpackChunkName: "experienceDetails" */ "./views/ExperienceDetails"
            ),
        },
      ],
    },
  ],
});
