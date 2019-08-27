import  {changeVal,submitVal} from "@actions/actionsCreater"

export const  mapStateToProps =(state)=>({
    phoneVal:state.loginStore.phoneVal,
    passwordVal:state.loginStore.passwordVal,
    successshow:state.loginStore.successshow,
    errorshow:state.loginStore.successVal,
    successVal:state.loginStore.successVal
})


export const  mapDispatchToProps =(dispatch)=>({
   
    changeHandler(sign,e){
        let val = e.target.value
        dispatch(changeVal(val,sign))
    },
    clickSubmit(val){
        dispatch(submitVal(val))
    }

})
