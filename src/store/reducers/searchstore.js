import { handleActions} from "redux-actions";



const defaultState = {
    n:100,
    hotlist:[],
    historylist:JSON.parse(sessionStorage.getItem("history"))||[],
    searchlist:[],
    show:false,
    inputVal:"",
    changelist:[],
}

export default handleActions({
    SEARCH:(state,action)=>{
        let hotstate= JSON.parse(JSON.stringify(state))
        hotstate.hotlist = action.payload.Data
        return hotstate
    },
    CHANGE:(state,action)=>{
        let changestate =JSON.parse(JSON.stringify(state))
        changestate.inputVal = action.payload
        changestate.show=true
        return changestate
    },
    SEARCHCHANGE:(state,action)=>{
        let search = JSON.parse(JSON.stringify(state))
        search.changelist = action.payload.Data
        return search
    },
    SEARCHBTN:(state,action)=>{
        let search = JSON.parse(JSON.stringify(state))
        let obj = {
            val:search.inputVal
        }
        search.historylist.push(obj)
        sessionStorage.setItem("history",JSON.stringify(search.historylist))
        search.inputVal=""
        search.show=false;
        return search
    },
    DELETELI:(state,action)=>{
        let search = JSON.parse(JSON.stringify(state))
        search.historylist.splice(action.payload,1)
        sessionStorage.setItem("history",JSON.stringify(search.historylist))
        return search
    },
    DELETEALL:(state,action)=>{
        let search = JSON.parse(JSON.stringify(state))
        sessionStorage.removeItem("history")
        search.historylist.length=0;
        return search
    }


},defaultState)