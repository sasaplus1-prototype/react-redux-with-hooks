declare const reducers: import("redux").Reducer<import("redux").CombinedState<{
    counter: import("./types").CounterState;
    response: import("./types").ResponseState;
}>, import("./types").DecrementAction | import("./types").IncrementAction | import("./types").RequestAction | import("./types").SuccessAction | import("./types").FailureAction>;
export declare type Store = ReturnType<typeof reducers>;
export declare const store: import("redux").Store<import("redux").CombinedState<{
    counter: import("./types").CounterState;
    response: import("./types").ResponseState;
}>, import("./types").DecrementAction | import("./types").IncrementAction | import("./types").RequestAction | import("./types").SuccessAction | import("./types").FailureAction>;
export {};
