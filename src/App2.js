import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import Button from "./Button";
import { setTimeout } from "timers";

export default function App() {
  const [tall, setTall] = useState(0);
  const [title, setTitle] = useState("");

  const amountRef = useRef();
  const reachMaxRef = useRef(false);

  const handelTitle = () => setTitle("Ac Milan ");
  const titleReset = () => setTitle("Idris Sheikh");

  const handelConuter = () => {
    if (!reachMaxRef.current) {
      if (tall >= 10) {
        reachMaxRef.current = true;
      } else {
        setTall(c => c + (+amountRef.current.value || 1));
      }
    } else console.log("you reached max clicked");
  };

  useEffect(() => {
    amountRef.current.focus();
  });

  useEffect(() => {
    //console.log("inside effect 1");
    document.title = title;
    return () => {
      setTimeout(() => {
        setTitle("");
        // console.log("Title be changed and cleanUp");
      }, 1000);
    };
    console.log(title);
  }, [title]);

  useEffect(() => {
    //console.log("inside effect 2");
    document.title = "You have clicked " + tall + " times";
    //console.log(tall);
  }, [tall]);

  // function addTall() {
  //   setTall(tall + 1);
  // }
  // function minstTall() {
  //   setTall(tall - 1);
  // }

  // function ganger2() {
  //   setTall(tall * 2);
  // }

  return (
    <div className="container txt-center pt-7">
      <input ref={amountRef} className="mt-5" />
      <br />
      {/* <button className="btn btn-primary mt-3" onClick={addTall}>
        +
      </button>
      <br />
      <button className="btn btn-primary mt-3" onClick={minstTall}>
        -
      </button>
      <br />
      <button onClick={ganger2} className="btn btn-primary mt-3">
        {" "}
        *{" "}
      </button>
      <br />
      <button onClick={handelTitle} className="btn btn-primary mt-3">
        change title{" "}
      </button>
      <br />
      <button onClick={titleReset} className="btn btn-primary mt-3">
        reset Title{" "}
      </button>
      <br /> */}
      {/* <button onClick={handelConuter} className="btn btn-primary mt-3"> */}
      {/* <button
        onClick={() => setTall(tall + 1)}
        className="btn btn-primary mt-3"
      >
        antall trykk{" "}
      </button> */}
      <Button counter={() => setTall(tall + 1)} label="cont up"></Button>
      <br />
      <span> result = {tall}</span>
      <br />
      <span> ___________________________</span>

      <br />
    </div>
  );
}
