import React, { useState } from "react";

import mobileStyles from "./mobile.module.scss";
import desktopStyles from "./desktop.module.scss";

const ParentModule = () => {
  const [isMobile, setIsMobile] = useState(false);
  const currStyle = isMobile ? mobileStyles : desktopStyles;

  return (
    <div>
      <button onClick={() => setIsMobile(!isMobile)}>toggle isMobile</button>
      <p>isMobile : {isMobile.toString()}</p>
      <div className={currStyle.divTest}>DUMMY CONTENT</div>
    </div>
  );
};

export default ParentModule;
