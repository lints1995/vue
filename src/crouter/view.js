export default {
  render(h) {
    console.log(this.$router);
    const { routerMap, current } = this.$router;
    let com = routerMap[current] || null;
    return h(com);
  }
};
