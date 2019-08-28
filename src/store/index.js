import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import homeStore from "./reducers/homeStore"
import loginStore from  "./reducers/loginStore"
import week from "./reducers/week_choice"
import searchStore from "./reducers/searchstore"

const reducer = combineReducers({
    homeStore,
    loginStore,
    week,
    searchStore
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;