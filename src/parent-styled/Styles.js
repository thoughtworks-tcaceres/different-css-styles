import styled from "styled-components";

export const StyledDiv = styled.div`
  text-align: center;
  border: ${({ isMobile }) =>
    isMobile ? "1px solid black" : "1px solid pink"};
  width: ${props => props.isMobile ? "300px" : "600px"};
`;
