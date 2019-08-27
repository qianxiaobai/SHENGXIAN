import {createAction} from "redux-actions"
import { home_api,centerNav_api } from "@api/home.js"

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














