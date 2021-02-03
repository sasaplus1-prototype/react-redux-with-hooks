import { DecrementAction, IncrementAction, RequestAction, SuccessAction, FailureAction } from './types';
export declare function decrement(): DecrementAction;
export declare function increment(): IncrementAction;
export declare function request(): RequestAction;
export declare function success(message: string): SuccessAction;
export declare function failure(message: string): FailureAction;
