import React, { useState } from "react";

import Example1 from "./scss/Example1";
import Example2 from "./stylesheet/Example2";
import Example3 from "./styled-component/Example3";

import data from "./data";

export default function App() {
  const [selected, setSelected] = useState(null);

  const renderContent = () => {
    switch (selected) {
      case 1:
        return <Example1 data={data} />; //scss
      case 2:
        return <Example2 data={data} />; //module stylesheet
      case 3:
        return <Example3 data={data} />; //styled component
      default:
        return <h1>Nothing Selected</h1>;
    }
  };

  const renderButtons = () => {
    return (
      <>
        <button onClick={() => setSelected(null)}>reset</button>
        <button onClick={() => setSelected(1)}>SCSS</button>
        <button onClick={() => setSelected(2)}>module stylesheet</button>
        <button onClick={() => setSelected(3)}>styled component</button>
      </>
    );
  };

  return (
    <div>
      {renderButtons()}
      {renderContent()}
    </div>
  );
}
