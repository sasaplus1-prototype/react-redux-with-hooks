import {
  DECREMENT_MESSAGE,
  INCREMENT_MESSAGE,
  DecrementAction,
  IncrementAction,
  REQUEST_MESSAGE,
  SUCCESS_MESSAGE,
  FAILURE_MESSAGE,
  RequestAction,
  SuccessAction,
  FailureAction
} from './types';

export function decrement(): DecrementAction {
  return {
    type: DECREMENT_MESSAGE
  };
}

export function increment(): IncrementAction {
  return {
    type: INCREMENT_MESSAGE
  };
}

export function request(): RequestAction {
  return {
    type: REQUEST_MESSAGE
  };
}

export function success(message: string): SuccessAction {
  return {
    type: SUCCESS_MESSAGE,
    message
  };
}

export function failure(message: string): FailureAction {
  return {
    type: FAILURE_MESSAGE,
    message
  };
}
