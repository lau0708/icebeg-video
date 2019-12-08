export default {
  methods:{
    msg_warning(data){
      this.$message({
        message: data ? data : "警告",
        type: 'warning',
        duration:1500
      });
    },
    msg_error(data){
      this.$message({
        message: data ? data: "错误",
        type: 'error',
        duration:1500
      });
    },
    msg_success(data){
      this.$message({
        message: data ? data: "成功",
        type: 'success',
        duration:1500
      });
    },
  }
}
