import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';
import { userData } from '../Register/reducers';

const rootReducer = combineReducers({
    userData
})

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
)