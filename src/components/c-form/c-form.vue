<template>
  <form class="e-form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "c-form",
  provide() {
    // 跨层级传递参数，让子组件能访问到父组件的所有数据
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      require: true,
    },
    rules: {
      type: Object,
    },
  },
  methods: {
    validate(cb) {
      // 获取所有的孩子
      // 获取到所有子元素的校验结果
      const tasks = this.$children
        .filter((item) => item.prop) //过滤调没有prop属性的item
        .map((item) => item.validate());
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    },
  },
};
</script>
