import React from "react";
import Header from "./Header";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header title="Stopwatch" color="#D9514E" id="head1" />
      <Stopwatch />
      <Header title="Timer" color="#D9514E" id="head2" />
      <Timer />
    </>
  );
}
