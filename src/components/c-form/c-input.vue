<template>
  <div>
    <!-- vue 会把组件在使用时写了，但没有用到的属性收集到$attrs里面 -->
    <!--通过v-bind 展开$attrs属性，就不用在当前的props里一个个的枚举，接收了 -->
    <input
      :type="type"
      :value="value"
      @input="handleInput"
      v-bind="$attrs"
      autocomplete
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false, //$attrs 里的属性是默认绑定在当前的root节点上的，设置这个值是为了去除绑定在root节点上的属性
  name: "c-input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
      this.$parent.$emit("validate"); // 派发去校验
    },
  },
};
</script>
