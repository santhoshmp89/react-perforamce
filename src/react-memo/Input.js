import React from "react";

const Input = (props) => {
  console.log("Input rerender");
  return <input value={props.value} />;
};

export default React.memo(Input);
