import  {loginChangeVal,loginSubmitVal} from "@actions/actionsCreater"

export const  mapStateToProps =(state)=>({
    phoneLogin:state.loginStore.phoneLogin,
    pwdLogin:state.loginStore.pwdLogin,
    successshow:state.loginStore.successshow,
    errorshow:state.loginStore.successVal,
    successVal:state.loginStore.successVal
})


export const  mapDispatchToProps =(dispatch)=>({
    changeHandler(sign,e){
        let val = e.target.value
        dispatch(loginChangeVal(val,sign))
    },
    clickSubmit(val){
        // console.log(val)
        dispatch(loginSubmitVal(val))
    }

})