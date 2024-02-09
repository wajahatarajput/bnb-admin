import { useCallback, useEffect, useMemo, useState } from "react";
import { Dashboard, Login } from "./components";

function App() {
  // Stateless and Stateful Components
  // const [data, setData] = useState(null); // variable
  // useState -> Hooks that allows storing of data and manipulation of data inside any component. It makes it stateful.
  // const [value,function_update_value] = useState( Default_Value || null )

  // const function_name = useCallback(function,[depArray])
  // const fun = useCallback(() => { console.log('hello', data) }, [data]) // function

  // const [array, setArray] = useState(['1', '2', '3']);

  // const memo = useMemo(() => {
  //   return array.map((value, index) => {
  //     return <option value={value} key={index}> {value} </option>
  //   })
  // }, [array]) // function_result => function_value

  // useEffect(() => {
  // api call
  // data processing function
  // fun();
  // }, []);


  // Constructor and is used to initialize the starting condition after component is rendered
  // useEffect(() => {
  // body runs after component is rendered / component is mounted
  //   return () => {
  //     // runs when component is unloaded / unmounted
  //   };
  // }, [dependency_array])
  //  we keeps states in dep_array which should be changed every time component is loaded or unloaded

  return (
    <div className="App">
      {/* <select defaultValue={array[0]}>
        {memo}
      </select>
      <input type="text" onChange={(event) => {
        setArray(prev => [...prev, event.target.value]);
      }} /> */}
      <Dashboard>
        <Login type={'Admin'} />
      </Dashboard>
      {/* <Dashboard children={  <Login type={'Admin'} /> }> */}
    </div>
  );
}

export default App;