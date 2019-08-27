//跨域

const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/sh",{
        target:"https://wechatx.34580.com",
        changeOrigin:true,
    }))
}