<template>
  <div>
    <input
      :placeholder="placeholder"
      :value="value"
      @input="handleInput"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  name: "c-input",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
