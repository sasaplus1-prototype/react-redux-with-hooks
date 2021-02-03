import * as React from 'react';
import { useSelector } from 'react-redux';
import { useAsyncDecrement, useAsyncIncrement, useDecrement, useIncrement, useFetchData } from '../store/hooks';
export function App(props) {
    const counter = useSelector((state) => state.counter);
    const response = useSelector((state) => state.response);
    const aDec = useAsyncDecrement();
    const aInc = useAsyncIncrement();
    const dec = useDecrement();
    const inc = useIncrement();
    const fetchData = useFetchData();
    return (React.createElement("div", null,
        React.createElement("h1", null, "It Works!"),
        React.createElement("label", null, counter.count),
        React.createElement("br", null),
        React.createElement("button", { type: "button", onClick: inc }, "increment"),
        React.createElement("button", { type: "button", onClick: dec }, "decrement"),
        React.createElement("br", null),
        React.createElement("button", { type: "button", onClick: aInc }, "async increment"),
        React.createElement("button", { type: "button", onClick: aDec }, "async decrement"),
        React.createElement("hr", null),
        React.createElement("label", null, response.data.message),
        React.createElement("br", null),
        React.createElement("button", { type: "button", onClick: fetchData }, "fetch")));
}
