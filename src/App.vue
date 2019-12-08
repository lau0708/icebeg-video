<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    // 防止页面刷新原先获取的vuex中的state数据消失
    if (sessionStorage.getItem("store") ) {
      //页面刷新之后移除session 并重新挂载路由
      this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))));
    }
    //监听页面刷新前 vuex 存储
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style>
  @import "../static/css/public.scss";
</style>
<style>


</style>
