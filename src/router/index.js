import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/pages"),
  },
  {
    path: "/drag-table",
    component: () => import("@/pages/drag-table"),
  },
  {
    path: "/form",
    component: () => import("@/pages/form"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
