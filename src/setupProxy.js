//跨域

const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/sh",{
        target:"https://wechatx.34580.com",
        changeOrigin:true,
    })),
    app.use(proxy("/topicInfo",{
        target:"https://wechatx.34580.com",
        changeOrigin:true,
    })),
    app.use(proxy("/api1",{
        target:"https://api1.34580.com",
        changeOrigin:true,
        pathRewrite:{
            "^/api1":""
        }
    }))
}

// https://api1.34580.com/sh/flash/getPageFlashSaleProducts?sourcetype=9&PageIndex=0

// https://wechatx.34580.com/topicInfo/product?cityFlag=sh