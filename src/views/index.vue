<template>
  <div class="app">
    <i-sidebar id="app-sidebar"></i-sidebar>
    <div id="content">
      <i-header id="app-header"></i-header>
      <div id="app-content" v-loading="$store.state.Loading" element-loading-background="rgba(0, 0, 0, 0.3)">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
  import iSidebar from "./public/sidebar"
  import iHeader from "./public/i-header"
  export default {
    name: "index",
    components:{iSidebar,iHeader}
  }
</script>
<style scoped lang="scss">
  .app{
    height:100%;
    display: flex;
    #content{
      flex:1;
      #app-header{
        height: 56px;
        width: 100%;
        background: #fff;
        padding: 0 20px;
        box-shadow: 0 3px 8px 0 rgba(226,227,233,.5);
      }
      #app-content{
        background-color: rgba(245, 246, 250, 1);
        height:100%;
      }
    }
  }

</style>
