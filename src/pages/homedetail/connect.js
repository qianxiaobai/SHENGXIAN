import {goodsProductAsyncAction} from "@actions/actionCreator"


export const  mapStateToProps =(state)=>({
    homeDetailList:state.homeStore.homeDetailList

})

export const  mapDispatchToProps =(dispatch)=>({
    sendinfo(name,id){
        console.log(this.props.history.push("/product"))
        console.log(name,id)
        dispatch(goodsProductAsyncAction(id))
    }
    })

