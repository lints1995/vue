import { HISTORY } from "./mode";

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  render(h) {
    const mode = this.$router.$options.mode;
    return h(
      "a",
      { attrs: { href: HISTORY === mode ? this.to : `#${this.to}` } },
      this.$slots.default
    );
  }
};
