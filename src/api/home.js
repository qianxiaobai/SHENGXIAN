import http from "@utils/http";

//week_choice
export const centerNav_api = ()=>http.get("/sh/Home/ShortcutIconRequest") 


export const home_api = () =>http.get("/sh/Home/DefaultHomeV2Request") 
//https://wechatx.34580.com/sh/Home/ShortcutIconRequest?accesstoken=d2d1425816b14a89&customerguid=e7b2f5dd-444c-4242-b8c1-4e6f1a982eac&sourcetype=9
//https://wechatx.34580.com/sh/Home/DefaultHomeV2Request?accesstoken=d2d1425816b14a89&customerguid=e7b2f5dd-444c-4242-b8c1-4e6f1a982eac&sourcetype=9&NowVersion=1
//详情列表页
export const homeDetail_api = () =>http.get("sh/Home/FlashSaleRequest")

//https://wechatx.34580.com/sh/Home/FlashSaleRequest?accesstoken=7dd1d0740d2d4934&customerguid=e7b2f5dd-444c-4242-b8c1-4e6f1a982eac&sourcetype=9
//搜索
export const search_api = (sourcetype=9,Keyword,Size) =>http.get("/sh/Products/KeywordSuggestRequest",{sourcetype,Keyword,Size})

// 热门搜索
export const hotSearch_api = (sourcetype=9) =>http.get("/sh/Products/ProductHotWordRequest",{sourcetype})













