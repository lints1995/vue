let Vue;

class VueRouter {
  constructor(options) {
    this.$options = options;
    // defineReactive该方法为vue提供的工具方法，目的是让current具备和页面响应式， 初始化时赋值为首页路由
    Vue.util.defineReactive(this, "current", "/");
    //  监听路由的变化，来加载不同的页面
    window.addEventListener("hashchange", this.setCurrentRouter.bind(this));
    window.addEventListener("load", this.setCurrentRouter.bind(this));
  }
  setCurrentRouter() {
    this.current = window.location.hash.slice(1);
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
    },
  });
  Vue.component("router-link", {
    props: {
      to: {
        type: String,
        required: true,
      },
    },
    render(h) {
      return h("a", { attrs: { href: `#${this.to}` } }, this.$slots.default);
    },
  });
  Vue.component("router-view", {
    render(h) {
      let com = null;
      com = this.$router.$options.routes.find((el) => {
        return el.path === this.$router.current;
      }).component;
      return h(com);
    },
  });
};
export default VueRouter;
