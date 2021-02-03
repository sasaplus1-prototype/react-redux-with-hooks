import { DECREMENT_MESSAGE, INCREMENT_MESSAGE } from './types';
const initialState = {
    count: 0
};
function decrement(state) {
    const { count } = state;
    return {
        count: count - 1
    };
}
function increment(state) {
    const { count } = state;
    return {
        count: count + 1
    };
}
export function counter(state = initialState, action) {
    switch (action.type) {
        case DECREMENT_MESSAGE:
            return decrement(state);
        case INCREMENT_MESSAGE:
            return increment(state);
        default:
            return state;
    }
}
