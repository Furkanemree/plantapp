import { combineReducers } from 'redux'
import * as auth from "./auth/reducers"
import * as apiCall from "./api-call/reducers"
import * as theme from "./theme/reducers"
import * as root from "./root/reducers"


export default combineReducers({
    auth: auth.reducer,
    apiCall: apiCall.reducer,
    theme: theme.reducer,
    root: root.reducer,
})