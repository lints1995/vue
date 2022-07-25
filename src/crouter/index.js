import Vue from "vue";
import VueRouter from "./VueRouter";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
