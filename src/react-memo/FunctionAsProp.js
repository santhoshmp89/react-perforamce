import React from "react";

const FunctionAsProp = (props) => {
  console.log("FunctionAsProp re-render");
  return (
    <>
      Function as props ex:
      <button onClick={props.callBackFunc}>Callback</button>
    </>
  );
};

export default React.memo(FunctionAsProp);
