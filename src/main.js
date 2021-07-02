import Vue from "vue";
import App from "./App.vue";
import router from "./crouter";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Notice from "@/components/c-notice";
import store from "@/cstore";
Vue.use(ElementUI);
Vue.use(Notice);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
