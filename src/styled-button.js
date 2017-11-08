import React from "react";
import styled, { css } from "styled-components";

const primaryMixin = css`
  background: papayawhip;
  color: steelblue;
`;

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: ${({ width }) => (width ? width : "11rem")};
  background: steelblue;
  color: papayawhip;
  border: 2px solid papayawhip;

  ${props => props.primary && primaryMixin};
`;

export default StyledButton;
