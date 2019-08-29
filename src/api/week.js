import http from "@utils/http";

//week_choice
export const sort = (sourcetype=9)=>http.get("/sh/Products/BigCategoryRequest",{sourcetype}) 
export const goodsList=(sourcetype=9)=>http.get("/sh/Products/HotCategoryRequest",{sourcetype}) 
export const goodsList1=(sourcetype=9,Id)=>http.get("/sh/Products/SubCategoryRequest",{sourcetype,Id}) 

export const goodsdetail=(Id,ids=0)=>http.get('/sh/ProductRequests/ProductMultiConditionRequest?accesstoken=4270c33a487045dc&customerguid=bb9883aa-fa27-42aa-b900-caccb6d94d72&sourcetype=9&json=%7B%22CategoryIds%22:['+Id+'],%22PageIndex%22:1,%22PageSize%22:20,%22OrderDirectionType%22:0,%22OrderFieldType%22:'+ids+',%22sourcetype%22:%229%22%7D')
export const goodsProduct=(ssuId=115852)=>http.get('/sh/productdetail/detail',{
    accesstoken:'4270c33a487045dc',
    customerguid:'bb9883aa-fa27-42aa-b900-caccb6d94d72',
    sourcetype:9,
    ssuId
})