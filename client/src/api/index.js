import $axios from '../http'

// 注册登陆模块
export let register = (params) => {
  return $axios.post("api/users/register", params)
};

export let test = () => {
  return $axios.get("api/profiles/test")
};

export let doLogin = (params) => {
  return $axios.post("api/users/login", params)
};

export let getCurrentUserInfo = () => {
  return $axios.get("api/users/current")
};
// 资金管理模块
