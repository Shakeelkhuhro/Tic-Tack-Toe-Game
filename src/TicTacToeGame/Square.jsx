import React from "react";

const Square = (props) => {
  return (
    <div
    onClick={props.onClick}
      style={{
        border: "1px solid",
        // height: "100px",
        width: "5vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="square"
    >
      <h5 className="value-sq">{props.value}</h5>
    </div>
  );
};

export default Square;
