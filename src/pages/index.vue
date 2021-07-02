<template>
  <div>
    <template v-for="(route, index) in routes">
      <c-button v-if="route.meta" :key="index" :path="route.path">{{
        route.meta.title
      }}</c-button>
    </template>
  </div>
</template>
<script>
import CButton from "@/components/c-button";
import routes from "@/const/routes";
export default {
  components: {
    CButton,
  },
  computed: {
    routes() {
      return routes;
    },
  },
};
</script>
