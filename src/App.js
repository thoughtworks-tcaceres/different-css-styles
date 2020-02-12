import React, { useState } from "react";

import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";

import data from './data'
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Example1 data={data}/>
      {/* <Example2 />
      <Example3 /> */}
    </div>
  );
}
