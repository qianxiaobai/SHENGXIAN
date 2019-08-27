import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import homeStore from "./reducers/homeStore"
import loginStore from  "./reducers/loginStore"
const reducer = combineReducers({
    homeStore,
    loginStore
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;