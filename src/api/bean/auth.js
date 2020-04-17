import { getDefaultAxios } from "../index.js";

/**
 * 自主登录接口
 * 使用低权限账号保证对外界面可以访问2.0后台数据接口
 * @param {*} params
 * @param {*} axios
 */
export async function auth_token(username = "admin", axios) {
  axios = axios || getDefaultAxios();
  const { data } = await axios.post("/au/token", {
    username,
    password: "123",
    etag: "+mOUb1hDtJA="
  });
  localStorage.setItem("token", data[0].access_token);
}
