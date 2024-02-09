import { useState } from "react";
import { Dashboard, Login } from "./components";

function App() {
  // Stateless and Stateful Components
  const [data, setData] = useState();
  // useState -> Hooks that allows storing of data and manipulation of data inside any component. It makes it stateful.
  // const [getter,setter] = useState( Default_Value || null )

  return (
    <div className="App">
      <Dashboard>
        <Login type={'Admin'} />
      </Dashboard>
      {/* <Dashboard children={  <Login type={'Admin'} /> }> */}
    </div>
  );
}

export default App;