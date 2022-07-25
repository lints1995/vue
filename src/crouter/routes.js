export default [
  {
    path: "/",
    component: () => import("@/pages")
  },
  {
    path: "/drag-table",
    component: () => import("@/pages/drag-table"),
    meta: {
      title: "拖拽表格"
    }
  },
  {
    path: "/form",
    component: () => import("@/pages/form"),
    meta: {
      title: "表单封装实现"
    }
  },
  {
    path: "/reactive",
    component: () => import("@/pages/reactive"),
    meta: {
      title: "vue响应式实现"
    }
  },
  {
    path: "/vuex",
    component: () => import("@/pages/vuex"),
    meta: {
      title: "vuex实现"
    }
  }
];
