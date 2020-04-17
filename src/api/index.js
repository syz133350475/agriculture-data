import axios from "axios"

// 创建axios的一个实例
let defaultAxios = null;

export function getDefaultAxios() {
    if (!defaultAxios) {
        defaultAxios = getAxiosInstance();
    }
    return defaultAxios;
}

// 192.168.2.208:5001
function getAxiosInstance() {
    const instance = axios.create();
    instance.defaults.baseURL = `/api`;
    instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    // 一、请求拦截器 忽略
    instance.interceptors.request.use(function (config) {
   
        const token = localStorage.getItem('token')
        if (token && !config.url.includes("token")) {
            config.headers["Authorization"] = token;
        } else if (config.headers["Authorization"]) {
            delete config.headers["Authorization"];
            console.log('config', config)
        }
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });
    // 二、响应拦截器 
    instance.interceptors.response.use(function (response) {
        return response.data;
    }, function (error) {
        // 对响应错误做点什么
        console.log(error)
        return Promise.reject(error);
    });

    return instance

}
