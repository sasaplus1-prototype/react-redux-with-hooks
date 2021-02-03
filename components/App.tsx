import * as React from 'react';
import { useSelector } from 'react-redux';
import {
  useAsyncDecrement,
  useAsyncIncrement,
  useDecrement,
  useIncrement,
  useFetchData
} from '../store/hooks';

import type { Store } from '../store';

type Props = {};

export function App(props: Props): JSX.Element {
  const counter = useSelector<Store, Store['counter']>(
    (state) => state.counter
  );

  const response = useSelector<Store, Store['response']>(
    (state) => state.response
  );

  const aDec = useAsyncDecrement();
  const aInc = useAsyncIncrement();
  const dec = useDecrement();
  const inc = useIncrement();

  const fetchData = useFetchData();

  return (
    <div>
      <h1>It Works!</h1>
      <label>{counter.count}</label>
      <br />
      <button type="button" onClick={inc}>
        increment
      </button>
      <button type="button" onClick={dec}>
        decrement
      </button>
      <br />
      <button type="button" onClick={aInc}>
        async increment
      </button>
      <button type="button" onClick={aDec}>
        async decrement
      </button>
      <hr />
      <label>{response.data.message}</label>
      <br />
      <button type="button" onClick={fetchData}>
        fetch
      </button>
    </div>
  );
}
