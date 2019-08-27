import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import homeStore from "./reducers/homeStore"

const reducer = combineReducers({
    homeStore
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;