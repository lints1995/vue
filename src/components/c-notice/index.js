import create from "./create.js";
import Notice from "./notice.vue";

// 插件实现，需要实现install方式，使用时使用Vue.use()方法注册使用
export default {
  install(Vue) {
    Vue.prototype.$notice = function(props) {
      return create(Notice, props);
    };
  },
};
