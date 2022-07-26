/**
 * router 实现
 */
import View from "./view";
import Link from "./link";
import { HISTORY } from "./mode";

let Vue;

class VueRouter {
  constructor(options) {
    this.$options = options;
    // defineReactive该方法为vue提供的工具方法，目的是让current具备和页面响应式，
    // 只要current值发生改变render函数就会重新执行
    // "history" 或者 "hash" 路由模式
    if (this.$options.mode === HISTORY) {
      // 初始化时赋值为首页路由
      Vue.util.defineReactive(this, "current", window.location.pathname);
    } else {
      // hash模式默认给路由加上#
      window.location.hash = "/";
      // 初始化时赋值为首页路由
      Vue.util.defineReactive(this, "current", this.getCurrentHashRouter());
      // 解决刷新后再重新赋值路由
      window.addEventListener("load", this.setCurrentHashRouter.bind(this));
      //  监听路由的变化，来加载不同的页面
      window.addEventListener(
        "hashchange",
        this.setCurrentHashRouter.bind(this)
      );
    }
    //创建路由映射表,不通过遍历routes查找组件
    this.routerMap = {};
    this.$options.routes.map((el) => {
      this.routerMap[el.path] = el.component;
    });
  }
  getCurrentHashRouter() {
    return window.location.hash.slice(1);
  }
  setCurrentHashRouter() {
    console.log("hash改变");
    this.current = !this.getCurrentHashRouter()
      ? "#/"
      : this.getCurrentHashRouter();
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
