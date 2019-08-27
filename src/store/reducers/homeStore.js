import {handleActions} from "redux-actions";

const defaultState = {
            navListLeft:[],
            navListRight:[],
            arr: [
                { PicUrl: "http://pic2.34580.cn/group1/M00/DD/79/wKgNYl1fCPqAbv0dAAEm_iZyhhc059.gif" },
                { PicUrl: "http://pic2.34580.cn/group1/M00/F2/19/wKgNY11egyGAPGOiAADfJyhXMhc474.jpg" },
                { PicUrl: "http://pic2.34580.cn/group1/M00/DE/CA/wKgNYl1hUbWAVsivAAJPMGbTehE769.jpg" },
                { PicUrl: "http://pic2.34580.cn/group1/M00/F3/0E/wKgNY11f_puACkS3AAIodHxPElY507.jpg" },
                { PicUrl: "http://pic2.34580.cn/group1/M00/F1/D2/wKgNY11eQTiAF2lEAAFe91HTrcE164.jpg" },
                { PicUrl: "http://pic2.34580.cn/group1/M00/F2/C5/wKgNY11fsAOAPxXlAAKp-tgpUXA877.png" }
            ],arr0: [],arr1: [],arr2: [],arr3: [],arr4: [],arr5: [],arr6: [],arr7: [],arr8: [],arr9:[],arr10:[], arr11:[], arr12:[], arr13:[], arr14:[], arr15:[], 
}

export default handleActions({
    HOME_DATA:(state,action)=>{
        let homestate = JSON.parse(JSON.stringify(state))
        // console.log(action.payload)
        homestate.arr0 = action.payload[3].AdvInfo.AdvItems
        homestate.arr1 = action.payload[11].AdvInfo.AdvItems
        homestate.arr2 = action.payload[13].AdvInfo.AdvItems
        homestate.arr3 = action.payload[15].AdvInfo.AdvItems
        homestate.arr4 = action.payload[17].AdvInfo.AdvItems
        homestate.arr5 = action.payload[19].AdvInfo.AdvItems
        homestate.arr6 = action.payload[21].AdvInfo.AdvItems
        homestate.arr7 = action.payload[23].AdvInfo.AdvItems
        homestate.arr8 = action.payload[9].AdvInfo.AdvItems
        homestate.arr9 = action.payload[8].ProductItems
        homestate.arr10 = action.payload[10].ProductItems
        homestate.arr11 = action.payload[12].ProductItems
        homestate.arr12= action.payload[14].ProductItems
        homestate.arr13 = action.payload[16].ProductItems
        homestate.arr14 = action.payload[18].ProductItems
        homestate.arr15 = action.payload[24].ProductItems
        return homestate
    },
    CENTER_DATA:(state,action)=>{
        let centerstate =  JSON.parse(JSON.stringify(state))
        // console.log(action.payload)
        centerstate.navListLeft = action.payload.splice(10)
        centerstate.navListRight= action.payload.splice(-10)
        return centerstate
    }

},defaultState)