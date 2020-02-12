import React, { useState } from "react";
import ParentStyled from "./parent-styled/ParentStyled";
import ParentModuleStylesheet from './parent-module-stylesheet/ParentModule';

const App2 = () => {
  const [selected, setSelected] = useState(null);

  const renderContent = () => {
    switch (selected) {
      case 1:
        return <ParentStyled />; //parent styled
        case 2:
          return <ParentModuleStylesheet/>; //parent module stylesheet
      default:
        return <h1>Nothing Selected</h1>;
    }
  };

  const renderButtons = () => {
    return (
      <>
        <button onClick={() => setSelected(null)}>reset</button>
        <button onClick={() => setSelected(1)}>Parent Styled</button>
        <button onClick={() => setSelected(2)}>Parent Module Stylesheet</button>
      </>
    );
  };

  return (
    <div>
      {renderButtons()}
      {renderContent()}
    </div>
  );
};
export default App2;
