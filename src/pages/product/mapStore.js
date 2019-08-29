import {InsertCarAction} from "@actions/actionCreator"



export const mapStateToProps=(state)=>({
    indexActive:state.week.indexActive,
    goodsList:state.week.goodsList,
    goodsDetail:state.week.goodsDetail,
    Id:state.week.Id,
    productInfo:state.week.productInfo,
    productActivityList:state.week.productActivityList,
    productInfoServiceList:state.week.productInfoServiceList
})
export const mapDispatchToProps = (dispatch)=>({
    handlerInsertCar(Info,flag){
        this.setState({
            flag:true
        })
        setTimeout(()=>{
            this.setState({
                flag:false
            })
        },2000)
        dispatch(InsertCarAction(Info))
     },
    
})