import React from "react";
import "./Example1.scss";

const Example1 = ({ data }) => {
  console.log(data);
  return (
    <div className="outer-box">
      <div className="header-box">Example 1 - SCSS</div>
      <div className="content-box">
        <table className="main-table">
          <thead>
            <tr>
              {Object.keys(data[0]).map((field, i) => {
                return <th key={i}>{field}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => {
              return (
                <tr key={i}>
                  {Object.values(row).map((field, j) => {
                    return <td key={j}>{field}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Example1;
