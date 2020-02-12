import React from "react";
import "./styles.css";

import Example1 from "./scss/Example1";
// import Example2 from "./stylesheet/Example2";
// import Example3 from "./styled-component/Example3";

import data from "./data";

export default function App() {
  return (
    <div className="App">
      <Example1 data={data} />
      {/* <Example2 data={data} /> */}
      {/* <Example3 data={data} /> */}
    </div>
  );
}
