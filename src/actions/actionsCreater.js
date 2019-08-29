import {createAction} from "redux-actions"
import { home_api,centerNav_api,homeDetail_api,search_api,hotSearch_api,searchdetail_api} from "@api/home.js"

//------homedata
//同步
export const homeAction = createAction("HOME_DATA",(val)=>val)
//异步
export const homeAsynsAction = ()=>{
    return async (dispatch)=>{
        let homedata = await home_api();
        let homData = homedata.Data.FloorInfo.ConfigHomeFloors
        // console.log(centerdata.Data.ShortcutIcons)
        dispatch(homeAction(homData))
    }
}

//------centerdata
//同步
export const centerAction = createAction("CENTER_DATA",(val)=>val)
//异步
export const centerAsynsAction = ()=>{
    return async (dispatch)=>{
        let centerdata = await centerNav_api()
        let centerData = centerdata.Data.ShortcutIcons
        // console.log(centerdata.Data.ShortcutIcons)
        dispatch(centerAction(centerData))
    }
}

// 注册
export const changeVal = createAction("CHANGEVAL",(val,sign)=>({
    val,sign
}))
//注册时   将this.props传过去
export const submitVal = createAction("SUBVAL",(val)=>val);



// 登录

export const loginChangeVal = createAction("LOGINCHANGEVAL",(val,sign)=>({
    val,sign
}))

export const loginSubmitVal = createAction("LOGINSUBVAL",(val)=>val)




//homeldeatil


export const homedetailAction = createAction("HOMEDETAIL",(val)=>val)

export const homeDetailAsync = ()=>{
    return async (dispatch) =>{
        let data = await homeDetail_api();
        // console.log(data)
        dispatch(homedetailAction(data))
    }
}


//search
export const searchAction = createAction("SEARCH",(val)=>val)

export const searchAsyncAction=()=>{
    return async (dispatch) =>{
        let data = await hotSearch_api()
        dispatch(searchAction(data))
    }
}

export const changeAction = createAction("CHANGE",(val)=>val)


export const searchchangeAction = createAction("SEARCHCHANGE",(value)=>value)
export const searchChangeAsyncAction=(value)=>{
    return async (dispatch) =>{
        let timer;
        clearTimeout(timer)
            timer = setTimeout( async ()=>{
            let data = await search_api(9,value,10)
            dispatch(searchchangeAction(data))
        },500)
    }
}

//搜索按钮
export const sousuobtn = createAction("SEARCHBTN")
//删除
export const deldetliAction=createAction("DELETELI",(index)=>index)
// 清空搜索历史
export const deleteAllAction = createAction("DELETEALL")



export const searchdetailAction = createAction("SEARCHDETAIL",(data)=>data)

export const searchDetailAsync = (name)=>{
    return async(dispatch)=>{
        let data = await searchdetail_api(name)
        console.log(data)
        dispatch(searchdetailAction(data,2))
    }
}