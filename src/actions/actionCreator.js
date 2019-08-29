import {createAction} from "redux-actions"
import {goodsList,goodsList1,goodsdetail,goodsProduct} from "@api/week"

export const changeindex= createAction("CHANGE-INDEX",(index)=>({
    index:index
}))   



export const goodsTypesAction0 = createAction("GOODS_TYPES0",(val,index)=>({val,index}));
export const goodsTypesAsyncAction0 = (sourcetype,index)=>{
    return async (dispatch)=>{
        let data = await goodsList(sourcetype);
        dispatch(goodsTypesAction0(data,index))
    }
}

export const goodsTypesAction = createAction("GOODS_TYPES",(val,index)=>({val,index}));
export const goodsTypesAsyncAction = (sourcetype,Id,index)=>{
    return async (dispatch)=>{
        let data = await goodsList1(sourcetype,Id);
        dispatch(goodsTypesAction(data,index))
    }
}

export const goodsDetailAction = createAction("GOODS_DETAIL",(props,val,name,Id)=>({props,val,name,Id}));
export const goodsDetailsAsyncAction = (props,Id,name)=>{
    return async (dispatch)=>{
        let data = await goodsdetail(Id);
        dispatch(goodsDetailAction(props,data,name,Id))
    }
}

//排序
export const goodsPXAction = createAction("GOODS_PX",(val)=>({val}));
export const goodsPXAsyncAction= (Id,ids)=>{
    return async (dispatch)=>{
        let data = await goodsdetail(Id,ids);
        dispatch(goodsPXAction(data))
    }
}
//每个商品的详情页面
export const goodsProductAction = createAction("GOODS_Product",(val)=>({val}));
export const goodsProductAsyncAction=(ssuId)=>{
    return async (dispatch)=>{
        let data = await goodsProduct(ssuId);
        dispatch(goodsProductAction(data))
    }
}

export const InsertCarAction=createAction("GOODS_INSERT",(val)=>({val}))

export const GoodsAddAction=createAction('GODOS_ADD',(index,num)=>({index,num}))
export const GoodsReduceAction=createAction('GODOS_REDUCE',(index,num)=>({index,num}))
export const GoodsSDAction=createAction('GODOS_SD',(index,num)=>({index,num}))