import React, { useState } from "react";

export default function Clock(props) {
  let [clock1, setClock1] = useState(0);
  let [clock2, setClock2] = useState(0);
  let [clock3, setClock3] = useState(0);
  let [clock4, setClock4] = useState(0);
  let [run, setRun] = useState(false);
  const start = e => {
    setRun(true);
  };
  const stop = e => {
    setRun(false);
  };

  const reset = e => {
    clearTimeout(timer);
    stop();
    setClock1(0);
    setClock2(0);
    setClock3(0);
    setClock4(0);
  };

  const timer = setTimeout(_ => {
    if (clock1 < 9) {
      setClock1(clock1 + 1);
    } else if (clock1 === 9) {
      setClock1(0);
      setClock2(clock2 + 1);
    }

    if (clock1 === 9 && clock2 === 5) {
      setClock3(clock3 + 1);
      setClock1(0);
      setClock2(0);
    }

    if (clock3 === 9) {
      setClock3(0);
      setClock4(clock4 + 1);
    }
  }, 1000);

  if (run === true) {
  } else {
    clearTimeout(timer);
  }

  return (
    <div class="all" style={{ fontWeight: "bold" }}>
      <div class="clock">
        {clock4}
        {clock3}:{clock2}
        {clock1}
      </div>
      <br />
      <br />
      <button onClick={start} class="buttons">
        Start
      </button>
      <button onClick={stop} class="buttons">
        Stop
      </button>
      <button onClick={reset} class="buttons">
        Reset
      </button>
    </div>
  );
}
