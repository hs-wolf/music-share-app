import { RouteRecordRaw } from "vue-router";
const Manage = () => import("@/views/custom/Manage.vue");

const routes: Array<RouteRecordRaw> = [];

routes.push(
  ...[
    {
      name: "manage",
      path: "/manage",
      meta: {
        requiresAuth: true,
      },
      component: Manage,
    },
  ]
);

export default routes;
