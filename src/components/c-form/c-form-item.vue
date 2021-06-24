<template>
  <div class="e-form-item">
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import Schema from "async-validator";

export default {
  name: "c-form-item",
  inject: ["form"], // 接收父级传递的参数
  data() {
    return {
      error: "",
    };
  },
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String,
    },
  },
  mounted() {
    // 监听子组件的验证通知，执行校验动作
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      // 当前规则
      const currentRules = this.form.rules[this.prop];
      // 当前值
      const currentValue = this.form.model[this.prop];

      // 校验描述对象
      const desc = { [this.prop]: currentRules };

      // 实例化校验对象
      const schema = new Schema(desc);
      return schema.validate({ [this.prop]: currentValue }, (errors) => {
        if (errors) {
          // 校验失败
          this.error = errors[0].message;
        } else {
          // 校验通过
          this.error = "";
        }
      });
    },
  },
};
</script>
