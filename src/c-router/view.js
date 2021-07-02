export default {
  render(h) {
    const { routerMap, current } = this.$router;
    let com = routerMap[current] || null;
    return h(com);
  },
};
