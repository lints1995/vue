import View from "./view";
import Link from "./link";

let Vue;

class VueRouter {
  constructor(options) {
    this.$options = options;
    // defineReactive该方法为vue提供的工具方法，目的是让current具备和页面响应式，
    // 只要current值发生改变render函数就会重新执行
    // 初始化时赋值为首页路由
    Vue.util.defineReactive(this, "current", this.getCurrentRouter());
    // "history" 或者 "hash"
    //  监听路由的变化，来加载不同的页面
    window.addEventListener("hashchange", this.setCurrentRouter.bind(this));
    window.addEventListener("load", this.setCurrentRouter.bind(this)); // 解决刷新后再重新赋值路由
    // window.addEventListener("popstate", function(event) {
    //   console.log("history->", event);
    // });
    //创建路由映射表,不通过遍历routes查找组件
    this.routerMap = {};
    this.$options.routes.map((el) => {
      this.routerMap[el.path] = el.component;
    });
  }
  getCurrentRouter() {
    return window.location.hash.slice(1);
  }
  setCurrentRouter() {
    this.current = !this.getCurrentRouter() ? "/" : this.getCurrentRouter();
  }
}

VueRouter.install = function(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      // 通过混入的方式使用组件的生命周期函数
      if (this.$options.router) {
        //  只有跟节点才有传入的router，并实现全局访问router的挂载
        Vue.prototype.$router = this.$options.router;
      }
    }
  });
  Vue.component("router-link", Link);
  Vue.component("router-view", View);
};
export default VueRouter;
