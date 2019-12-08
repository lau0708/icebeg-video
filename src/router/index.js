import Vue from 'vue'
import Router from 'vue-router'
import store from "../store"

Vue.use(Router)

const router=new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      component:()=>import(`@/views/index`),
      redirect:'/dashboard',
      children:[
        {
          path: '/dashboard',
          component:()=>import(`@/views/dashboard`),
          name:"概览"
        },
        {
          path: '/Monitoring',
          component:()=>import(`@/views/monitoring`),
          name:"实时监控"
        },
        {
          path: '/video_manage',
          component:()=>import(`@/views/videomanage`),
          name:"录像管理",
          children:[

          ]
        },
        {
          path: '/play_back',
          component:()=>import(`@/views/playback`),
          name:"视频回放"
        },
        {
          path: '/space',
          component:()=>import(`@/views/space`),
          name:"空间管理"
        },
        {
          path: '/data_total',
          component:()=>import(`@/views/datatotal`),
          name:"数据统计"
        },
        {
          path: '/device',
          component:()=>import(`@/views/device`),
          name:"设备管理"
        }
      ]
    }
  ]
})

//路由守卫
router.beforeEach((to,from,next)=>{
    let token = store.state.token;
    if(!token){
      token = JSON.parse(sessionStorage.getItem('store')).token;
    }
    //todo 从url上获取token
    let urltoken=window.location.href.split("?")[1];
    if(urltoken!=undefined){
      token=urltoken.split("=")[1].split("&")[0];
      store.commit("RefreshToken",token);
    }
    if(!token && to.path != '/login'){
      console.warn("please to login");
      next({path:"/login"})
    }else{
      next()
    }

});
export default router
