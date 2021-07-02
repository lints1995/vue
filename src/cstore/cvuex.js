let Vue;

class Store {
  constructor(options) {
    this.state = new Vue({
      data: options.state,
    });
  }
}

function install(_Vue) {
  // 实现install方法，vue.use 时会传入一个Vue
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}
export default {
  Store,
  install,
};
