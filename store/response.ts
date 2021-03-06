import {
  ResponseActionTypes,
  ResponseState,
  REQUEST_MESSAGE,
  SUCCESS_MESSAGE,
  FAILURE_MESSAGE
} from './types';

const initialState: ResponseState = {
  loading: false,
  data: {
    message: ''
  }
};

export function response(
  state: ResponseState = initialState,
  action: ResponseActionTypes
): ResponseState {
  switch (action.type) {
    case REQUEST_MESSAGE:
      return {
        loading: true,
        data: { message: 'loading...' }
      };
    case SUCCESS_MESSAGE:
    case FAILURE_MESSAGE:
      return {
        loading: false,
        data: { message: action.message }
      };
    default:
      return state;
  }
}
