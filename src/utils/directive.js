import Vue from "vue";

Vue.directive("title", {
  inserted: function(el, binding) {
    console.log(el, binding);
    document.title = binding.value;
  }
});
