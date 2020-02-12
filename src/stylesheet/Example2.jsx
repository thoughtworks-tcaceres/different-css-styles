import React from "react";
import styles from "./Example2.module.scss";

const Example2 = ({ data }) => {
  return (
    <div className={styles.outerBox}>
      <div className={styles.headerBox}>Example 2 - module stylesheet</div>
      <div className={styles.contentBox}>
        <table className={styles.tableBox}>
          <thead className={styles.theadBox}>
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
                    return (
                      <td key={j} className={styles.tdBox}>
                        {field}
                      </td>
                    );
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

export default Example2;
