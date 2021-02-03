export type CounterState = {
  count: number;
};

export const DECREMENT_MESSAGE = 'DECREMENT_MESSAGE';
export const INCREMENT_MESSAGE = 'INCREMENT_MESSAGE';

export type DecrementAction = {
  type: typeof DECREMENT_MESSAGE;
};
export type IncrementAction = {
  type: typeof INCREMENT_MESSAGE;
};
export type CounterActionTypes = DecrementAction | IncrementAction;

//------------------------------------------------------------------------------

export type ResponseState = {
  loading: boolean;
  data: {
    message: string;
  };
};

export const REQUEST_MESSAGE = 'REQUEST_MESSAGE';
export const SUCCESS_MESSAGE = 'SUCCESS_MESSAGE';
export const FAILURE_MESSAGE = 'FAILURE_MESSAGE';

export type RequestAction = {
  type: typeof REQUEST_MESSAGE;
};
export type SuccessAction = {
  type: typeof SUCCESS_MESSAGE;
  message: string;
};
export type FailureAction = {
  type: typeof FAILURE_MESSAGE;
  message: string;
};
export type ResponseActionTypes = RequestAction | SuccessAction | FailureAction;
