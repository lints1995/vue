<template>
  <div>
    <el-table :data="tableData" border class="table1" ref="table1">
      <el-table-column
        v-for="(item, index) in tableColumns"
        :key="index"
        :prop="dropTableColumns[index].prop"
        :label="item.label"
      >
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="page"
      @current-change="handleCurrentChange"
      background
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import Sortable from "sortablejs";
export default {
  name: "drag-table",
  data() {
    return {
      page: 1,
      total: 1000,
      tableColumns: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "date",
          label: "日期",
        },
        {
          prop: "address",
          label: "地址",
        },
      ],
      dropTableColumns: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "date",
          label: "日期",
        },
        {
          prop: "address",
          label: "地址",
        },
      ],
      tableData: [],
    };
  },
  created() {},
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.tableData.push({
        date: "2016-05-03",
        name: `王小${i}`,
        address: `上海市普陀 ${i}`,
      });
    }
    document.body.ondrop = function(event) {
      event.preventDefault();
      event.stopPropagation();
    };
    this.rowDrop();
    this.columnDrop();
  },
  methods: {
    handleCurrentChange() {},
    //行拖拽
    rowDrop() {
      const tbody = document.querySelector(
        ".table1 .el-table__body-wrapper tbody"
      );
      const _this = this;
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0];
          _this.tableData.splice(newIndex, 0, currRow);
        },
      });
    },
    //列拖拽
    columnDrop() {
      const wrapperTr = document.querySelector(
        ".table1 .el-table__header-wrapper tr"
      );
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: (evt) => {
          const oldItem = this.dropTableColumns[evt.oldIndex];
          this.dropTableColumns.splice(evt.oldIndex, 1);
          this.dropTableColumns.splice(evt.newIndex, 0, oldItem);
          console.log(this.dropTableColumns);
        },
      });
    },
  },
};
</script>

<style></style>
