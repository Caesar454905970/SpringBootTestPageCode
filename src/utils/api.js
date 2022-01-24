//调用封装了的axios => request
import service from "./request.js";

/**
 * 封装各个组件里面的axios请求
 * @param data
 * @returns {AxiosPromise}
 * @constructor
 */
export function Login(data){
    return service({
        method:'post',  //请求的方法
        url:`/sysUser/login`, //请求的地址
        data    //提交的参数
    })
}
