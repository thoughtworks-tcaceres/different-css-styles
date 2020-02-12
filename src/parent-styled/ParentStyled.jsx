import React, { useState } from "react";
import { StyledDiv } from "./Styles";

const ParentStyled = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
      <button onClick={() => setIsMobile(!isMobile)}>toggle isMobile</button>
      <p>isMobile : {isMobile.toString()}</p>
      <StyledDiv isMobile={isMobile}>DUMMY CONTENT</StyledDiv>
    </div>
  );
};

export default ParentStyled;
