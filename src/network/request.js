import axios from "axios"

export function httpService(config) {
    // 1. 实例化axtios
    const instance = axios.create({
        baseURL: "http://123.207.32.32:8000",
        timeout: 50000
    });

    // 2. 拦截器
    // instance.interceptors.request.use(config => {
    //     return config
    // }, error => {
    //     return error
    // });

    instance.interceptors.response.use(response=> {
       return response.data
    }, error => {
        return error
    });

    // 3. 发送请求并返回promise
    return instance(config)
}
