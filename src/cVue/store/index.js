/**
 * vuex 实现
 */
// 保存构造函数的引用，避免import
let Vue;

class Store {
  constructor(options) {
    this._mutations = options.mutations; // 保存传入的mutations
    this._actions = options.actions; // 保存传入的actions
    // 添加响应的state
    this.vm = new Vue({
      data: {
        $$state: options.state
      } // 两个$$，Vue不会去代理，在页面中不能访问到
    });
    // 在这里绑定commit，dispatch的上下文，防止在下面使用时this指向的改变
    this.commit = this.commit.bind(this);
    this.dispatch = this.dispatch.bind(this);
  }
  // 通过存取器去访问state 防止外部直接修改state
  get state() {
    return this.vm._data.$$state;
  }
  set state(v) {
    return console.error("不能直接修改state的值");
  }

  // type 为提交的mutations中对应的函数，payload传递的参数
  commit(type, payload) {
    const enter = this._mutations[type]; // 获取要访问的函数
    if (enter) {
      enter(this.state, payload);
    }
  }
  dispatch(type, payload) {
    const enter = this._actions[type]; // 获取要访问的函数
    if (enter) {
      enter(this, payload);
    }
  }
}

function install(_Vue) {
  // 实现install方法，vue.use 时会传入一个Vue实例
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    }
  });
}
export default {
  Store,
  install
};
