import axios from "axios";

// 1.通过当前的运行命令判断出当前的运行环境，切换请求地址
// 开发环境 + 测试环境 + 生产环境
const isDev = process.env.NODE_ENV === "development";
// console.log(process.env.NODE_ENV);
// isDev  ---  true   ----  开发环境  ----  npm run serve
// isDev  ---- false   ----  生产环境  ----  npm run build

// 如果是开发环境，服务器可能是本地的，也可能是服务器上的
const baseUrl=isDev ? "http://daxun.kuboy.top/api":"http://daxun.kuboy.top/api";
