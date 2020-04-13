import React, { useState, useEffect } from "react";
import "./App.css";
import { setTimeout } from "timers";

export default function App() {
  const [tall, setTall] = useState(0);
  const [title, setTitle] = useState("");
  //const [antallclick, setAntallClick] = useState(0);
  //const [farge, setFarge] = useState("");

  const handelTitle = () => setTitle("Ac Milan ");
  const titleReset = () => setTitle("Idris Sheikh");
  // const handelfarge = () => setFarge("Black");

  useEffect(() => {
    console.log("inside effect 1");
    document.title = title;
    return () => {
      setTimeout(() => {
        setTitle("");
        console.log("Title be changed and cleanUp");
      }, 1000);
    };
    console.log(title);
  }, [title]);

  useEffect(() => {
    console.log("inside effect 2");
    document.title = "You have clicked " + tall + " times";
    console.log(tall);
  }, [tall]);

  // function antallClick() {
  //   if (handelTitle ) {
  //     setAntallClick(antallclick + 1);
  //   }
  // }

  function addTall() {
    setTall(tall + 1);
  }
  function minstTall() {
    setTall(tall - 1);
  }

  function ganger2() {
    setTall(tall * 2);
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={addTall}>
        +
      </button>
      <br />
      <button className="btn btn-primary" onClick={minstTall}>
        -
      </button>
      <br />
      <button onClick={ganger2}> * </button>
      <br />
      <br />
      <button onClick={handelTitle}>change title </button>
      <br />
      <button onClick={titleReset}>reset Title </button>
      <br />
      <span>{tall}</span> <br />
    </div>
  );
}
