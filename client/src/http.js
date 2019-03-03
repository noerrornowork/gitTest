import axios from 'axios'
import { Loading } from 'element-ui'

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
axios.interceptors.request.use(config => {
  startLoading();
  return config;
}, err => {
  return Promise.reject(err)
});

// 响应拦截
axios.interceptors.response.use(response => {
  endLoading();
  return response;
}, err => {
  endLoading();
  return Promise.reject(err)
});

export default axios;
