import Vue from "vue";
import App from "./App.vue";
import router from "./cRouter";
import store from "@/cStore";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Notice from "@/components/c-notice";
Vue.use(ElementUI);
Vue.use(Notice);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app");
