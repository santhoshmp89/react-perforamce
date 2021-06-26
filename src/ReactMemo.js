import React from "react";
import Input from "./react-memo/Input";
import ObjectRef from "./react-memo/ObjectRef";

const ReactMemo = () => {
  const [counter, setCounter] = React.useState(0);
  const a = "123";
  const objectA = {
    label: "Name",
    value: "Santhosh"
  };
  return (
    <>
      <h1>React.memo</h1>
      <button onClick={() => setCounter(counter + 1)}>Add {counter}</button>
      <Input value={a} />
      <br />
      <br />
      <ObjectRef info={objectA} />
    </>
  );
};

export default ReactMemo;
