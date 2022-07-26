<template>
  <div>
    <h2>使用JSX渲染</h2>
    <JSXRenderDragTable />
    <h2>拖拽Table</h2>
    <Drag-Table />
  </div>
</template>

<script>
import JSXRenderDragTable from "@/components/c-drag-table/JSX-Table";
import DragTable from "@/components/c-drag-table/index";

export default {
  components: {
    JSXRenderDragTable,
    DragTable
  }
};
</script>
