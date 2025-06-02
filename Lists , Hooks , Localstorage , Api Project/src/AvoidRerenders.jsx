import React, { useRef, useState } from "react";

const AvoidRerenders = () => {
  const renderCount = useRef(0);
  const [state, setState] = useState(0);

  renderCount.current += 1;

  return (
    <div>
      <h2>Render Count: {renderCount.current}</h2>
      <h3>State: {state}</h3>
      <button onClick={() => setState(state + 1)}>Update State</button>
    </div>
  );
};

export default AvoidRerenders;
