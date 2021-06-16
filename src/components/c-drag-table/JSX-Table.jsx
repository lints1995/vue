export default {
  name: "JSX-Table",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      tableColumn: [
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
    };
  },
  render() {
    return (
      <el-table data={this.tableData}>
        {this.tableColumn.map((el) => {
          const { prop, label } = el;
          return <el-table-column prop={prop} label={label}></el-table-column>;
        })}
      </el-table>
    );
  },
};
