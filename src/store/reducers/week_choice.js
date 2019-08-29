import {handleActions} from "redux-actions";

const defaultState = {
    indexActive:0,
    goodsList:[{Name:'柑橘橙柚'},{Name:'节日礼盒'},{Name:'面膜'},{Name:'低温酸奶'},{Name:'方便菜'},
    {Name:'酸菜'},{Name:'杂粮'},{Name:'零食礼盒'},{Name:'啤酒'},{Name:'水八仙'},{Name:'冰鲜海鲜'}],
    goodsDetail:[],
    Id:101264,
    productInfo:{},
    productActivityList:[],
    productInfoServiceList:[],
    carList:[],
    n:100
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
        newState.goodsDetail=action.payload.val.Data.SourceData;
        return newState;
    },
    'GOODS_Product':(state,action)=>{
        let newState = Object.assign({},state);
        newState.productInfo=action.payload.val.Data.productInfo; 
        newState.productActivityList=action.payload.val.Data.productActivityList; 
        newState.productInfoServiceList=action.payload.val.Data.productInfoServiceList;  
        return newState;
    },
    'GOODS_INSERT':(state,action)=>{
        let newState = Object.assign({},state);
        var flag=false;
        if(newState.carList.length===0){
            console.log('aaaaaa')
            flag=true
        }else{
           
            for(var i=0;i<newState.carList.length;i++){       
                if(newState.carList[i].productName!==action.payload.val.productName){
                    console.log('bbbbbbbbb')
                    flag=true
                    break;
                } 
            }
        }
        if(flag===true){
            action.payload.val.num=1;
            newState.carList.push(action.payload.val);
        }else{
            for(let i=0;i<newState.carList.length;i++){   
                if(newState.carList[i].productName===action.payload.val.productName){
                    newState.carList[i].num++
                }
            }
            // action.payload.val.num++;
            // newState.carList.splice(newState.carList.length-1,1,action.payload.val)
        }
        return newState;
       
    },
    'GODOS_ADD':(state,action)=>{
        let newState = JSON.parse(JSON.stringify(state));
        newState.carList[action.payload.index].num++;
        return newState;
    },
    'GODOS_REDUCE':(state,action)=>{
        let newState = JSON.parse(JSON.stringify(state));
        if(newState.carList[action.payload.index].num>1){
            newState.carList[action.payload.index].num--
        }
        return newState;
    },
    'GODOS_SD':(state,action)=>{
        let newState = JSON.parse(JSON.stringify(state));
        newState.carList[action.payload.index].num=action.payload.num;
        return newState;
    },

},defaultState)