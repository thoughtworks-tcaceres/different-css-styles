import React from "react";
import "./Example1.scss";

const Example1 = ({ data }) => {
  console.log(data);
  return (
    <div className="outer-box">
      <div className="header-box">Example 1 - SCSS</div>
      <div className="content-box">
        <ul className="">
          {data.map((person, i) => {
            return (
              <li key={i}>
                <pre>{person}</pre>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Example1;
