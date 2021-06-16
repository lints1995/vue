<template>
  <div class="c-button">
    <router-link :to="path">
      <el-button><slot></slot></el-button>
    </router-link>
  </div>
</template>
<script>
export default {
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
