import { combineReducers, createStore } from 'redux';
import { counter } from './counter';
import { response } from './response';
const reducers = combineReducers({
    counter,
    response
});
export const store = createStore(reducers);
