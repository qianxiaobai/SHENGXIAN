import {handleActions} from "redux-actions";

const defaultState = {
    indexActive:0,
    goodsList:[{Name:'柑橘橙柚'},{Name:'节日礼盒'},{Name:'面膜'},{Name:'低温酸奶'},{Name:'方便菜'},
    {Name:'酸菜'},{Name:'杂粮'},{Name:'零食礼盒'},{Name:'啤酒'},{Name:'水八仙'},{Name:'冰鲜海鲜'}],
    goodsDetail:[],
    Id:101264
}

export default handleActions({
    'CHANGE-INDEX':(state,action)=>{
        let newState = Object.assign({},state);
        newState.indexActive=action.payload.index
        return newState;
    },
    'GOODS_TYPES0':(state,action)=>{
        let newState = Object.assign({},state);
        newState.indexActive=action.payload.index;
        newState.goodsList=action.payload.val.Data.HotCategoryList
        return newState;
    },

    'GOODS_TYPES':(state,action)=>{
        let newState = Object.assign({},state);
        newState.indexActive=action.payload.index;
        newState.goodsList=action.payload.val.Data.SubCategories
        return newState;
    },
    'GOODS_DETAIL':(state,action)=>{
        let newState = Object.assign({},state);      
        newState.goodsDetail=action.payload.val.Data.SourceData;
        newState.Id=action.payload.Id
        return newState;
    },
    'GOODS_PX':(state,action)=>{
        let newState = Object.assign({},state);    
        console.log(action,'bbbb')  
        newState.goodsDetail=action.payload.val.Data.SourceData;
        return newState;
    },

},defaultState)