import React from "react";
import glamorous from "glamorous";

const GlamorousButton = glamorous.button(
  {
    display: "inline-block",
    borderRadius: 3,
    padding: "0.5rem 0",
    margin: "0.5rem 1rem",
    border: "2px solid papayawhip"
  },
  ({ primary, width }) => ({
    backgroundColor: primary ? "papayawhip" : "steelblue",
    color: primary ? "steelblue" : "papayawhip",
    width: width ? width : "11rem"
  })
);

export default GlamorousButton;
