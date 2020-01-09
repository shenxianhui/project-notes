import Vue from 'vue';
import App from './App.vue';
import Router from './router';
import Store from './store';
import './style/common.less';
// import '@/config/rem'; // 移动端引入

Vue.config.productionTip = false;

const vm = new Vue({
  router: Router,
  store: Store,
  render: h => h(App)
}).$mount('#app');

Router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next({ path: '/error' });
  }
  // 做登录拦截，可以参考如下写法, 不做的话把下面代码去掉
  if (to.meta.hasOwnProperty('requiresLogin') && to.meta.requiresLogin && !vm.$store.state.isLogin) {
    // MessageBox.confirm('请先登录').then(
    //   action => {
    //     next({ path: '/login' });
    //   },
    //   res => {
    //     next(false);
    //   }
    // );
    next();
  } else {
    next();
  }
});

// 添加请求拦截器
// axios.interceptors.request.use(
//   config => {
//     // 在发送请求之前做些什么
//     // open loading...
//     return config;
//   },
//   error => {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   }
// );

// 添加响应拦截器
// axios.interceptors.response.use(
//   response => {
//     // 对响应数据做点什么
//     if (!response.data.success) {
//       // alert(response.data.msg);
//     }
//     // close loading...
//     return response;
//   },
//   error => {
//     // 对响应错误做点什么
//     // close loading...
//     // alert(error.data.msg);
//     return Promise.reject(error);
//   }
// );
