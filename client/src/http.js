import $axios from 'axios'
import { Loading } from 'element-ui'
import Vue from 'vue'
import router from './router'

let loading;
function startLoading() {
  loading = Loading.service({
    lock: true,
    text: "拼命加载中...",
    background: "rgba(0, 0, 0, 0.6)"
  })
}

function endLoading() {
  loading.close()
}

// 请求拦截
$axios.interceptors.request.use(config => {
  startLoading();
  // 如果Token存在的话, 向每个接口请求头加入Token,不然没有权限获取接口数据
  if (localStorage.getItem("eleToken")) {
    config.headers.Authorization = localStorage.getItem("eleToken");
  }
  return config;
}, err => {
  return Promise.reject(err)
});

// 响应拦截
$axios.interceptors.response.use(response => {
  endLoading();
  return response;
}, err => {
  endLoading();
  const { status } = err.response;
  console.log(status);
  if(status === 401) {
    new Vue().$alert('登陆已过期', 'Token已失效', {
      confirmButtonText: '确定',
      callback: action => {
        // 清除Token
        localStorage.removeItem('eleToken');
        // 跳转到登陆页面
        router.push("/login")
      }
    });
  }
  return Promise.reject(err.response)
});

export default $axios;
