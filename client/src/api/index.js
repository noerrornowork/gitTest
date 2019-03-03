import $axios from '../http'

export let register = (params) => {
  return $axios.post("api/users/register", params)
};

export let test = () => {
  return $axios.get("api/users/test")
};

export let doLogin = (params) => {
  return $axios.post("api/users/login", params)
};

export let getCurrentUserInfo = () => {
  return $axios.get("api/users/current")
};
