<template>
  <div class="c-button">
    <router-link :to="path">
      <el-button v-bind="$attrs"><slot></slot></el-button>
    </router-link>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    path: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped>
.c-button {
  display: inline-block;
  margin: 12px;
}
</style>
