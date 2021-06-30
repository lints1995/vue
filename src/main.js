import Vue from "vue";
import App from "./App.vue";
import router from "./c-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Notice from "@/components/c-notice";
Vue.use(ElementUI);
Vue.use(Notice);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
