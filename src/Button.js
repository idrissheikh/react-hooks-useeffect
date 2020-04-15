import React, { useRef } from "react";

export const Button = React.memo(({ counterfn, label, n }) => {
  const renderRef = useRef(0);
  console.log(renderRef.current++);
  return (
    <button onClick={() => counterfn(n)} className="btn btn-primary mt-3">
      {label}
    </button>
  );
});
