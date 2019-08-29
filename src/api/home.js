import http from "@utils/http";

//week_choice
export const centerNav_api = ()=>http.get("/sh/Home/ShortcutIconRequest") 


export const home_api = () =>http.get("/sh/Home/DefaultHomeV2Request") 
//https://wechatx.34580.com/sh/Home/ShortcutIconRequest?accesstoken=d2d1425816b14a89&customerguid=e7b2f5dd-444c-4242-b8c1-4e6f1a982eac&sourcetype=9
//https://wechatx.34580.com/sh/Home/DefaultHomeV2Request?accesstoken=d2d1425816b14a89&customerguid=e7b2f5dd-444c-4242-b8c1-4e6f1a982eac&sourcetype=9&NowVersion=1
//详情列表页
// export const homeDetail_api = () =>http.get("sh/Home/FlashSaleRequest")

//https://wechatx.34580.com/sh/Home/FlashSaleRequest?accesstoken=7dd1d0740d2d4934&customerguid=e7b2f5dd-444c-4242-b8c1-4e6f1a982eac&sourcetype=9
export const homeDetail_api = () =>http.get("/api1/sh/flash/getPageFlashSaleProducts")
// sh/flash/getPageFlashSaleProducts?sourcetype=9&PageIndex=0
// topicInfo/product?cityFlag=sh


// sz/Home/FlashSaleRequest?sourcetype=9
// 116187,116741













