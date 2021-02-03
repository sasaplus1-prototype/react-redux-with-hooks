import { combineReducers, createStore } from 'redux';
import { counter } from './counter';
import { response } from './response';

const reducers = combineReducers({
  counter,
  response
});

export type Store = ReturnType<typeof reducers>;

export const store = createStore(reducers);
