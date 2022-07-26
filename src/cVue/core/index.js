/**
 * vue 响应式实现
 */

const defineReactive = function(obj, key, val) {
  // 如果是嵌套对象再次递归，使其成为响应数据
  observer(val);
  Object.defineProperty(obj, key, {
    get() {
      console.log("get->", val);
      return val;
    },
    set(newVal) {
      console.log("set->", key, newVal);
      if (val !== newVal) {
        // 新复制的值是对象时
        observer(newVal);
        val = newVal;
        update();
      }
    }
  });
};
const observer = function(obj) {
  // 遍历对象，把data中的数据变成响应式数据
  if (typeof obj !== "object" || obj == null) return;
  Object.keys(obj).forEach((key) => {
    defineReactive(obj, key, obj[key]);
  });
};
const set = function(obj, key, val) {
  defineReactive(obj, key, val);
};
const update = function() {
  // 操作更新dom
  app.innerText = data.foo;
};
let data = {
  foo: 1,
  a: {
    aa: 2
  }
};
observer(data);
data.foo = 4;
data.a.aa = 6;
// data.b = 121;
set(data, "b", 121);
data.b;
