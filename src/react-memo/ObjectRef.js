import React from "react";

const ObjectRef = (props) => {
  console.log("ObjectRef render");
  return (
    <>
      <label>{props.info.label}</label>
      <input value={props.info.value} />
    </>
  );
};

export default React.memo(ObjectRef, function (prevProps, nextProps) {
  if (
    prevProps.label === nextProps.label &&
    prevProps.value === nextProps.value
  ) {
    return true;
  }

  return false;
});
