import $axios from '../http'

export let register = (params) => {
  return $axios.post("api/users/register", params)
};

export let test = () => {
  return $axios.get("api/users/test")
};
