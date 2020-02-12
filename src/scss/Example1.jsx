import React from "react";
import "./Example1.scss";

const Example1 = ({ data }) => {
  return (
    <div className="outerBox">
      <div className="headerBox">Example 1 - SCSS</div>
      <div className="contentBox">
        <table className="tableBox">
          <thead className="theadBox">
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
                    return <td key={j} className="tdBox">{field}</td>;
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
