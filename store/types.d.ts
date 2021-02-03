export declare type CounterState = {
    count: number;
};
export declare const DECREMENT_MESSAGE = "DECREMENT_MESSAGE";
export declare const INCREMENT_MESSAGE = "INCREMENT_MESSAGE";
export declare type DecrementAction = {
    type: typeof DECREMENT_MESSAGE;
};
export declare type IncrementAction = {
    type: typeof INCREMENT_MESSAGE;
};
export declare type CounterActionTypes = DecrementAction | IncrementAction;
export declare type ResponseState = {
    loading: boolean;
    data: {
        message: string;
    };
};
export declare const REQUEST_MESSAGE = "REQUEST_MESSAGE";
export declare const SUCCESS_MESSAGE = "SUCCESS_MESSAGE";
export declare const FAILURE_MESSAGE = "FAILURE_MESSAGE";
export declare type RequestAction = {
    type: typeof REQUEST_MESSAGE;
};
export declare type SuccessAction = {
    type: typeof SUCCESS_MESSAGE;
    message: string;
};
export declare type FailureAction = {
    type: typeof FAILURE_MESSAGE;
    message: string;
};
export declare type ResponseActionTypes = RequestAction | SuccessAction | FailureAction;
