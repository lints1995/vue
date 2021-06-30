import Vue from "vue";

// render版本
function create(component, props) {
  // 1.组件变成构造函数
  // - 通过Vue.extend()
  // - 通过render

  //   h是createElement，返回vNode虚拟dom
  const vm = new Vue({
    render: (h) => h(component, { props }),
  }).$mount(); // 这里挂载不指定页面中的真实dom，以为会把页面中的dom内容覆盖调，但是需要挂载获取真实的dom

  // 向页面追加
  document.body.appendChild(vm.$el);
  const comp = vm.$children[0]; // 获取组件实例，并返回
  // 删除组件，回收
  comp.remove = function() {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  };
  return comp;
}

// extend 版本
// function create(component, props) {
//   const Ctor = Vue.extend(component);
//   const comp = new Ctor({
//     propsData: props,
//   });
//   comp.$mount();
//   document.body.appendChild(comp.$el);
//   comp.remove = function() {
//     document.body.removeChild(comp.$el);
//     comp.$destroy();
//   };
//   return comp;
// }

export default create;
