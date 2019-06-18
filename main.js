import React, { useState, useEffect, useRef } from 'react';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/index.css';
import { join } from 'lodash-es';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Main = () => {
  const [count, setCount] = useState(1000);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  // Display the result in the element with id="demo"
  return (
    <div id="timeInterval">
      <div>{count}</div>
      <div>
        <Button onClick={() => setCount(0)}>{join(['Reset', 'Count', 'Now', '!'], ' ')}</Button>
      </div>
    </div>
  );
};
export default Main;
