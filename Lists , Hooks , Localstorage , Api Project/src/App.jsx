import React from "react";
import Fruits from "./Fruits";
import UserList from "./UserList";
import Counter from "./Counterr.jsx";
import DataFetcher from "./DataFetcher";
import CounterWithRedux from "./CounterWithRedux";
import AvoidRerenders from "./AvoidRerenders.jsx";


const App = () => {
  return (
    <div>
      <h1>React Tasks</h1>
      <h2>Fruits</h2>
      <Fruits />
      <h2>User List</h2>
      <UserList />
      <h2>Counter using useState</h2>
      <Counter />
      <h2>Data Fetching with useEffect</h2>
      <DataFetcher />
      <h2>Redux Counter</h2>
      <CounterWithRedux />
      <h2>Avoid Re-renders using useRef</h2>
      <AvoidRerenders />
    </div>
  );
};

export default App;
