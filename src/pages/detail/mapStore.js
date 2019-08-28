import {goodsPXAsyncAction} from "@actions/actionCreator"



export const mapStateToProps=(state)=>({
    indexActive:state.week.indexActive,
    goodsList:state.week.goodsList,
    goodsDetail:state.week.goodsDetail,
    Id:state.week.Id
})
export const mapDispatchToProps = (dispatch)=>({
    handlerToggle(index,Id,ids){
       this.setState({
           index:index
       })
       dispatch(goodsPXAsyncAction(Id,ids))


    },

})
