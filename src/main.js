import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routerConfig from './router.config';
import store from './store/';
import axios from 'axios'
import Loading from './template/loading';
//import Filters from "./filter/index"
Vue.use(VueRouter);
Vue.use(Loading);

// Vue.filter()
// Object.keys(Filters).forEach((key) => {Vue.filter(key, Filters[key])})
/**、
 * axios 配置
 * */
//发送请求
axios.interceptors.request.use(function (config) {
    store.dispatch('showLoading');
    return config;
},function (error) {
    return Promise.reject(error)
});
//请求成功
axios.interceptors.response.use(function (response) {
    store.dispatch('hidLoading');
    return response;
},function (error) {
    return Promise.reject(error)
});
 axios.defaults.baseURL='http://localhost:8080/';        // 配置跟路径
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';      设置post请求公用头部
Vue.prototype.$http = axios;

const router = new VueRouter({
	mode:'history',
	routes:routerConfig,
    scrollBehavior : () =>({ y : 0 }),
});
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
