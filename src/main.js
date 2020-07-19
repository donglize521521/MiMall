//一般引入习惯插件上，组件下
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'//axious在每个页面都要写这个名字，而且需要导入它，然后发请求。很麻烦，vue-axios就是把它vue作用域对象挂在到实例上去方便用this调用
import App from './App.vue'
import env from './env'//这里必须加./,没有就会按插件处理，会报错。

//根据前端的跨域方式做调整  /a/b : /api/a/b => /a/b
//axios.defaults.baseURL = '/api';  //暂时定为接口代理
axios.defaults.timeout = 8000;//一定要设置否则用户体样很差

//根据环境变量获取不同的请求地址
axios.defaults.baseURL = env.baseURL;

//接口错误拦截
axios.interceptors.response.use(function(response){
   let res =  response.data;
   if(res.status == 0){//0是成功
     return res.data;//接口返回的值;
   }else if(res.status == 10){//10是未登录   建议状态码按业务划分
    //main.js里用路由跳是没有用的，路由是挂在vue实例去的的，在页面，在vue实例才能够用this.ronter.$push,这里的this并没有指向vue

      window.location.href = '/#/login'//哈希路由
   }else{
     alert(res.msg);
   }
});

Vue.use(VueAxios,axios);//挂在实例 Vue.use加载插件，相当于nodejs里的app.use,可以利用中间件
Vue.config.productionTip = false//生产环境的提示，默认是false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
