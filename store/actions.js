import { DECREMENT_MESSAGE, INCREMENT_MESSAGE, REQUEST_MESSAGE, SUCCESS_MESSAGE, FAILURE_MESSAGE } from './types';
export function decrement() {
    return {
        type: DECREMENT_MESSAGE
    };
}
export function increment() {
    return {
        type: INCREMENT_MESSAGE
    };
}
export function request() {
    return {
        type: REQUEST_MESSAGE
    };
}
export function success(message) {
    return {
        type: SUCCESS_MESSAGE,
        message
    };
}
export function failure(message) {
    return {
        type: FAILURE_MESSAGE,
        message
    };
}
