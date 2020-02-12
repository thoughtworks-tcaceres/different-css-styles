import React, { useState } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import App2 from "./App2";

const BasicApp = () => {
  const [selected, setSelected] = useState(null);

  const renderPage = () => {
    switch (selected) {
      case 1:
        return <App />;
      case 2:
        return <App2 />;
      default:
        return <h1>Nothing Selected</h1>;
    }
  };

  const renderButtons = () => {
    return (
      <>
        <button onClick={() => setSelected(null)}>reset</button>
        <button onClick={() => setSelected(1)}>
          Examples of different CSS
        </button>
        <button onClick={() => setSelected(2)}>Parent Examples</button>
      </>
    );
  };

  return (
    <>
      {renderButtons()}
      {renderPage()}
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<BasicApp />, rootElement);
