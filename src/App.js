import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import { Button } from "./Button";

export default function App() {
  const [counter, setCounter] = useState(0);

  const amountRef = useRef();

  const listOfCount = [1, 3, 5, 8];

  useEffect(() => {
    amountRef.current.focus();
  });

  useEffect(() => {
    document.title = "You have clicked " + counter + " times";
  }, [counter]);

  const onclick = useCallback(
    n => {
      setCounter(c => c + n);
    },
    [setCounter]
  );

  return (
    <div className="container txt-center pt-7">
      <input ref={amountRef} className="mt-5" />
      <br />
      {listOfCount.map(count => (
        <Button counterfn={onclick} label={count} n={count} key={count} />
      ))}

      <Button counterfn={onclick} label="cont up" n={1} />
      <br />
      <span> result = {counter}</span>
      <br />
      <span className="mt-3"> ___________________________</span>

      <br />
    </div>
  );
}
