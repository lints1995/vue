import Vue from "vue";
import VueRouter from "./VueRouter";
import routes from "@/const/routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

export default router;
