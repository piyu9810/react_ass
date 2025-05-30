import React, { useState } from "react";
import DataFetcher from "./DataFetcher";
import LifecycleLogger from "./LifeCycleLogger";

function App() {
  const [showLogger, setShowLogger] = useState(true);

  return (
    <div>
      <DataFetcher />
      <button onClick={() => setShowLogger(!showLogger)}>
        Toggle Lifecycle Logger
      </button>
      {showLogger && <LifecycleLogger />}
    </div>
  );
}

export default App;
