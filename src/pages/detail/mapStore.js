import {goodsPXAsyncAction,goodsProductAsyncAction,goodsrDetailInsertCarAction} from "@actions/actionCreator"



export const mapStateToProps=(state)=>({
    indexActive:state.week.indexActive,
    goodsList:state.week.goodsList,
    goodsDetail:state.week.goodsDetail,
    Id:state.week.Id,
    productInfo:state.week.productInfo,
    productActivityList:state.week.productActivityList,
    productInfoServiceList:state.week.productInfoServiceList,
    goodsNum:state.week.goodsNum,
   
})
export const mapDispatchToProps = (dispatch)=>({
    handlerToggle(index,Id,ids){
       this.setState({
           index:index
       })
       dispatch(goodsPXAsyncAction(Id,ids))
    },
    handlerProduct(props,ssuId){
        props.history.push({pathname:"/product",query:{ssuId}})
        dispatch(goodsProductAsyncAction(ssuId))
     },
     handlerDetailInsertCar(){
        dispatch(goodsrDetailInsertCarAction())
     }

})
