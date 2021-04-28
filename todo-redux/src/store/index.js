import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import todos from './todos/reducer';
import filter from './filter/reducer';

const rootReducer = combineReducers({
    todos,
    filter,
});

const enchancer = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, enchancer);

export default store;
