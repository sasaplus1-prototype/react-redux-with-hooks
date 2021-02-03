import {
  CounterActionTypes,
  CounterState,
  DECREMENT_MESSAGE,
  INCREMENT_MESSAGE
} from './types';

const initialState: CounterState = {
  count: 0
};

function decrement(state: CounterState): CounterState {
  const { count } = state;

  return {
    count: count - 1
  };
}

function increment(state: CounterState): CounterState {
  const { count } = state;

  return {
    count: count + 1
  };
}

export function counter(
  state: CounterState = initialState,
  action: CounterActionTypes
): CounterState {
  switch (action.type) {
    case DECREMENT_MESSAGE:
      return decrement(state);
    case INCREMENT_MESSAGE:
      return increment(state);
    default:
      return state;
  }
}
