import {InsertCarAction,GoodsAddAction,GoodsReduceAction,GoodsSDAction} from "@actions/actionCreator"



export const mapStateToProps=(state)=>({
    indexActive:state.week.indexActive,
    goodsList:state.week.goodsList,
    goodsDetail:state.week.goodsDetail,
    Id:state.week.Id,
    productInfo:state.week.productInfo,
    productActivityList:state.week.productActivityList,
    productInfoServiceList:state.week.productInfoServiceList,
    carList:state.week.carList,
    n:state.week.n
})
export const mapDispatchToProps = (dispatch)=>({
    handlerInsertCar(Info){
        dispatch(InsertCarAction(Info))
     },
     handlerAdd(index,num){
        dispatch(GoodsAddAction(index,num))
     },
     handlerReduce(index,num){
        dispatch(GoodsReduceAction(index,num))
     },
     handlerChangeInput(index,e){
        let num=e.target.value;
        dispatch(GoodsSDAction(index,num))
     }

})