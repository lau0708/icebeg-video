<template>
    <div class="sidebar">
      <ul class="menu">
        <div class="header">
          <div class="iconfont iconshipinjiankong" style="font-size: 48px"></div>
          <p>视频控制平台</p>
        </div>
        <li>
          <router-link to="/dashboard" active-class="active" tag="span">
            概览
          </router-link>
        </li>
        <li>
          <router-link to="/monitoring"  active-class="active" tag="span">
            实时监控
          </router-link>
        </li>
        <li>
          <router-link to="/play_back"  active-class="active" tag="span">
            视频回放
          </router-link>
        </li>
        <li>
          <router-link to="/device"  active-class="active" tag="span">
            设备管理
          </router-link>
        </li>
        <li>
          <router-link to="/video_manage"  active-class="active" tag="span">
            录像管理
          </router-link>
        </li>
        <li>
          <router-link to="/space"  active-class="active" tag="span">
            空间管理
          </router-link>
        </li>
        <li>
          <router-link to="/data_total"  active-class="active" tag="span">
            数据统计
          </router-link>
        </li>

      </ul>
    </div>
</template>

<script>
  export default {
    name: "sidebar"
  }
</script>

<style scoped>
  .sidebar {
    background: #fff;
    width: 180px;
    height: 100%;
    border:1px solid #e6e6e6;
  }
  .sidebar .menu{
    list-style: none;
    margin:0;
    padding: 0;
  }
  .sidebar .menu li{
    padding-left: 0!important;
    padding: 0;
    text-align: center;
    color: #666;
    height: 56px;
    line-height: 32px;
    padding: 12px 0;
    box-sizing: border-box;
    font-size:14px;
  }
  .header {
    width: 180px;
    height: 150px;
    text-align: center;
    padding: 40px 0 27px;
  }
  .header p{
    margin: 10px 0px 0px;
    font-size: 18px;
    line-height: 18px;
    font-weight: 500;
  }
  .active{
    width:98%;
    color: #455cc6 !important;
    border-right:4px solid #455cc6;
    display: block;
  }

</style>
