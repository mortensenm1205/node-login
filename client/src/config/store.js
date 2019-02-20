import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';
import { userErrorData ,userData } from '../Register/reducers';

const rootReducer = combineReducers({
    user: userData,
    errors: userErrorData
})

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
)