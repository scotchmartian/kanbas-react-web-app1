import React from "react";
import ReduxExamples from "./ReduxExamples";
import PassingFunctions from "./PassingFunctions";
import ParentStateComponent from "./ParentStateComponent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import ClickEvent from "./ClickEvent";
export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <>
    <h2> Lab 4</h2>
  

    <div id="wd-passing-functions">
      <ClickEvent/>
      <PassingDataOnEvent/>
      <h2>Lab 4</h2>
      ...
      <PassingFunctions theFunction={sayHello} />
      <ParentStateComponent/>
      <Counter/>
      <EventObject/>
      <ReduxExamples/>

    </div>
    </>
  );
}
