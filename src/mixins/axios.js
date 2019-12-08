import axios from "axios"
import target from "../../config/target"
const CancelToken = axios.CancelToken;

export default{
  data(){
    return {
      icebeg_axios:null
    }
  },
  mounted(){
    this.axiosInit()
  },
  methods:{
    axiosInit(){
      //请求头封装
      let token = this.$store.state.token;
      this.icebeg_axios = axios.create({
        baseURL:target.api,
        timeout:60000,
        headers:{
          'Authenticated-Token':token
        }
      });
      this.icebeg_axios.interceptors.response.use(
        response => {
          let token = response.headers['authenticated-token'];
          this.$store.commit("RefreshToken",token);
          return response;
        },
        error => {
          console.log(error.response);
          //过滤
          if(!(typeof error == 'object' && String(error) == "Cancel")){
            this.$store.commit("RefreshLoading",false);
          }
          if( error && error.message.indexOf('timeout') !== -1){
            this.msg_warning("请求超时");
          }else if ( error && error.response) {
            let msg = error.response.data.msg
            switch (error.response.status) {
              case 400:
                msg ? this.msg_error(msg) :this.msg_error("没有权限");
                return;
              case 401:
                this.msg_warning("没有权限");
                return;
              case 403:
                this.msg_warning("没有权限");
                this.$router.push('/login');
                return;
              case 404:
                msg ? this.msg_error(msg) :this.msg_error("连接失败");
                return;
              case 500:
                this.msg_warning("服务异常");
                return;
              default :
                this.msg_warning("连接失败");
                return;
            }
          }
        });
    },
    $post(url,params = {},success = ()=>{},error=()=>{}){
      this.$store.commit("RefreshLoading",true);
      this.icebeg_axios.post(url,params)
        .then((data)=>{
          if(data.data.code == 0 || data.data.code == "0"){
            this.$store.commit("RefreshLoading",false);
            success(data.data);
          }else{
            this.$message({
              message: data.data.msg,
              type: 'error',
              duration:1000
            });
            error();
            this.$store.commit("RefreshLoading",false);
          }
        }).catch((err)=>{
        console.log(err)
        this.$store.commit("RefreshLoading",false);
        error()
      })
    },
    $get(url,params={},success = ()=>{},error=()=>{},cancel=new CancelToken((c)=>{})){
      this.icebeg_axios.get(url,{
        params:params,
        cancelToken: cancel
      })
        .then((data)=>{
          if(data.data.code == 0 || data.data.code == "0"){
            success(data.data)
          }else{
            this.$message({
              message: data.data.msg,
              type: 'error',
              duration:1000
            });
            error()
          }
        }).catch((err)=>{
        console.log(err)
        error()
      })
    },
    $put(url,params = {},success = ()=>{},error=()=>{}){
      this.$store.commit("RefreshLoading",true);
      this.icebeg_axios.put(url,params)
        .then((data)=>{
          if(data.data.code == 0 || data.data.code == "0"){
            this.$store.commit("RefreshLoading",false);
            success(data.data)
          }else {
            this.$message({
              message: data.data.msg,
              type: 'error',
              duration:1000
            });
            error();
            this.$store.commit("RefreshLoading",false);
          }
        }).catch((err)=>{
        console.log(err)
        this.$store.commit("RefreshLoading",false);
        error()
      })
    },
    $del(url,params = {},success = ()=>{},error=()=>{}){
      this.$store.commit("RefreshLoading",true);
      this.icebeg_axios.delete(url,{data:params})
        .then((data)=>{
          if(data.data.code == 0 || data.data.code == "0" || data.status == 204){
            this.$store.commit("RefreshLoading",false);
            success(data.data)
          }else{
            this.$message({
              message: data.data.msg,
              type: 'error',
              duration:1000
            });
            error();
            this.$store.commit("RefreshLoading",false);
          }
        }).catch((err)=>{
        console.log(err)
        this.$store.commit("RefreshLoading",false);
        error()
      })
    }
  }
}
