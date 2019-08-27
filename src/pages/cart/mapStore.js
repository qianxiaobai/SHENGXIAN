
import {changeindex,goodsTypesAsyncAction,goodsTypesAsyncAction0,goodsDetailsAsyncAction} from "@actions/actionCreator"

export const mapStateToProps=(state)=>({
    indexActive:state.week.indexActive,
    goodsList:state.week.goodsList,
    goodsDetail:state.week.goodsDetail,
    Id:state.week.Id
})



export const mapDispatchToProps = (dispatch)=>({
    clickHandler(index){
        dispatch(changeindex(index))
    },

    handleToggleTypes0(sourcetype,index){
       
        dispatch(goodsTypesAsyncAction0(sourcetype,index))
    },

    handleToggleTypes(sourcetype,Id,index){
      
        dispatch(goodsTypesAsyncAction(sourcetype,Id,index))
    },
    clickGoods(props,Id,name){
        console.log(props)
        props.history.push({pathname:"/detail",query:{name:name}})
        dispatch(goodsDetailsAsyncAction(props,Id,name))
    }
})