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
    n:100,
    selectedAll:true,
    goodsNum:0,
    goodsPrice:0

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
//-----搜索处理
    SEARCHDETAIL:(state,action)=>{
        let newState = Object.assign({},state);      
        newState.goodsDetail=action.payload.Data.SourceData;
        return newState;
    },
//------------
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
        action.payload.val.flag=true;
        var flag=false;
        
        //第一次加入购物车时，flag=true,第二次加入相同的商品时，则num++
        if(newState.carList.length===0){
            flag=true
        }else{
            //对carList中的每个对象进行判断，如果都满足条件，则返回true
             flag= newState.carList.every(function(item){
                return item.productName!==action.payload.val.productName
            })
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
        }
        for(var i=0;i<newState.carList.length;i++){
            if(newState.carList[i].flag){
                newState.goodsNum+=newState.carList[i].num;
                newState.goodsPrice+= (newState.carList[i].periodMoney*1000)*newState.carList[i].num/1000;
            }
        }
        return newState;
       
    },
    'GODOS_ADD':(state,action)=>{
        let newState = JSON.parse(JSON.stringify(state));
        newState.carList[action.payload.index].num++;
        newState.goodsNum=0;
        newState.goodsPrice=0;
        for(var i=0;i<newState.carList.length;i++){
            if(newState.carList[i].flag){
                newState.goodsNum+=newState.carList[i].num;
                newState.goodsPrice+= (newState.carList[i].periodMoney*1000)*newState.carList[i].num/1000;
            }
        }
        return newState;
    },
    'GODOS_REDUCE':(state,action)=>{
        let newState = JSON.parse(JSON.stringify(state));
        if(newState.carList[action.payload.index].num>1){
            newState.carList[action.payload.index].num--
        }
        newState.goodsNum=0;
        newState.goodsPrice=0;
        for(var i=0;i<newState.carList.length;i++){
            if(newState.carList[i].flag){
                newState.goodsNum+=newState.carList[i].num;
                newState.goodsPrice+= (newState.carList[i].periodMoney*1000)*newState.carList[i].num/1000;
            }
        }
        return newState;
    },
    'GODOS_SD':(state,action)=>{
        let newState = JSON.parse(JSON.stringify(state));
        newState.carList[action.payload.index].num=action.payload.num;
        return newState;
    },
    'GOODS_SELECTED':(state,action)=>{
        let newState = JSON.parse(JSON.stringify(state));
        newState.goodsNum=0;
        newState.goodsPrice=0;

        newState.carList[action.payload.index].flag=!newState.carList[action.payload.index].flag;
        var bStop = true;

        for(var i=0;i<newState.carList.length;i++){
            if(!newState.carList[i].flag){
                bStop = false;
                break;
            }
        }
        newState.selectedAll = bStop;
        // eslint-disable-next-line no-redeclare
        for(var i=0;i<newState.carList.length;i++){
            if(newState.carList[i].flag){
                newState.goodsNum+=newState.carList[i].num;
                newState.goodsPrice+= (newState.carList[i].periodMoney*1000)*newState.carList[i].num/1000;
            }
        }
        console.log(newState.goodsNum,newState.carList[action.payload.index].flag,'xxxxxxxx')
        return newState;
    },
    'GOODS_SELECTEDALL':(state,action)=>{
        let newState=JSON.parse(JSON.stringify(state));
        newState.selectedAll=!newState.selectedAll;
        newState.carList.forEach((item,index)=>{
            item.flag=newState.selectedAll
        })
        for(var i=0;i<newState.carList.length;i++){
            if(newState.carList[i].flag){
                newState.goodsNum+=newState.carList[i].num;
                newState.goodsPrice+= (newState.carList[i].periodMoney*1000)*newState.carList[i].num/1000;
            }
        }
        console.log(newState.goodsNum,newState.goodsPrice,'yyyyyyyyyy')
        return newState;
    },
    'GOODS_DETAILINSERTCAR':(state,action)=>{
        let newState = JSON.parse(JSON.stringify(state));
        newState.goodsNum++;
        return newState;
    },

},defaultState)