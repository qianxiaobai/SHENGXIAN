import http from "@utils/http";

//中部导航
export const centerNav_api = ()=>http.get("/sh/Home/ShortcutIconRequest") 
//首页
export const home_api = () =>http.get("/sh/Home/DefaultHomeV2Request") 
//详情列表页
export const homeDetail_api = () =>http.get("sh/Home/FlashSaleRequest")
//搜索
export const search_api = (sourcetype=9,Keyword,Size) =>http.get("/sh/Products/KeywordSuggestRequest",{sourcetype,Keyword,Size})
// 热门搜索
export const hotSearch_api = (sourcetype=9) =>http.get("/sh/Products/ProductHotWordRequest",{sourcetype})

export const  searchdetail_api = (Keyword)=>http.get("sh/ProductRequests/SearchProductRequest",{
    accesstoken:"7dd1d0740d2d4934",
    customerguid:"e7b2f5dd-444c-4242-b8c1-4e6f1a982eac",
    sourcetype:9,
    Keyword,
    PageIndex:1,
    PageSize:20,
    OrderDirectionType:0,
    OrderFieldType:0,
    mode:1,
})














