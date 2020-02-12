import React from "react";
import {
  StyledOuterBox,
  StyledHeaderBox,
  StyledContentBox,
  StyledTableBox,
  StyledTheadBox,
  StyledTdBox
} from "./styles";

const Example3 = ({ data }) => {
  return (
    <StyledOuterBox>
      <StyledHeaderBox>Example 3 - styled components</StyledHeaderBox>
      <StyledContentBox>
        <StyledTableBox>
          <StyledTheadBox>
            <tr>
              {Object.keys(data[0]).map((field, i) => {
                return <th key={i}>{field}</th>;
              })}
            </tr>
          </StyledTheadBox>
          <tbody>
            {data.map((row, i) => {
              return (
                <tr key={i}>
                  {Object.values(row).map((field, j) => {
                    return <StyledTdBox key={j}>{field}</StyledTdBox>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </StyledTableBox>
      </StyledContentBox>
    </StyledOuterBox>
  );
};

export default Example3;
