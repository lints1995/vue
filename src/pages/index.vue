<template>
  <div class="items">
    <div class="item" v-for="(route, index) in routes" :key="index">
      <c-button v-if="route.meta" :path="route.path">{{
        route.meta.title
      }}</c-button>
    </div>
  </div>
</template>
<script>
import CButton from "@/components/c-button";
import routes from "@/cRouter/routes";
export default {
  components: {
    CButton
  },
  computed: {
    routes() {
      return routes;
    }
  }
};
</script>
<style scoped>
.items{
  display: flex;
  justify-content: space-evenly;
}
.item{
  flex: 1;
}
</style>
